import { container, todayContainer } from "../utils/constants.js";

export const menuPage = document.createElement("div");
todayContainer.appendChild(menuPage);
menuPage.className = "menu-page";

const pageContainer = document.createElement("div");
menuPage.appendChild(pageContainer);
menuPage.setAttribute("data-aos", "fade-left");
pageContainer.classList.add("page-container");
const searchBar = document.createElement("div");
pageContainer.appendChild(searchBar);
searchBar.classList.add("search-bar");
export const search = document.createElement("input");
searchBar.appendChild(search);
search.setAttribute("id", "search-city");
search.setAttribute("placeholder", "city");
export const closeBtn = document.createElement("button");
closeBtn.classList.add("close-btn");
searchBar.appendChild(closeBtn);
closeBtn.textContent = "X";

export const showCityWeather = (data) => {
  const citiesContainer = document.createElement("div");
  pageContainer.appendChild(citiesContainer);
  citiesContainer.classList.add("cities-container");
  const city = document.createElement("div");
  citiesContainer.appendChild(city);
  city.classList.add("city");
  const cityName = document.createElement("h4");
  const cityIcon = document.createElement("img");
  const cityTemp = document.createElement("h4");
  const removeBtn = document.createElement("button");
  city.append(cityName, cityIcon, cityTemp, removeBtn);
  cityName.textContent = data.name;
  cityIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  const temprature = Math.floor(data.main.temp);
  cityTemp.textContent = `${temprature}º`;
  removeBtn.textContent = "X";
  removeBtn.classList.add("remove-btn");
  search.value = "";

  removeBtn.addEventListener("click", () => {
    city.remove();
  });
};
