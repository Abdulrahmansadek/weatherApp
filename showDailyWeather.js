import { days, weeks } from "./constants.js";

export const showDailyWeather = function (data) {
  const daily = data.daily;
  daily.forEach((d) => {
    const { day, night } = d.temp;
    var day1 = getDayName(d.dt, "nl-NL");
    const { icon } = d.weather[0];
    const dayEl = Math.floor(day);
    const nightEl = Math.floor(night);
    weeks.innerHTML += `<div class="days">
  <span id="day"><h3>${day1}</h3></span>
  <span id="icon">
    <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="" />
  </span>
  <span id="deg"> <h3>${dayEl} º / ${nightEl} º</h3></span>
</div>`;
  });
};

function getDayName(timeStamp, locale) {
  var date = new Date(timeStamp * 1000);
  return date.toLocaleDateString(locale, { weekday: "long" });
}
