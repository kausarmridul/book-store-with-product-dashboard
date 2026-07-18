import { createSlice } from "@reduxjs/toolkit";
import { dataItem } from "../assets";

const initialState = {
  allBooks: dataItem,
  filtedBook: dataItem,
  searchQuery: "",
  selectedBook: null,
  currentPage: 1,
  rowsPerPage: 10,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    filteredBooks: (state, action) => {
      state.filtedBook = state.allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(action.payload) ||
          book.description.toLowerCase().includes(action.payload) ||
          book.status.toLowerCase().includes(action.payload),
      );
      state.searchQuery = action.payload;
    },
    addBooks: (state, action) => {
      state.allBooks = state.allBooks.map((book) => ({
        ...book,
        id: book.id + 1,
      }));
      state.allBooks.unshift({
        ...action.payload,
        id: 1,
      });
      state.filtedBook = state.allBooks;
    },
    deleteBook: (state, action) => {
      const filteredBooks = state.allBooks.filter(
        (book) => book.id !== action.payload,
      );
      state.allBooks = filteredBooks.map((book, index) => ({
        ...book,
        id: index + 1,
      }));

      state.filtedBook = state.allBooks;
    },
    editBook: (state, action) => {
      const { id, title, author, description, status, genre } = action.payload;
      state.allBooks = state.allBooks.map((book) =>
        book.id === id
          ? {
              ...book,
              title,
              author,
              description,
              status,
              genre,
            }
          : book,
      );
      state.filtedBook = state.allBooks;
    },
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
      state.currentPage = 1;
    },
  },
});

export const {
  filteredBooks,
  addBooks,
  deleteBook,
  editBook,
  setSelectedBook,
  setCurrentPage,
  setRowsPerPage,
} = bookSlice.actions;

export default bookSlice.reducer;
