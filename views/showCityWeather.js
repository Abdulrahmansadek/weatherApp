import { container } from "../utils/constants.js";

export const menuPage = document.createElement("div");
container.appendChild(menuPage);
menuPage.className = "menu-page";
menuPage.setAttribute("data-aos", "fade-down");
const pageContainer = document.createElement("div");
menuPage.appendChild(pageContainer);
pageContainer.classList.add("page-container");
const searchBar = document.createElement("div");
pageContainer.appendChild(searchBar);
searchBar.classList.add("search-bar");
export const search = document.createElement("input");
searchBar.appendChild(search);
export const closeBtn = document.createElement("button");
closeBtn.classList.add("close-btn");
searchBar.appendChild(closeBtn);
closeBtn.textContent = "X";

export const showCityWeather = (data) => {
  console.log(data.main);
  const citiesContainer = document.createElement("div");
  pageContainer.appendChild(citiesContainer);
  citiesContainer.classList.add("cities-container");
  const city = document.createElement("div");
  citiesContainer.appendChild(city);
  city.classList.add("city");
  const cityName = document.createElement("h3");
  const cityIcon = document.createElement("img");
  const cityTemp = document.createElement("h3");
  const removeBtn = document.createElement("button");
  city.append(cityName, cityIcon, cityTemp, removeBtn);
  cityName.textContent = search.value;
  cityIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );

  cityTemp.textContent = `${data.main.temp}º`;
  removeBtn.textContent = "X";
  removeBtn.classList.add("remove-btn");
};
