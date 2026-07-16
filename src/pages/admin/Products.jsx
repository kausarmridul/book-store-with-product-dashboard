import { FaFilter, FaPlus } from "react-icons/fa";
import SearchBar from "../../components/SearchBar";
import DataTable from "./DataTable";
import { useState } from "react";
import { assets, dataItem } from "../../assets";
import { AiOutlineMenu } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";

const Products = () => {
  const { setOpenNav } = useOutletContext();
  const [search, setSearch] = useState("");

  const filteredProduct = dataItem.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(search.toLowerCase());
    const descMatch = product.description
      .toLowerCase()
      .includes(search.toLowerCase());
    const statusMatch = product.status
      .toLowerCase()
      .includes(search.toLowerCase());

    return nameMatch || statusMatch || descMatch;
  });
  return (
    <div className="grid gap-5">
      <div className="flex items-center justify-between border-b border-black pb-3 lg:hidden">
        <img src={assets.admin_logo} alt="Logo" className="img-fluid" />
        <button onClick={() => setOpenNav((prev) => !prev)}>
          <AiOutlineMenu size={26} />
        </button>
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-5">
        <div className="flex items-center gap-4">
          <button className="min-w-10 min-h-8 rounded-md flex items-center justify-center bg-white shadow">
            <FaFilter className="text-black" />
          </button>
          <SearchBar
            rounded="rounded-md py-[3px] max-lg:w-full"
            search={search}
            setSearch={setSearch}
            inputWidth={"max-lg:w-full"}
          />
        </div>
        <div>
          <button className="bg-col-9 rounded-md text-white px-5 py-2 font-medium text-sm gap-2 flex items-center w-full max-lg:justify-center">
            <FaPlus />
            Add Products
          </button>
        </div>
      </div>
      <DataTable filteredProduct={filteredProduct} />
    </div>
  );
};

export default Products;
