import React from 'react';
import { useState , useContext } from 'react';
import { styled } from 'styled-components';
import { GlobalContext } from '../pages/_app';



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
  const { globalValue, setGlobalValue } = useContext(GlobalContext);
  
  const [searchWord,setSearchWord]=useState('');

  const handleSubmit = async () => {
    event.preventDefault();
    setGlobalValue(searchValue); // 전역변수 업데이트
    setSearchValue(''); // 검색어 값 초기화
    
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