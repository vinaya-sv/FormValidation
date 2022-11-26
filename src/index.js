import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Form from "./form";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Form />
  </StrictMode>
);
