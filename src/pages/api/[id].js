import puppeteer from "puppeteer";
import {
  DataProcessingMallPrice,
  DataProcessingMinPrice,
  ProductDetailName,
  ProductPrice,
  getProductDetails,
} from "../../utils/dataProcessing";

function UpdateURL(keyword, pageIndex) {
  const url = `https://search.shopping.naver.com/search/all?origQuery=${keyword}
  &pagingIndex=${pageIndex}
  &pagingSize=20&productSet=total&query=${keyword}
  &sort=rel&timestamp=&viewType=list​`;
  return url;
}

async function PageScroll(page) {
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
}
async function PageCrawling(page, productClass) {
  return await page.evaluate((productClass) => {
    const productElements = Array.from(
      document.querySelectorAll(`[class^="${productClass}"]`)
    );
    const productData = productElements.map((element) => ({
      text: element.innerText,
      href: element.querySelector("a")?.href,
    }));
    return productData;
  }, productClass);
}

export default async (req, res) => {
  const keyword = req.query.id;
  const pageIndex = Number(req.query.pageIndex || 1);
  const url = UpdateURL(keyword, pageIndex);
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });
  await PageScroll(page);
  const productArr = await PageCrawling(page, "product_item__");
  await browser.close();

  const response = productArr.map((item) => {
    const detail = item.text;
    const link = item.href;
    const name = ProductDetailName(detail);
    const price = DataProcessingMallPrice(ProductPrice(detail));
    const minPrice = DataProcessingMinPrice(ProductPrice(detail));

    return {
      detail: detail,
      link: link,
      name: name,
      price: price,
      minPrice: minPrice,
    };
  });

  res.status(200).json(response);
};
