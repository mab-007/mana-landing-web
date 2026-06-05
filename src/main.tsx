import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

// Capture mode (?shot): flattens snap slides so the whole page can be
// screenshotted in one shot. No effect on normal visits.
if (typeof location !== "undefined" && location.search.includes("shot")) {
  document.documentElement.classList.add("shot");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
