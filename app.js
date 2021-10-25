const todayDegree = document.querySelectorAll(".hourlyDegree");
const degree = document.querySelector(".todayDegree");

todayDegree.forEach((w) => {
  w.innerHTML = `   
    <span id="time">12:00</span>
    <span id="weatherDegree"><img src="sun.png" alt="" /></span>
    <span id="degreeDay">20</span>
  `;
});
