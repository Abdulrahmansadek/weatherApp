import { degree } from "../utils/constants.js";

const leftArrow = document.createElement("div");
degree.appendChild(leftArrow);
leftArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-chevron-left" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>`;
leftArrow.classList.add("left-arrow");

const rightArrow = document.createElement("div");
degree.appendChild(rightArrow);
rightArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-chevron-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>`;
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
