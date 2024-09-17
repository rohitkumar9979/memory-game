import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./features/gallery/gallerySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      gallery: galleryReducer,
    },
  });
};
