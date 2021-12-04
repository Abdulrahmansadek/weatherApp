import { container } from "../utils/constants.js";

export const menuBar = () => {
  const sidePage = document.createElement("div");
  container.appendChild(sidePage);
  sidePage.classList.add("side-page");
};
