
export const normalizeData = (text) => {
  let allowedShops = ["쿠팡", "G마켓", "11번가","옥션","SSG닷컴"]; 
  let words = text.split("\n");
  let shopPrice={};

  for(let i=0; words.length>i; i++){
    if(allowedShops.includes(words[i])){
      let price = words[i+1].replace(/,/g,''); //가격가져오고 ',' 삭제
      shopPrice[words[i]]=parseInt(price,10); //10진수
    }
  }
  
  return shopPrice;
      
  
  ;
}
