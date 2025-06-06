let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");

setInterval(() => {
  let currentTimes = new Date();
  let Hours = currentTimes.getHours();
  let Min = currentTimes.getMinutes();
  let Sec = currentTimes.getSeconds();
  let amPM = Hours >= 12 ? "PM" : "AM";

  Hours = Hours % 12;
  Hours = Hours ? Hours : 12;

  hrs.innerHTML = (Hours < 10 ? "0" : "") + Hours;
  min.innerHTML = (Min < 10 ? "0" : "") + Min;
  sec.innerHTML = (Sec < 10 ? "0" : "") + Sec;
  ampm.innerHTML = amPM;
}, 1000);

