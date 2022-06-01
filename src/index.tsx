import { createRoot } from "react-dom/client";
import App from "./App";
import "./scss/index.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  // <Provider store={store}>
  <App />
  // </Provider>
);
