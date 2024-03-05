import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>NSS test</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <div>
          <Image
            className="ml-auto mr-auto"
            src="/images/logo.png"
            alt="Logo image"
            width="256px"
            height="256px"
          /> 
          {/* 해당이미지는 추후 로고 디자인 후 , 변경하도록합니다. */}
        </div>
        <span>셀러들을 위한 소싱</span>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/productSearchPage">
          <a className="btn-blue">Solution of the Sellers, by the Sellers, for the Sellers</a>
        </Link>
      </div>
    </React.Fragment>
  )
}
