import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  filterToggleModal,
  idShowRow,
  titleShowRow,
  descShowRow,
  authShowRow,
  statusShowRow,
  genreShowRow,
  actionShowRow,
} from "../features/prefSlice";

const FilterModal = () => {
  const {
    filterModalOpen,
    idShow,
    titleShow,
    descShow,
    authShow,
    statusShow,
    genreShow,
    actionShow,
  } = useSelector((state) => state.preference);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(filterToggleModal());
  };
  return (
    <div
      className={`fixed h-full right-0 top-0 w-[60%] md:w-[40%] lg:w-[30%] bg-black flex flex-col gap-10 text-white transition-all duration-300 p-5 overflow-y-auto z-10
        ${filterModalOpen === "open" ? "translate-x-0" : "translate-x-[200%]"}
        `}
    >
      <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">Filter Book</h1>
      <button className="absolute right-4 top-3 z-20" onClick={handleClose}>
        <IoClose size={30} />
      </button>
      <div className="flex flex-col gap-5 h-full justify-center">
        <div>
          <button
            onClick={() => dispatch(idShowRow())}
            className="flex items-center gap-2 text-2xl"
          >
            <input
              type="checkbox"
              className="w-6 h-6 cursor-pointer"
              checked={idShow === "show" ? true : false}
              readOnly
            />
            <label className="cursor-pointer">Id</label>
          </button>
        </div>
        <div>
          <button
            onClick={() => dispatch(titleShowRow())}
            className="flex items-center gap-2 text-2xl"
          >
            <input
              type="checkbox"
              className="w-6 h-6 cursor-pointer"
              checked={titleShow === "show" ? true : false}
              readOnly
            />
            <label className="cursor-pointer">Title</label>
          </button>
        </div>
        <div>
          <button
            onClick={() => dispatch(descShowRow())}
            className="flex items-center gap-2 text-2xl"
          >
            <input
              type="checkbox"
              className="w-6 h-6 cursor-pointer"
              checked={descShow === "show" ? true : false}
              readOnly
            />
            <label className="cursor-pointer">Description</label>
          </button>
        </div>
        <div>
          <button
            onClick={() => dispatch(authShowRow())}
            className="flex items-center gap-2 text-2xl"
          >
            <input
              type="checkbox"
              className="w-6 h-6 cursor-pointer"
              checked={authShow === "show" ? true : false}
              readOnly
            />
            <label className="cursor-pointer">Author</label>
          </button>
        </div>
        <div>
          <button
            onClick={() => dispatch(statusShowRow())}
            className="flex items-center gap-2 text-2xl"
          >
            <input
              type="checkbox"
              className="w-6 h-6 cursor-pointer"
              checked={statusShow === "show" ? true : false}
              readOnly
            />
            <label className="cursor-pointer">Status</label>
          </button>
        </div>
        <div>
          <button
            onClick={() => dispatch(genreShowRow())}
            className="flex items-center gap-2 text-2xl"
          >
            <input
              type="checkbox"
              className="w-6 h-6 cursor-pointer"
              checked={genreShow === "show" ? true : false}
              readOnly
            />
            <label className="cursor-pointer">Genre</label>
          </button>
        </div>
        <div>
          <button
            onClick={() => dispatch(actionShowRow())}
            className="flex items-center gap-2 text-2xl"
          >
            <input
              type="checkbox"
              className="w-6 h-6 cursor-pointer"
              checked={actionShow === "show" ? true : false}
              readOnly
            />
            <label className="cursor-pointer">Action</label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
