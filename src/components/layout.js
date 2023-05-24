import Link from "next/link";
import styled from "styled-components";
import Loading from "./loading";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: purple;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background-color: papayawhip;
`;

// Create a StyledLink component that'll render an <a> tag with some styles

export default function Layout() {
  return (
    <Wrapper>
      <div>
        <Title>
          안녕하세요 최고의 만족도를 자랑하는 셀러 솔루션을 제공합니다
        </Title>
        <Link href="/productSearchPage" passHref>
          상품검색하러가기
        </Link>
      </div>
    </Wrapper>
  );
}
