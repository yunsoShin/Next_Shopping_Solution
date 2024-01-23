import puppeteer from "puppeteer";
import {
  DataProcessingMallPrice,
  DataProcessingMinPrice,
  ProductDetailName,
  ProductPrice,
} from "../../utils/dataProcessing";

const UpdateURL = (keyword, pageIndex) => {
  const url = `https://search.shopping.naver.com/search/all?origQuery=${keyword}
  &pagingIndex=${pageIndex}
  &pagingSize=80&productSet=total&query=${keyword}
  &sort=rel&timestamp=&viewType=list​`;
  const enc = encodeURI(url);
  return enc;
};

const PageScroll = async (page) => {
  await page.evaluate(async () => {
    await new Promise<void>((resolve, reject) => {
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
      }, 5);
    });
  });
};

const PageCrawling = async (page, productClass) => {
  return await page.evaluate((productClass) => {
    const productElements = Array.from(
      document.querySelectorAll(`[class^="${productClass}"]`)
    );
    const products = productElements.map((element) => {
      const htmlElement = element as HTMLElement;
      return {
        text: htmlElement.innerText,
        href: htmlElement.querySelector("a")?.href,
      };
    });
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
    const keyword = req.query.crawData;
    const pageIndex = isNaN(req.query.pageIndex)
      ? 1
      : Number(req.query.pageIndex);
    const url = UpdateURL(keyword, pageIndex);

    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", (request) => {
      if (["image", "font"].indexOf(request.resourceType()) !== -1) {
        request.abort();
      } else {
        request.continue();
      }
    });
    await page.setViewport({ width: 1920, height: 5040 }); // 원하는 해상도로 설정

    await page.goto(url, { waitUntil: "networkidle0" });
    await PageScroll(page);
    const products = await PageCrawling(page, "product_item__");

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
