import { FaFilter, FaPlus } from "react-icons/fa";
import SearchBar from "../../components/SearchBar";
import DataTable from "./DataTable";
import { assets } from "../../assets";
import { AiOutlineMenu } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";
import AddModal from "../../components/AddModal";
import { useDispatch } from "react-redux";
import { addToggleModal, filterToggleModal } from "../../features/prefSlice";
import EditModal from "../../components/EditModal";
import FilterModal from "../../components/FilterModal";

const Products = () => {
  const { setOpenNav } = useOutletContext();

  const dispatch = useDispatch();

  const addBookModal = () => {
    dispatch(addToggleModal());
  };

  return (
    <div className="grid gap-5">
      <AddModal />
      <EditModal />
      <FilterModal />
      <div className="flex items-center justify-between border-b border-black pb-3 lg:hidden">
        <img src={assets.admin_logo} alt="Logo" className="img-fluid" />
        <button onClick={() => setOpenNav((prev) => !prev)}>
          <AiOutlineMenu size={26} />
        </button>
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-5">
        <div className="flex items-center gap-4">
          <button
            className="min-w-10 min-h-8 rounded-md flex items-center justify-center bg-white shadow"
            onClick={() => dispatch(filterToggleModal())}
          >
            <FaFilter className="text-black" />
          </button>
          <SearchBar
            rounded="rounded-md py-[3px] max-lg:w-full"
            inputWidth={"max-lg:w-full"}
          />
        </div>
        <div>
          <button
            className="bg-col-9 rounded-md text-white px-5 py-2 font-medium text-sm gap-2 flex items-center w-full max-lg:justify-center"
            onClick={addBookModal}
          >
            <FaPlus />
            Add Products
          </button>
        </div>
      </div>
      <DataTable />
    </div>
  );
};

export default Products;
