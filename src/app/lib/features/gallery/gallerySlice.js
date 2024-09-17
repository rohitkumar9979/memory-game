const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addImages(state, action) {
      state.push(...action.payload);
    },
  },
});

export const selectAllImages = (state) => state.gallery;

export const { addImages } = gallerySlice.actions;
export default gallerySlice.reducer;
