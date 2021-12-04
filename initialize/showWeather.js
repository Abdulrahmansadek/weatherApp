import {
  imgWeather,
  location,
  container,
  todayContainer,
  weekContainer,
} from "../utils/constants.js";

import { hour } from "../components/updateTimeAndDate.js";

const menuBtn = document.createElement("button");
const btnTxt = document.createElement("h1");

container.appendChild(menuBtn);
menuBtn.appendChild(btnTxt);
menuBtn.classList.add("menu-btn");
btnTxt.classList.add("btn-text");
btnTxt.textContent = "+";

export const showWeather = function (data) {
  const { timezone } = data;
  const { temp, feels_like, humidity, pressure, wind_speed, sunrise, sunset } =
    data.current;
  const { icon, main } = data.current.weather[0];

  const convertSunSet = sunset * 1000;
  const setTimeOfSunRise = new Date(convertSunSet);
  const sunSetTime = setTimeOfSunRise.getHours();
  console.log(sunSetTime, hour, main);

  location.textContent = timezone;
  const tempEl = Math.floor(temp);
  imgWeather.innerHTML = `
  
   <span> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="" /></span>
    
    <span class="degree"><h2>${tempEl}º</h2> </span>
   
    <span class='info'> <ul>
    <li>Humidity : ${humidity} %</li>
    <li>Pressure : ${pressure}</li>
    <li>Feels like : ${feels_like} º</li>
    <li>Wind Speed : ${wind_speed}</li>
    </ul> </span>`;

  if (main === "Clouds" && hour <= sunSetTime) {
    container.classList.add("cloudy-day");
  } else if (main === "Fog") {
    container.classList.add("cloudy-day");
  } else if (main === "Clouds" && hour >= sunSetTime) {
    container.classList.add("cloudy-night");
  } else if (main === "Rain" && hour <= sunSetTime) {
    container.classList.add("rainy-day");
    todayContainer.classList.add("darkGrey");
  } else if (main === "Clear" && hour <= sunSetTime) {
    container.classList.add("clear-day ");
  } else if (main === "Clear" && hour > sunSetTime) {
    container.classList.add("clear-night ");
  }
};
