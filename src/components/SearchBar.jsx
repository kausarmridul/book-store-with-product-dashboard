import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { filteredBooks } from "../features/bookSlice";

const SearchBar = ({ rounded = "", inputWidth = "" }) => {
  const dispatch = useDispatch();

  const { searchQuery } = useSelector((state) => state.book);

  const handleChange = (e) => {
    dispatch(filteredBooks(e.target.value));
  };

  return (
    <div
      className={`flex items-center gap-2 bg-white border border-col-5 px-4 py-2 ${rounded}`}
    >
      <FaSearch size={14} />
      <input
        type="text"
        placeholder="Search"
        className={`placeholder:text-col-6 w-full text-black outline-none bg-transparent ${inputWidth}`}
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
