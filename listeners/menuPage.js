import { container, apiKey } from "../utils/constants.js";
import { errorPage } from "../views/errorPage.js";
import {
  showCityWeather,
  search,
  menuPage,
  closeBtn,
} from "../views/showCityWeather.js";

export const menuBar = () => {
  menuPage.classList.remove("close");
};

closeBtn.addEventListener("click", () => {
  menuPage.classList.add("close");
});

search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const searchCity = search.value;
    const citiesWeather = function () {
      const cityWeather = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${searchCity}&appid=${apiKey}`;
      fetch(cityWeather)
        .then((res) => res.json())
        .then((data) => {
          showCityWeather(data);
        })
        .catch((err) => {
          errorPage(err);
        });
    };
    citiesWeather();
  }
});
