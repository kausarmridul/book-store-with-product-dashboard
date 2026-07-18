import { useSelector } from "react-redux";

const DataTableHeader = () => {
  const {
    idShow,
    titleShow,
    descShow,
    authShow,
    statusShow,
    genreShow,
    actionShow,
  } = useSelector((state) => state.preference);

  return (
    <>
      <tr>
        <th
          className={` text-left py-3 text-lg ${idShow === "show" ? "hidden" : "table-cell"}`}
        >
          #
        </th>
        <th
          className={` text-left pl-3 py-3 text-lg ${titleShow === "show" ? "hidden" : "table-cell"}`}
        >
          Title
        </th>
        <th
          className={` text-left pl-3 py-3 text-lg ${descShow === "show" ? "hidden" : "table-cell"}`}
        >
          Description
        </th>
        <th
          className={` text-left pl-3 py-3 text-lg ${authShow === "show" ? "hidden" : "table-cell"}`}
        >
          Author
        </th>
        <th
          className={` text-left pl-3 py-3 text-lg ${statusShow === "show" ? "hidden" : "table-cell"}`}
        >
          Status
        </th>
        <th
          className={` text-left pl-3 py-3 text-lg ${genreShow === "show" ? "hidden" : "table-cell"}`}
        >
          Genre
        </th>
        <th
          className={` text-left pl-3 py-3 text-lg ${actionShow === "show" ? "hidden" : "table-cell"}`}
        >
          Action
        </th>
      </tr>
    </>
  );
};

export default DataTableHeader;
