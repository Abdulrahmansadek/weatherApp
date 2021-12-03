import {
  degree,
  todayDegree,
  weeks,
  days,
  apiKey,
  imgWeather,
} from "../utils/constants.js";
import { weekDays } from "../assets/data.js";
import { update } from "../components/updateTimeAndDate.js";
import { showWeather } from "../initialize/showWeather.js";
import { showHourlyWeather } from "../weatherviews/showHourlyWeather.js";
import { showDailyWeather } from "../weatherviews/showDailyWeather.js";
import { errorPage } from "../error/errorPage.js";
export const getWeather = function () {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        showWeather(data);
        showDailyWeather(data);
      })
      .catch((err) => {
        errorPage(err);
      });
  });
};

getWeather();
const hourlyWeather = function () {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;

    const dailyUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&units=metric&appid=${apiKey}`;
    fetch(dailyUrl)
      .then((res) => res.json())
      .then((data) => {
        showHourlyWeather(data);
      })
      .catch((err) => {
        errorPage(err);
      });
  });
};
hourlyWeather();
