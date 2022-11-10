import { configureStore } from "@reduxjs/toolkit";
import styles from "./styles";
import ui from "./ui";
import search from "./search";
export default configureStore({
  reducer: {
    styles: styles,
    ui: ui,
    search: search,
  },
});
