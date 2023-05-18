// normalizeData.js
export const normalizeData = (data) => {
  let allowedShops = ["쿠팡", "지마켓", "11번가","옥션","11번가","SSG"]; 
  return data.map(item => {
    let words = item.price.split(" ");
    let shopPrices = {};
    for(let i = 0; i < words.length; i++) {
      if(allowedShops.includes(words[i])) {
        let priceList = words[i + 1].replace(/,/g, '');
        shopPrices[words[i]] = parseInt(priceList, 10);
      }
    }
    return {
      name: item.name,
      price: shopPrices,
      minPrice: item.minPrice.replaceAll(',','')
    }
  });
}
