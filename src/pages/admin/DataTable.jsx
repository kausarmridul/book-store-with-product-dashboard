import DataTableBody from "./DataTableBody";
import DataTableHeader from "./DataTableHeader";

const DataTable = ({ filteredProduct }) => {
  return (
    <div className="overflow-auto">
      <table className="w-full">
        <thead>
          <DataTableHeader />
        </thead>
        <tbody>
          <DataTableBody filteredProduct={filteredProduct} />
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
