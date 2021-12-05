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
import { showHourlyWeather } from "../views/showHourlyWeather.js";
import { showDailyWeather } from "../views/showDailyWeather.js";
import { errorPage } from "../views/errorPage.js";
import { menuBar } from "../listeners/menuBtn.js";
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

const citiesWeather = function () {
  const cityWeather = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=london&appid=${apiKey}`;
  fetch(cityWeather)
    .then((res) => res.json())
    .then((data) => {
      menuBar(data);
    })
    .catch((err) => {
      errorPage(err);
    });
};
citiesWeather();
