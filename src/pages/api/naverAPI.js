import axios from 'axios';
import cheerio from 'cheerio'

import puppeteer from 'puppeteer';

export default async (req, res) => {
  const url = 'https://search.shopping.naver.com/search/all?query=%ED%82%A5%EB%B3%B4%EB%93%9C&cat_id=&frm=NVSHATC';

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

  const elementsText = await page.evaluate(() => {
    const elements = document.querySelectorAll('[class^="basicList_title__"]');
    return Array.from(elements).map(element => element.innerText);
  });

  await browser.close();

  res.status(200).json({ text: elementsText });
}









{/*

export default async (req, res) => {
  const url = 'https://search.shopping.naver.com/search/all?query=%ED%82%A5%EB%B3%B4%EB%93%9C&cat_id=&frm=NVSHATC'; // 크롤링하려는 웹사이트 URL
  const { data } = await axios.get(url);

  const $ = cheerio.load(data); // HTML 문서 로드
  const contentText = $('#content').text(); // id가 "content"인 div의 모든 텍스트 추출

  res.status(200).json({ text: contentText }); // 추출한 텍스트를 JSON 형식으로 반환
}

*/}



{/*import puppeteer from 'puppeteer';

export default async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://search.shopping.naver.com/search/all?query=%ED%82%A5%EB%B3%B4%EB%93%9C&cat_id=&frm=NVSHATC');

  const content = await page.evaluate(() => {
    const el = document.querySelector('#content');
    return el ? el.innerText : '';
  });

  await browser.close();

  res.status(200).json({ content });
};
*/}


