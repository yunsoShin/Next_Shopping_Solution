import axios from 'axios';
import cheerio from 'cheerio';

export default async (req, res) => {
  const url = 'https://search.shopping.naver.com/search/all?query=%ED%82%A5%EB%B3%B4%EB%93%9C&cat_id=&frm=NVSHATC';
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const products = [];

  $('.basicList_mall_list__S_B5C').each((idx, el) => { // 각 상품에 해당하는 선택자
    const store = $(el).find('.basicList_mall_name__XQlSa').text(); // 각 상품의 쇼핑몰 이름 선택자
    const price = $(el).find('.basicList_price__euNoD').text(); // 각 상품의 가격 선택자

    products.push({
      store: store,
      price: price,
    });
  });
  

  
  
  res.status(200).json(products);
};
