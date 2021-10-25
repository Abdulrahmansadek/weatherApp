import {
  degree,
  todayDegree,
  week,
  days,
  apiKey,
  imgWeather,
} from "./constants.js";
import { weekDays } from "./data.js";
import { update } from "./updateTimeAndDate.js";
import { showWeather } from "./showWeather.js";
todayDegree.forEach((today) => {
  today.innerHTML = `   
    <span id="time">12:00</span>
    <span id="weatherDegree"><img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" /></span>
    <span id="degreeDay">20</span>
  `;
});

function getWeather() {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        showWeather(data);
      });
  });
}
getWeather();
