import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import {URLupdate} from '../pages/api/naverAPI'
import { useRouter } from 'next/router';

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

function searchKeyword(props) {

  const [keyword,setKeyword]=useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    URLupdate(keyword).then(router.push('/api/naverAPI'));
  }
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="검색어를 입력하세요."
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <StyledButton type="submit">검색</StyledButton>
    </StyledForm>
  );
}



export default searchKeyword;