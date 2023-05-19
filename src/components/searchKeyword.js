import React from 'react';
import { useState } from 'react';


function searchKeyword(props) {

  const [keyword,setKeyword]=useState('');

  const handleSearchChange = (event) => {
    setKeyword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        value={searchTerm}
        onChange={e => setKeyword(e.target.value)}
      />
      <button type="submit">검색</button>
    </form>
  );
}

export default searchKeyword;