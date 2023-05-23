import styled from 'styled-components';

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
`;



export function ProductItem({ item }) {
  return (
    <ItemContainer>
      <ItemLink href={item.Link} target='_blank' rel="noopener noreferrer" >
        <ItemName>Name: {item.name}</ItemName>
      </ItemLink>
      <div>
      {Object.entries(item.mallPrice).map(([shop, price]) => (
          <ItemPrice key={shop}> {price[0]}:{price[1]} 원</ItemPrice>
        ))}
      </div>
      <ItemPrice>Min Price: {item.MinPrice}원</ItemPrice>
      {Object.entries(item.mallPrice).map(([shop, price]) => (
          <ItemProfit key={shop}> {price[0]}:{price[1]-item.MinPrice-price[1]*0.1}원 {Math.floor((price[1]-item.MinPrice-price[1]*0.1)/price[1]*100)}%⬆️, (수수료10%)</ItemProfit>
        ))}
      

    </ItemContainer>
  );
}
