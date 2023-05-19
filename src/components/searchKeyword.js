import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 350px;
  
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #4CAF50; /* Green */
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const fetcher = url => fetch(url).then(res => res.json());

function searchKeyword(props) {
  
  const [searchWord,setSearchWord]=useState('');

  const handleSubmit = async () => {
    
    try {
      const response = await fetch('/api/naverAPI');
      if (!response.ok) {
        throw new Error('Failed to fetch API');
      }
      const data = await response.json();
      // 데이터 처리 로직 추가
    } catch (error) {
      console.error(error);
      // 에러 처리 로직 추가
    }
  };
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <StyledForm>
      <StyledInput
        type="text"
        placeholder="검색어를 입력하세요."
        value={searchWord}
        onChange={e => setSearchWord(e.target.value)}
      />
      <StyledButton type="submit">검색</StyledButton>
    </StyledForm>
  );
}



export default searchKeyword;