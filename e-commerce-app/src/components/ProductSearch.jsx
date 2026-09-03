import { useRef } from "react";
import FocusInput from "./FocusInput";

function ProductSearch({ searchTerm, setSearchTerm }) {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <section className="product-search">
      <h2>Search Products</h2>

      <div className="product-search-controls">
        <FocusInput ref={inputRef} value={searchTerm} onChange={handleSearch} />

        <button onClick={focusInput}>Focus Search</button>
      </div>
    </section>
  );
}

export default ProductSearch;
