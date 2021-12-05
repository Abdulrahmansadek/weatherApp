import { container, apiKey } from "../utils/constants.js";

const menuPage = document.createElement("div");
export const menuBar = () => {
  container.appendChild(menuPage);
  menuPage.className = "menu-page";
  menuPage.setAttribute("data-aos", "fade-down");
  menuPage.innerHTML = String.raw`
  <div class="page-container">
  <div class="search-bar">
    <input type="text" placeholder="city" id="search">  
    <div> <button class="close-btn"> ← </button></div>
   </div>
  </div>
   
   `;

  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    menuPage.classList.add("close");
  });
};

//const citiesWeather = function () {
//   const cityWeather = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=london&appid=${apiKey}`;
//   fetch(cityWeather)
//     .then((res) => res.json())
//     .then((data) => {
//       menuBar(data);
//     })
//     .catch((err) => {
//       errorPage(err);
//     });
// };
// citiesWeather();
