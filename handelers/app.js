import { apiKey } from "../utils/constants.js";

import { showWeather } from "../initialize/showWeather.js";
import { showHourlyWeather } from "../views/showHourlyWeather.js";
import { showDailyWeather } from "../views/showDailyWeather.js";
import { errorPage } from "../views/errorPage.js";
import { extraInfo } from "../views/extraInfo.js";

export const getWeather = function () {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        showWeather(data);
        showDailyWeather(data);
        extraInfo(data);
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
