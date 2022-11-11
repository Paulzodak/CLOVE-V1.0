import { configureStore } from "@reduxjs/toolkit";
import styles from "./styles";
import ui from "./ui";
import search from "./search";
import cart from "./cart";
export default configureStore({
  reducer: {
    styles: styles,
    ui: ui,
    search: search,
    cart: cart,
  },
});
