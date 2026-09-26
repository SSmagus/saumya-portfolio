import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

document.documentElement.classList.toggle("dark", prefersDark.matches);

prefersDark.addEventListener("change", (event) => {
  document.documentElement.classList.toggle("dark", event.matches);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);