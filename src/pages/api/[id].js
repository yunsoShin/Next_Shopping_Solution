import puppeteer from "puppeteer";
import {
  DataProcessingMallPrice,
  DataProcessingMinPrice,
  ProductDetailName,
  ProductPrice,
  getProductDetails,
  ProfitProduct,
} from "../../utils/dataProcessing";

const UpdateURL = (keyword, pageIndex) => {
  const url = `https://search.shopping.naver.com/search/all?origQuery=${keyword}
  &pagingIndex=${pageIndex}
  &pagingSize=80&productSet=total&query=${keyword}
  &sort=rel&timestamp=&viewType=list​`;
  return url;
};

const PageScroll = async (page) => {
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
};

const PageCrawling = async (page, productClass) => {
  return await page.evaluate((productClass) => {
    const productElements = Array.from(
      document.querySelectorAll(`[class^="${productClass}"]`)
    );
    const products = productElements.map((element) => ({
      text: element.innerText,
      href: element.querySelector("a")?.href,
    }));
    return products;
  }, productClass);
};

const getResponseData = async (item) => {
  const [priceData, minPrice, name] = await Promise.all([
    DataProcessingMallPrice(ProductPrice(item.text)),
    DataProcessingMinPrice(item.text),
    ProductDetailName(item.text),
  ]);

  return {
    detail: item.text,
    link: item.href,
    name: name,
    price: priceData,
    minPrice: minPrice,
  };
};

const crawlData = async (req, res) => {
  try {
    const keyword = req.query.id;
    const pageIndex = isNaN(req.query.pageIndex)
      ? 1
      : Number(req.query.pageIndex);
    const url = UpdateURL(keyword, pageIndex);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    await PageScroll(page);
    const products = await PageCrawling(page, "product_item__");
    await browser.close();

    const responses = await Promise.all(
      products
        .filter((item) => {
          const price = DataProcessingMallPrice(ProductPrice(item.text));
          const minPrice = DataProcessingMinPrice(item.text);
          return price.some(({ shop, price }) => price > minPrice * 1.2);
        })
        .map(getResponseData)
    );

    res.status(200).json(responses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default crawlData;
