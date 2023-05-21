import React from 'react';
import styled from 'styled-components';

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

export function SearchForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.searchInput;
    onSubmit(value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput name="searchInput" type="text" />
      <StyledButton type="submit">검색</StyledButton>
    </StyledForm>
  );
}
