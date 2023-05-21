
export const DataProcessingMallPrice = (text) => {
  let allowedShops = ["쿠팡", "G마켓", "11번가", "옥션", "SSG닷컴"];
  let words = text.split("\n");
  let shopPrice = {};

  for (let i = 0; i < words.length - 1; i++) {
    if (allowedShops.includes(words[i])) {
      const nextWord = words[i + 1];
      if (!isNaN(parseFloat(nextWord.replace(/,/g, '')))) {
        const price = nextWord.replace(/,/g, '');
        shopPrice[words[i]] = parseInt(price, 10);
      }
    }
  }

  return shopPrice;
}



export const DataProcessingMinPrice = (text) => {
  if (!text) {
    return null; // or return a different default value if needed
  }

  let MinPrice = text.replace(/[^0-9]/g, '');
  MinPrice = parseInt(MinPrice, 10);

  return MinPrice;
};
