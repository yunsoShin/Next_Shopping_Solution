import styled from "styled-components";

const ItemContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
`;

const ItemLink = styled.a`
  text-decoration: none;
  color: #333;
`;

const ItemName = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ItemPrice = styled.p`
  margin: 5px 0;
`;

const ItemProfit = styled.p`
  color: green;
  margin: 5px 0;
  display: flex;
`;

export function ProductItem({ item }) {
  return (
    <ItemContainer>
      <ItemLink href={item.Link} target="_blank" rel="noopener noreferrer">
        <ItemName>{item.name}</ItemName>
      </ItemLink>
      <div>
        {item.mallPrice.map(([shop, price]) => (
          <ItemPrice key={shop}>
            {" "}
            {shop}:{price} 원
          </ItemPrice>
        ))}
      </div>
      <ItemPrice>Min Price: {item.MinPrice}원</ItemPrice>
      {item.ItemProfit.map(([shop, profit], index) => (
        <ItemProfit key={shop}>
          {" "}
          {shop}:{profit}원 {item.ItemProfitPer[index][1]}%⬆️
        </ItemProfit>
      ))}
    </ItemContainer>
  );
}
