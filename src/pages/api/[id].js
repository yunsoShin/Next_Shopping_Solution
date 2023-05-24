import puppeteer from "puppeteer";
import {
  DataProcessingMallPrice,
  DataProcessingMinPrice,
} from "../../utils/dataProcessing";

export function UpdateURL(keyword, pageindex) {
  const url = `https://search.shopping.naver.com/search/all?origQuery=${keyword}
  &pagingIndex=${pageindex}
  &pagingSize=80&productSet=total&query=${keyword}
  &sort=rel&timestamp=&viewType=list​`;
  return url;
}

export default async (req, res) => {
  const keyword = req.query.id;
  const pageIndex = Number(req.query.pageIndex || 1);
  const url = UpdateURL(keyword, pageIndex);
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle0" });

  // Scroll to the bottom of the page
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });

  const [elementsName, elementsPrice, elementsMinPrice, elementsLink] =
    await Promise.all([
      page.evaluate(() => {
        const Name = Array.from(
          document.querySelectorAll(
            '[class^="product_title__"]',
            '[class^="basicList_title__"]'
          )
        ).map((element) => element.innerText);
        return Name;
      }),
      page.evaluate(() => {
        const Price = Array.from(
          document.querySelectorAll(
            '[class^="product_mall_area___"]',
            '[class^="basicList_mall_area__"]'
          )
        ).map((element) => element.innerText);
        return Price;
      }),
      page.evaluate(() => {
        const minPrice = Array.from(
          document.querySelectorAll(
            '[class^="price_num__"]',
            '[class^="price_price__"]'
          )
        ).map((element) => element.innerText);
        return minPrice;
      }),
      page.evaluate(() => {
        const productLink = Array.from(
          document.querySelectorAll(
            '[class^="product_link__"]',
            '[class^="thumbnail_thumb__"]'
          )
        ).map((element) => element.href);
        return productLink;
      }),
    ]);
  const result = elementsName.reduce((acc, name, index) => {
    const MallPrice = DataProcessingMallPrice(elementsPrice[index]);
    const MinPrice = DataProcessingMinPrice(elementsMinPrice[index]);
    const FilteredPrices = Object.entries(MallPrice).filter(([shop, price]) => {
      return MinPrice * 1.2 + 3000 < price;
    });

    if (FilteredPrices.length > 0) {
      acc.push({
        name: name,
        mallPrice: FilteredPrices,
        MinPrice: MinPrice,
        Link: elementsLink[index],
        ItemProfit: FilteredPrices.map(([shop, price]) => [
          shop,
          price - MinPrice - price * 0.1,
        ]),
        ItemProfitPer: FilteredPrices.map(([shop, price]) => [
          shop,
          Math.floor(((price - MinPrice - price * 0.1) / price) * 100),
        ]),
      });
    }

    return acc;
  }, []);
  await browser.close();
  // Send JSON response
  res.status(200).json(result);
};

{
  /* cheerio를 통한 크롤링
import  cheerio  from 'cheerio';
import axios from 'axios';

export function UpdateURL(keyword){
  const url=`https://search.shopping.naver.com/search/all?origQuery=${keyword}
  &pagingIndex=1
  &pagingSize=40&productSet=total&query=${keyword}
  &sort=rel&timestamp=&viewType=list​`
  return url;
}

export default async (req, res) => {
  const keyword = req.query.id;
  const url = UpdateURL(keyword);
  const {data} = await axios.get(url);

  const $ = cheerio.load(data);

  const elementsName = $('[class^="basicList_title__"]').map((index, element) => $(element).text()).get();
  const elementsPrice = $('[class^="basicList_mall_area__"]').map((index, element) => $(element).text()).get();
  const elementsMinPrice = $('[class^="price_price__"]').map((index, element) => $(element).text()).get();
  const elementsLink = $('[class^="thumbnail_thumb__"]').map((index, element) => $(element).attr('href')).get();

  const result = elementsName.map((name, index) => {
    const MallPrice = DataProcessingMallPrice(elementsPrice[index]);
    const MinPrice = DataProcessingMinPrice(elementsMinPrice[index]);

    return {
      name: name,
      mallPrice: MallPrice,
      MinPrice: MinPrice,
      Link: elementsLink[index]
    };
  });

  res.status(200).json(result);
};

*/
}
