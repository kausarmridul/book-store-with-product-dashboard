import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { editToggleModal } from "../features/prefSlice";
import { editBook } from "../features/bookSlice";

const EditModal = () => {
  const { editModalOpen } = useSelector((state) => state.preference);
  const { selectedBook } = useSelector((state) => state.book);

  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedBook) {
      setStatus(selectedBook.status);
    }
  }, [selectedBook]);

  const handleClose = () => {
    dispatch(editToggleModal());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookTitle = e.target[0].value;
    const bookDesc = e.target[1].value;
    const bookAuthor = e.target[2].value;
    const bookGenre = e.target[4].value;

    dispatch(
      editBook({
        id: selectedBook.id,
        title: bookTitle,
        author: bookAuthor,
        description: bookDesc,
        status: status,
        genre: bookGenre,
      }),
    );

    dispatch(editToggleModal());

    e.target.reset();
  };

  return (
    <div
      className={`fixed h-full right-0 top-0 w-[60%] md:w-[40%] lg:w-[30%] bg-black flex flex-col gap-10 text-white transition-all duration-300 p-5 overflow-y-auto z-10
      ${editModalOpen === "open" ? "translate-x-0" : "translate-x-[200%]"}`}
    >
      <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">Edit Book</h1>

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
            defaultValue={selectedBook?.title}
            placeholder="Add Title..."
            className="bg-white/90 w-full text-black outline-none p-3 rounded-sm"
          />
        </div>

        <div>
          <input
            type="text"
            defaultValue={selectedBook?.description}
            placeholder="Add Description..."
            className="bg-white/90 w-full text-black outline-none p-3 rounded-sm"
          />
        </div>

        <div>
          <input
            type="text"
            defaultValue={selectedBook?.author}
            placeholder="Add Author..."
            className="bg-white/90 w-full text-black outline-none p-3 rounded-sm"
          />
        </div>

        <div>
          <select
            className="w-full px-3 py-3 bg-white/90 rounded-sm outline-none text-black"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Add Status</option>
            <option value="Available">Available</option>
            <option value="Out Of Stock">Out Of Stock</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            defaultValue={selectedBook?.genre}
            placeholder="Add Genre..."
            className="bg-white/90 w-full text-black outline-none p-3 rounded-sm"
          />
        </div>

        <button className="w-full bg-col-1 text-col-4 py-3 rounded-sm font-semibold text-xl">
          Edit Book
        </button>
      </form>
    </div>
  );
};

export default EditModal;
