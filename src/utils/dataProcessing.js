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
  let lowestPrice = null;

  for (let i = 0; i < textArr.length; i++) {
    let priceString = textArr[i];
    if (priceString) {
      // Replace any non-numeric and non-comma character
      priceString = priceString.replace(/[^0-9,]/g, "");
      // Then replace comma, if any
      const price = priceString.replace(/,/g, "");
      if (!isNaN(parseFloat(price))) {
        lowestPrice = parseInt(price, 10);
        break;
      }
    }
  }

  return lowestPrice;
}

export function ProductDetailName(text) {
  let word = text.split("\t");
  word = word[1];
  word = word.split("\n");
  word = word[1];
  return word;
}

export function ProductPrice(text) {
  let word = text.split("\t");
  word = word[2];
  word = word.split("\n");
  return word;
}
