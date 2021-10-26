import {
  degree,
  todayDegree,
  weeks,
  days,
  apiKey,
  imgWeather,
} from "./constants.js";
import { weekDays } from "./data.js";
import { update } from "./updateTimeAndDate.js";
import { showWeather } from "./showWeather.js";
import { showHourlyWeather } from "./showHourlyWeather.js";
import { showDailyWeather } from "./showDailyWeather.js";

export const getWeather = function () {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        showWeather(data);
        showDailyWeather(data);
      });

    const hourlyWeather = function () {
      const dailyUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&units=metric&appid=${apiKey}`;
      fetch(dailyUrl)
        .then((res) => res.json())
        .then((data) => {
          showHourlyWeather(data);
        });
    };
    hourlyWeather();
  });
};
getWeather();
