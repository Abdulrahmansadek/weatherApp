import { imgWeather, location } from "./constants.js";
import { getWeather } from "./app.js";
export const showWeather = function (data) {
  const { timezone } = data;
  const { temp, feels_like, humidity, pressure, wind_speed } = data.current;
  const { icon } = data.current.weather[0];
  location.textContent = timezone;
  imgWeather.innerHTML = ` <span> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="" /></span>
    
    <span class="degree"><h2>${temp} º</h2> </span>
    <span class='info'> <ul>
    <li>Humidity : ${humidity} %</li>
    <li>Pressure : ${pressure}</li>
    <li>Feels like : ${feels_like} º</li>
    <li>Wind Speed : ${wind_speed}</li>
    </ul> </span>`;
};
