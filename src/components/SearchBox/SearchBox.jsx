import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        className={css.searchLine}
        id="searchBox"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
