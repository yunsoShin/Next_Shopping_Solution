import puppeteer from 'puppeteer';
import { DataProcessingMallPrice , DataProcessingMinPrice } from '../../utils/dataProcessing';



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

  const elementsName = await page.evaluate(() => { //모든요소를 가져와 맵으로 text만추출하는 로직,
    const Name = Array.from(document.querySelectorAll('[class^="basicList_title__"]')).map(element => element.innerText);
    return Name;
  });
  const elementsPrice = await page.evaluate(() => { //모든요소를 가져와 맵으로 text만추출하는 로직,
    const Price = Array.from(document.querySelectorAll('[class^="basicList_mall_area__"]')).map(element => element.innerText);
    return Price;
  });
  const elementsMinPrice = await page.evaluate(() => { //모든요소를 가져와 맵으로 text만추출하는 로직,
    const minPrice = Array.from(document.querySelectorAll('[class^="price_price__"]')).map(element => element.innerText);  
    return minPrice;
  });
  const elementsLink = await page.evaluate(() => { //모든요소를 가져와 맵으로 href만추출하는 로직,
    const productLink = Array.from(document.querySelectorAll('[class^="thumbnail_thumb__"]')).map(element => element.href);  
    return productLink;
  });



  const result = elementsName.map((name, index) => {
    const MallPrice =DataProcessingMallPrice(elementsPrice[index])
    const MinPrice = DataProcessingMinPrice(elementsMinPrice[index])
    const filteredPrices = Object.entries(MallPrice).filter(([shop, price]) => {
      return price > (MinPrice * 1.2)+3000;
    });

    return {
        name: name,
        mallPrice: filteredPrices,
        MinPrice: MinPrice,
        Link: elementsLink[index]
    }
});



// This will close the browser
await browser.close();

// Send JSON response
res.status(200).json(result);

}





{/*
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