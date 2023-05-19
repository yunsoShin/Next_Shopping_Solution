import puppeteer from 'puppeteer';
import { normalizeMallPrice , normalizeMinPrice } from '../../utils/normalizeData';



export default async (req, res) => {
  const url=`https://search.shopping.naver.com/search/all?query=${keyword}`
//https://search.shopping.naver.com/search/all?origQuery=모션데스크pagingIndex=2
//https://search.shopping.naver.com/search/all?origQuery=${검색어}&pagingIndex=${검색페이지}&pagingSize=40&productSet=total&query=${검색어}&sort=rel&timestamp=&viewType=list
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
  const elementsLink = await page.evaluate(() => { //모든요소를 가져와 맵으로 text만추출하는 로직,
    const productLink = Array.from(document.querySelectorAll('[class^="thumbnail_thumb__"]')).map(element => element.href);  
    return productLink;
  });



    const result = elementsName.map((name, index) => {
      const MallPrice =normalizeMallPrice(elementsPrice[index])
      const MinPrice = normalizeMinPrice(elementsMinPrice[index])
      
      return {
          name: name,
          mallPrice: MallPrice,
          MinPrice: MinPrice,
          Link: elementsLink[index]
      }
  });



// This will close the browser
await browser.close();

// Send JSON response
res.status(200).json(result);

}




