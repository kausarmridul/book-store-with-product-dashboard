import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, setSelectedBook } from "../../features/bookSlice";
import { editToggleModal } from "../../features/prefSlice";

const DataTableBody = ({ filteredProduct }) => {
  const {
    idShow,
    titleShow,
    descShow,
    authShow,
    statusShow,
    genreShow,
    actionShow,
  } = useSelector((state) => state.preference);

  const { currentPage, rowsPerPage } = useSelector((state) => state.book);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const dispatch = useDispatch();

  const handleEdit = (book) => {
    dispatch(setSelectedBook(book));
    dispatch(editToggleModal());
  };
  const currentData = filteredProduct.slice(startIndex, endIndex);

  return (
    <>
      {currentData.length > 0 ? (
        currentData.map((data) => (
          <tr key={data.id} className={data.bgColor}>
            <td
              className={` py-3 text-lg ${idShow === "show" ? "hidden" : "table-cell"}`}
            >
              {data.id}
            </td>
            <td
              className={` pl-3 py-3 text-lg ${titleShow === "show" ? "hidden" : "table-cell"}`}
            >
              {data.title}
            </td>
            <td
              className={` pl-3 py-3 text-lg ${descShow === "show" ? "hidden" : "table-cell"}`}
            >
              {data.description}
            </td>
            <td
              className={` pl-3 py-3 text-lg ${authShow === "show" ? "hidden" : "table-cell"}`}
            >
              {data.author}
            </td>
            <td
              className={` pl-3 py-3 text-lg ${statusShow === "show" ? "hidden" : "table-cell"}`}
            >
              {data.status}
            </td>
            <td
              className={` pl-3 py-3 text-lg ${genreShow === "show" ? "hidden" : "table-cell"}`}
            >
              {data.genre}
            </td>
            <td
              className={` pl-3 py-3 text-lg ${actionShow === "show" ? "hidden" : "table-cell"}`}
            >
              <button onClick={() => dispatch(deleteBook(data.id))}>
                <MdDelete size={24} />
              </button>
              <button onClick={() => handleEdit(data)}>
                <MdEdit size={24} />
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td className="pl-3">No Search Data Found</td>
        </tr>
      )}
    </>
  );
};

export default DataTableBody;
