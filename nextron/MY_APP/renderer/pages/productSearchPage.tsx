import { SearchForm } from "../component/serchForm";
import { ProductList } from "../component/productList";
import { useState, useEffect } from "react";

async function callUpdateSpeedGoAPI() {
  try {
    // API의 URL
    const apiUrl = "http://localhost:8888/api/updateSpeedGo/";

    // fetch를 사용하여 API 호출
    const response = await fetch(apiUrl);

    // 응답을 JSON 형태로 변환
    const data = await response.json();

    // 로그로 결과 출력
    console.log("API 호출 결과:", data);
  } catch (error) {
    // 오류 발생 시 콘솔에 에러 로그 출력
    console.error("API 호출 중 오류 발생:", error);
  }
}

export default function ProductSearchPage({ initialSearch }) {
  const [search, setSearch] = useState(initialSearch);
  useEffect(() => {
    callUpdateSpeedGoAPI();
  }, []);

  return (
    <div>
      <SearchForm onSubmit={setSearch} />
      <ProductList search={search} />
    </div>
  );
}
