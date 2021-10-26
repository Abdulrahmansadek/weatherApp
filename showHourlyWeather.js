import { degree } from "./constants.js";
import { update } from "./updateTimeAndDate.js";
export const showHourlyWeather = function (data) {
  const hourlyTemps = data.hourly;
  hourlyTemps.forEach((hourlyTemp) => {
    const { temp } = hourlyTemp;
    const { icon } = hourlyTemp.weather[0];
    degree.innerHTML += ` <div class="hourlyDegree">
          <span id="time"></span>
          <span id="weatherDegree"
            // ><img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt=""
          /></span>
          <span id="degreeDay">${temp} º</span>
        </div>`;
  });
};
