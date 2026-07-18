import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToggleModal } from "../features/prefSlice";
import { addBooks } from "../features/bookSlice";

const AddModal = () => {
  const { addModalOpen } = useSelector((state) => state.preference);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(addToggleModal());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookTitle = e.target[0].value;
    const bookDesc = e.target[1].value;
    const bookAuthor = e.target[2].value;
    const bookStatus = e.target[3].value;
    const bookGenre = e.target[4].value;

    dispatch(
      addBooks({
        title: bookTitle,
        author: bookAuthor,
        description: bookDesc,
        status: bookStatus,
        genre: bookGenre,
      }),
    );

    dispatch(addToggleModal());

    e.target.reset();
  };

  return (
    <div
      className={`fixed h-full right-0 top-0 w-[60%] md:w-[40%] lg:w-[30%] bg-black flex flex-col gap-10 text-white transition-all duration-300 p-5 overflow-y-auto z-10
        ${addModalOpen === "open" ? "translate-x-0" : "translate-x-[200%]"}
        `}
    >
      <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">Add Book</h1>
      <button className="absolute right-4 top-3 z-20" onClick={handleClose}>
        <IoClose size={30} />
      </button>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 h-full justify-center"
      >
        <div>
          <input
            type="text"
            placeholder="Add Title..."
            className="bg-white/90 w-full text-black outline-none p-3 rounded-sm"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Add Description..."
            className="bg-white/90 w-full text-black outline-none p-3 rounded-sm"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Add Author..."
            className="bg-white/90 w-full text-black outline-none p-3 rounded-sm"
          />
        </div>
        <div>
          <select className="w-full px-3 py-3 bg-white/90 rounded-sm outline-none text-black">
            <option value="">Add Status</option>
            <option value="Available">Available</option>
            <option value="Out Of Stock">Out Of Stock</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Add Genre..."
            className="bg-white/90 w-full text-black outline-none p-3 rounded-sm"
          />
        </div>
        <button className="w-full bg-col-1 text-col-4 py-3 rounded-sm font-semibold text-xl">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddModal;
