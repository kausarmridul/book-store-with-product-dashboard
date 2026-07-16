import { FaSearch } from "react-icons/fa";

const SearchBar = ({ rounded = "", search, setSearch, inputWidth = "" }) => {
  return (
    <div
      className={`flex items-center gap-2 bg-white border border-col-5 px-4 py-2 ${rounded}`}
    >
      <FaSearch size={14} />
      <input
        type="text"
        placeholder="Search"
        className={`placeholder:text-col-6 w-full text-black outline-none bg-transparent ${inputWidth}`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
