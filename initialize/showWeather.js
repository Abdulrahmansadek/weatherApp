import {
  imgWeather,
  location,
  container,
  todayContainer,
} from "../utils/constants.js";
import { menuBar } from "../listeners/menuPage.js";
import { hour } from "../components/updateTimeAndDate.js";
import { menuPage } from "../views/showCityWeather.js";

const menuBtn = document.createElement("button");
menuBtn.addEventListener("click", menuBar);

menuPage.classList.add("close");
container.appendChild(menuBtn);
menuBtn.classList.add("menu-btn");
menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-list" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>`;

export const showWeather = function (data) {
  const { timezone } = data;
  const { temp, feels_like, pressure, sunset } = data.current;
  const { icon, main, description } = data.current.weather[0];

  const convertSunSet = sunset * 1000;
  const setTimeOfSunRise = new Date(convertSunSet);
  const sunSetTime = setTimeOfSunRise.getHours();

  location.textContent = timezone;
  const tempEl = Math.floor(temp);
  const feelsLike = Math.floor(feels_like);
  imgWeather.innerHTML = `
  
   <span> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="" /></span>
    
    <span class="degree"><h2>${tempEl}º</h2> </span>
   
    <span class='info'> <ul>
    <li>Weather  : ${description}</li>
    <li>Pressure : ${pressure}</li>
    <li>Feels like : ${feelsLike} º</li>
    
    </ul> </span>`;

  if (main === "Clouds" && hour <= sunSetTime) {
    container.classList.add("cloudy-day");
  } else if (main === "Fog") {
    container.classList.add("cloudy-day");
  } else if (main === "Clouds" && hour >= sunSetTime) {
    container.classList.add("cloudy-night");
  } else if (main === "Clear" && hour <= sunSetTime) {
    container.classList.add("clear-day");
  } else if (main === "Drizzle" || main === "Rain") {
    container.classList.add("rainy-day");
  } else if (main === "Clear" && hour >= sunSetTime) {
    container.classList.add("cloudy-night");
  }
};
