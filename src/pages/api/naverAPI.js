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
    return {
        name: name,
        price: elementsPrice[index],
        minPrice: elementsMinPrice[index],
        Link: elementsLink[index]
    }
});



// This will close the browser
await browser.close();

// Send JSON response
res.status(200).json(result);

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


