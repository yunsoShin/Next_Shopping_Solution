import Link from "next/link";
import styled from "styled-components";
import Loading from "./loading";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  display: flex;
  justify-content: center; // Added this line for horizontal centering
  align-items: center; // Added this line for vertical centering
  width: 100%;
  height: 150px; // Added this line to make sure the div takes the full viewport height
  text-align: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white; // inherit the color from parent
`;

const LinktoSearch = styled.div`
  height: 20px;
  background-color: gray;
  border-radius: 25px;
  width: 10.5rem;
  color: white;
`;

// Create a StyledLink component that'll render an <a> tag with some styles

export default function Layout() {
  return (
    <Wrapper>
      <div>
        <Title>Solution of the Sellers, by the Sellers, for the Sellers</Title>
        <LinktoSearch>
          <Link
            style={{ textDecoration: "none" }}
            href="/productSearchPage"
            passHref
          >
            <StyledLink>search</StyledLink>
          </Link>
        </LinktoSearch>
      </div>
    </Wrapper>
  );
}
