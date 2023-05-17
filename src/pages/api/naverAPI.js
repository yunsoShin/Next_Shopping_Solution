import axios from 'axios';
import cheerio from 'cheerio'

export default async (req, res) => {
  const url = 'https://search.shopping.naver.com/search/all?query=%ED%82%A5%EB%B3%B4%EB%93%9C&cat_id=&frm=NVSHATC'; // 크롤링하려는 웹사이트 URL
  const { data } = await axios.get(url);

  const $ = cheerio.load(data); // HTML 문서 로드
  const contentText = $('#content').text(); // id가 "content"인 div의 모든 텍스트 추출

  res.status(200).json({ text: contentText }); // 추출한 텍스트를 JSON 형식으로 반환
}




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