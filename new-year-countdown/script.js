const song = document.getElementById("newYearSong");

let now = new Date();
let arr = [0, 0, 0, 0, 0];

const curr = {
  year: now.getFullYear(), //YYYY
  month: now.getMonth(), //0-11
  day: now.getDate(), //1-31
  hours: now.getHours(), //0-23
  minutes: now.getMinutes(), //0-59
  seconds: now.getSeconds(), //0-59
};
const next = {
  year: curr.year + 1,
  month: 11,
  day: 31,
  hours: 23,
  minutes: 59,
  seconds: 59,
};

const mon = document.getElementsByTagName("h1")[0];
const da = document.getElementsByTagName("h1")[1];
const hou = document.getElementsByTagName("h1")[2];
const min = document.getElementsByTagName("h1")[3];
const sec = document.getElementsByTagName("h1")[4];
const monL = document.getElementsByTagName("h2")[0];
const daL = document.getElementsByTagName("h2")[1];
const houL = document.getElementsByTagName("h2")[2];
const minL = document.getElementsByTagName("h2")[3];
const secL = document.getElementsByTagName("h2")[4];
const sections = document.getElementsByTagName("section");
const foot = document.getElementsByTagName("footer")[0];
foot.innerText = "until " + next.year;
setInterval(writeDate, 1000);

function pad(num) {
  return num.toString().padStart(2, "0");
}

function writeDate() {
  now = new Date();
  curr.month = now.getMonth();
  curr.day = now.getDate();
  curr.hours = now.getHours();
  curr.minutes = now.getMinutes();
  curr.seconds = now.getSeconds();

  arr = [
    next.month - curr.month,
    next.day - curr.day,
    next.hours - curr.hours,
    next.minutes - curr.minutes,
    next.seconds - curr.seconds,
  ];

  if (arr[0] === 0) {
    sections[0].style.display = "none";
  } else {
    sections[0].style.display = "flex";
  }

  if (arr[1] === 0 && arr[0] === 0) {
    sections[1].style.display = "none";
  } else {
    sections[1].style.display = "flex";
  }

  if (arr[2] === 0 && arr[1] === 0 && arr[0] === 0) {
    sections[2].style.display = "none";
  } else {
    sections[2].style.display = "flex";
  }

  if (arr[3] === 0 && arr[2] === 0 && arr[1] === 0 && arr[0] === 0) {
    sections[3].style.display = "none";
  } else {
    sections[3].style.display = "flex";
  }
  if (
    arr[4] == 0 &&
    arr[3] === 0 &&
    arr[2] === 0 &&
    arr[1] === 0 &&
    arr[0] === 0
  ) {
    confetti({
      particleCount: 2000,
      spread: 1000,
      origin: { y: 1.2 },
    });
  }

  if (
    (arr[4] === 48 &&
      arr[3] === 0 &&
      arr[2] === 0 &&
      arr[1] === 0 &&
      arr[0] === 0)
  ) {
    song.play();
  }

  sections[4].style.display = "flex";

  mon.innerText = pad(arr[0]);
  da.innerText = pad(arr[1]);
  hou.innerText = pad(arr[2]);
  min.innerText = pad(arr[3]);
  sec.innerText = pad(arr[4]);
}
