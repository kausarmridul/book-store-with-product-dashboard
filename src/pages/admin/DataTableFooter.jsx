import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setRowsPerPage } from "../../features/bookSlice";

const DataTableFooter = ({ totalData }) => {
  const dispatch = useDispatch();
  const { currentPage, rowsPerPage } = useSelector((state) => state.book);

  const totalPages = Math.ceil(totalData / rowsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handleRowsChange = (e) => {
    dispatch(setRowsPerPage(Number(e.target.value)));
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-3">
        <h2 className="text-black text-xl">Rows per page:</h2>
        <select
          value={rowsPerPage}
          onChange={handleRowsChange}
          className="border text-xl px-2 py-1 outline-none"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="bg-col-5 px-1 py-1 rounded-md disabled:opacity-40"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <FaAngleLeft size={24} />
        </button>
        <span>
          {currentPage}/{totalPages}
        </span>
        <button
          className="bg-col-5 px-1 py-1 rounded-md disabled:opacity-40"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <FaAngleRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default DataTableFooter;
