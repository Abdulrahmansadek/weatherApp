import { container } from "../utils/constants.js";
import { page } from "../views/menuPage.js";
const menuPage = document.createElement("div");

export const menuBar = () => {
  container.appendChild(menuPage);
  menuPage.className = "menu-page";
  menuPage.setAttribute("data-aos", "fade-down");
  menuPage.innerHTML = page;
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    menuPage.classList.add("close");
  });
};
