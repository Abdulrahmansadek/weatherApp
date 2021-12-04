import { degree } from "../utils/constants.js";

const leftArrow = document.createElement("div");
degree.appendChild(leftArrow);
leftArrow.textContent = "←";
leftArrow.classList.add("left-arrow");

const rightArrow = document.createElement("div");
degree.appendChild(rightArrow);
rightArrow.textContent = "→";
rightArrow.classList.add("right-arrow");

export const showHourlyWeather = function (data) {
  const hourlyTemps = data.hourly;

  hourlyTemps.forEach((hourlyTemp) => {
    const { temp, dt } = hourlyTemp;
    const { icon } = hourlyTemp.weather[0];
    const tempEl = Math.floor(temp);
    const x = dt * 1000;
    var data2 = new Date(x);
    var h = data2.getHours();

    degree.innerHTML += ` <div class="hourlyDegree">
          <span id="time">${h}:00</span>
          <span id="weatherDegree"
            // ><img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt=""
          /></span>
          <span id="degreeDay">${tempEl} º</span>
        </div>`;
  });
};
