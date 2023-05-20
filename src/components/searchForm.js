export function SearchForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.searchInput;
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="searchInput" type="text" />
      <button type="submit">검색</button>
    </form>
  );
}
