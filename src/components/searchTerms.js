import React from 'react';
import { useState } from 'react';


function searchTerms(props) {

  const [searchTerm,setSearchTerm]=useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button type="submit">검색</button>
    </form>
  );
}

export default searchTerms;