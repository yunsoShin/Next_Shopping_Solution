import puppeteer from 'puppeteer';
import { DataProcessingMallPrice , DataProcessingMinPrice } from '../../utils/dataProcessing';

export function UpdateURL(keyword){
  const url=`https://search.shopping.naver.com/search/all?origQuery=${keyword}
  &pagingIndex=1
  &pagingSize=80&productSet=total&query=${keyword}
  &sort=rel&timestamp=&viewType=list​`
  return url;
}


export default async (req, res) => {
  const keyword=req.query.id;
  const url = UpdateURL(keyword);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle0' });

  // Scroll to the bottom of the page
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight){
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });

  
  const [elementsName, elementsPrice, elementsMinPrice, elementsLink] = await Promise.all([
    page.evaluate(() => {const Name = Array.from(document.querySelectorAll('[class^="basicList_title__"]')).map(element => element.innerText);
      return Name;}),
    page.evaluate(() => {const Price = Array.from(document.querySelectorAll('[class^="basicList_mall_area__"]')).map(element => element.innerText);
      return Price;}),
    page.evaluate(() => { const minPrice = Array.from(document.querySelectorAll('[class^="price_price__"]')).map(element => element.innerText);  
      return minPrice;}),
    page.evaluate(() => {const productLink = Array.from(document.querySelectorAll('[class^="thumbnail_thumb__"]')).map(element => element.href);  
      return productLink;}),
  ]);
  const result = elementsName.reduce((acc, name, index) => {
    const MallPrice = DataProcessingMallPrice(elementsPrice[index]);
    const MinPrice = DataProcessingMinPrice(elementsMinPrice[index]);
    const FilteredPrices = Object.entries(MallPrice).filter(([shop, price]) => {
      return MinPrice*1.2+3000 < price
    });
    const Profit = [FilteredPrices[0],FilteredPrices[1]-MinPrice-FilteredPrices[1]*0.1];
    const ProfitPer = [FilteredPrices[0],Math.floor(FilteredPrices[1]-MinPrice-FilteredPrices[1]*0.1/FilteredPrices*100)];
    if (FilteredPrices.length > 0) {
      acc.push({
        name: name,
        mallPrice: FilteredPrices,
        MinPrice: MinPrice,
        Link: elementsLink[index],
        ItemProfit:Profit,
        ItemProfitPer:ProfitPer

      });
    }
  
    return acc;
  }, []);
  



// This will close the browser
await browser.close();

// Send JSON response
res.status(200).json(result);

}





{/* cheerio를 통한 크롤링
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

*/}