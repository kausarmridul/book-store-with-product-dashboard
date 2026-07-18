import { useSelector } from "react-redux";
import DataTableBody from "./DataTableBody";
import DataTableHeader from "./DataTableHeader";
import DataTableFooter from "./DataTableFooter";

const DataTable = () => {
  const { filtedBook } = useSelector((state) => state.book);
  return (
    <div className="overflow-auto grid gap-5">
      <div className="border rounded-lg border-col-4 px-3 shadow">
        <table className="w-full">
          <thead>
            <DataTableHeader />
          </thead>
          <tbody>
            <DataTableBody filteredProduct={filtedBook} />
          </tbody>
        </table>
      </div>
      <DataTableFooter totalData={filtedBook.length} />
    </div>
  );
};

export default DataTable;
