import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { V1 } from "./v1/V1";

// Capture mode (?shot): forces reveal content visible for full-page screenshots.
if (typeof location !== "undefined" && location.search.includes("shot")) {
  document.documentElement.classList.add("shot");
}

// Lightweight path-based routing (SPA fallback serves index.html for any path).
const path = location.pathname.replace(/\/+$/, "");
const Page = path === "/v1" ? V1 : App;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
