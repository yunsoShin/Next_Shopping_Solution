

export function ProductItem({ item }) {
  return (
    <div>
      <a href={item.Link} target='_blank' rel="noopener noreferrer" >
        <p>Name: {item.name}</p>
      </a>
      <div>
        {Object.entries(item.mallPrice).map(([shop, price]) => (
          <p key={shop}>{shop}: {price} 원</p>
        ))}
      </div>
      <p>Min Price: {item.MinPrice} 원</p>
      <p>-----------------------------------------------</p>
    </div>
  );
}