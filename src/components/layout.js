import { useRouter } from "next/router";
import styled from "styled-components";
import Loading from "./loading";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Wrapper = styled.section`
  padding: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  text-align: center;
`;

const Button = styled.button`
  height: 20px;
  background-color: gray;
  border-radius: 25px;
  width: 9.5rem;
  color: white;
  border: none;
  cursor: pointer;
`;

export default function Layout() {
  const router = useRouter();

  const handleSearchButtonClick = () => {
    router.push("/productSearchPage");
  };

  return (
    <Wrapper>
      <div>
        <Title>Solution of the Sellers, by the Sellers, for the Sellers</Title>
        <Button onClick={handleSearchButtonClick}>Search</Button>
      </div>
    </Wrapper>
  );
}
