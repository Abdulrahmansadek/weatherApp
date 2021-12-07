import { dateAndTime } from "../utils/constants.js";
import { months, weekDays } from "../public/data.js";

const time = new Date();
const month = time.getMonth();
const day = time.getDay();
export const hour = time.getHours();
const minutes = time.getMinutes();
export const update = setInterval(() => {
  if (minutes < 10) {
    dateAndTime.innerHTML = `<h4>${weekDays[day]} , ${day} ${months[month]} , ${hour}:0${minutes}</h4>`;
  } else {
    dateAndTime.innerHTML = `<h4>${weekDays[day]} , ${day} ${months[month]} , ${hour}:${minutes}</h4>`;
  }
}, 1000);
