import { days, weeks } from "./constants.js";
import { weekDays } from "./data.js";
export const showDailyWeather = function (data) {
  const daily = data.daily;

  daily.forEach((d) => {
    const { day, night } = d.temp;
    const { icon } = d.weather[0];
    weeks.innerHTML += `<div class="days">
    <span id="day"><h3>${weekDays[0]}</h3></span>
    <span id="icon">
      <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="" />
    </span>
    <span id="deg"> <h3>${day} º / ${night} º</h3></span>
  </div>`;
  });
};
