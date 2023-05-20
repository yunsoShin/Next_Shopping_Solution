import { useContext } from 'react';

function SearchForm() {

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.searchInput;


    console.log(globalValue)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="searchInput" type="text" />
      <button type="submit">검색</button>
    </form>
  );
}

export default SearchForm;
