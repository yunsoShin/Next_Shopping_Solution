import Link from 'next/link'
import ProductList from './productList'
import searchKeyword from './searchKeyword'
export default function Layout(){
  return (
    <div>
      <searchKeyword></searchKeyword>
      <ProductList></ProductList>
    </div>
  )
}