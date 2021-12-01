import { dateAndTime } from "../utils/constants.js";
import { months, weekDays } from "../assets/data.js";

const time = new Date();
const month = time.getMonth();
const day = time.getDay();
export const hour = time.getHours();
const minutes = time.getMinutes();
export const update = setInterval(() => {
  if (minutes < 10) {
    dateAndTime.innerHTML = `<p>${weekDays[day]} , ${month} ${months[month]} , ${hour}:0${minutes}</p>`;
  } else {
    dateAndTime.innerHTML = `<p>${weekDays[day]} , ${month} ${months[month]} , ${hour}:${minutes}</p>`;
  }
}, 1000);
