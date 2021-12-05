import { container } from "../utils/constants.js";

const menuPage = document.createElement("div");

export const menuBar = () => {
  container.appendChild(menuPage);
  menuPage.className = "menu-page";
  menuPage.setAttribute("data-aos", "fade-down");
  menuPage.innerHTML = String.raw`
 <div class="search-bar">
   <input type="text" placeholder="city">  
   <div> <button class="close-btn"> ← </button></div>
  </div>
  `;
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    menuPage.classList.add("close");
  });
};
