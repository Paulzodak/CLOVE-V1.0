import { configureStore } from "@reduxjs/toolkit";
import styles from "./styles";
import ui from "./ui";
export default configureStore({
  reducer: {
    styles: styles,
    ui: ui,
  },
});
