import puppeteer from "puppeteer";

const crawlData = async (req, res) => {
  try {
    const url = "https://speedgo.domeggook.com/";

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 }); // 원하는 해상도로 설정

    await page.goto(url, { waitUntil: "networkidle0" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default crawlData;
