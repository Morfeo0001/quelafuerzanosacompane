import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { Footer } from "./App.jsx";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <App />
   </StrictMode>,
);
createRoot(document.getElementById("Footer")).render(
   <StrictMode>
      <Footer />
   </StrictMode>,
);
