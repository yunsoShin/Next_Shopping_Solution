export function DataProcessingMallPrice(textArr) {
  let allowedShops = ["쿠팡", "G마켓", "11번가", "옥션", "SSG닷컴"];
  let shopPrice = [];

  for (let i = 0; i < textArr.length; i++) {
    if (allowedShops.includes(textArr[i])) {
      let priceString = textArr[i + 1];
      if (priceString) {
        // Replace any non-numeric and non-comma character
        priceString = priceString.replace(/[^0-9,]/g, "");
        // Then replace comma, if any
        const price = priceString.replace(/,/g, "");
        if (!isNaN(parseFloat(price))) {
          shopPrice.push({ shop: textArr[i], price: parseInt(price, 10) });
        }
      }
    }
  }
  return shopPrice;
}

export function DataProcessingMinPrice(textArr) {
  //최저102000원판매처17
  let productDetails = productDetail(textArr);
  let Prices = productDetails[2];
  Prices = Prices.split("원");
  Prices = Prices[0].replace(/,/g, "").replace(/[^0-9]/g, "");

  return Prices;
}

export function productDetail(text) {
  let word = text.split("\t");
  word = word[1];
  word = word.split("\n");
  return word;
}

export function ProductDetailName(text) {
  let word = productDetail(text);
  word = word[1];
  return word;
}

export function ProductPrice(text) {
  let word = text.split("\t");
  word = word[2];
  word = word.split("\n");
  return word;
}

export function ProfitProduct(minPrice:number, price:number) {
  const filteredPrices = Object.entries(price).filter(([shop, price]) => {
    return (minPrice + 3000) * 1.2 < price;
  });

  let profitablePrice = {};

  if (filteredPrices.length > 0) {
    for (let i = 0; i < filteredPrices.length; i++) {
      const [shop, price] = filteredPrices[i];
      profitablePrice[shop] = price;
    }
  }

  return profitablePrice;
}
