import Link from 'next/link'


export default function Layout(){
  return (
    <div>
      안녕하세요 최고의 만족도를 자랑하는 셀러 솔루션을 제공합니다
      <Link href="/productSearchPage">
            상품검색하러가기
      </Link>
    </div>
  )
}