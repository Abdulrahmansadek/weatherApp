import { dateAndTime } from "./constants.js";
import { months, weekDays } from "./data.js";

export const update = setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  if (minutes < 10) {
    dateAndTime.innerHTML = `<p>${weekDays[day]} , ${month} ${months[month]} , ${hour}:0${minutes}</p>`;
  } else {
    dateAndTime.innerHTML = `<p>${weekDays[day]} , ${month} ${months[month]} , ${hour}:${minutes}</p>`;
  }
}, 1000);
