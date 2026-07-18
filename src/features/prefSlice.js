import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addModalOpen: "closed",
  editModalOpen: "closed",
  filterModalOpen: "closed",
  idShow: "hide",
  titleShow: "hide",
  descShow: "hide",
  authShow: "hide",
  statusShow: "hide",
  genreShow: "hide",
  actionShow: "hide",
};

const prefSlice = createSlice({
  name: "preference",
  initialState,
  reducers: {
    addToggleModal: (state) => {
      state.addModalOpen = state.addModalOpen === "closed" ? "open" : "closed";
    },
    editToggleModal: (state) => {
      state.editModalOpen =
        state.editModalOpen === "closed" ? "open" : "closed";
    },
    filterToggleModal: (state) => {
      state.filterModalOpen =
        state.filterModalOpen === "closed" ? "open" : "closed";
    },
    idShowRow: (state) => {
      state.idShow = state.idShow === "show" ? "hide" : "show";
    },
    titleShowRow: (state) => {
      state.titleShow = state.titleShow === "show" ? "hide" : "show";
    },
    descShowRow: (state) => {
      state.descShow = state.descShow === "show" ? "hide" : "show";
    },
    authShowRow: (state) => {
      state.authShow = state.authShow === "show" ? "hide" : "show";
    },
    statusShowRow: (state) => {
      state.statusShow = state.statusShow === "show" ? "hide" : "show";
    },
    genreShowRow: (state) => {
      state.genreShow = state.genreShow === "show" ? "hide" : "show";
    },
    actionShowRow: (state) => {
      state.actionShow = state.actionShow === "show" ? "hide" : "show";
    },
  },
});

export const {
  addToggleModal,
  editToggleModal,
  filterToggleModal,
  idShowRow,
  titleShowRow,
  descShowRow,
  authShowRow,
  statusShowRow,
  genreShowRow,
  actionShowRow,
} = prefSlice.actions;
export default prefSlice.reducer;
