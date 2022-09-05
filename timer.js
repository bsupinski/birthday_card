const overlay = document.querySelector(".timer__overlay");

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

// Globals
let daysLeft;
let hoursLeft;
let minutesLeft;
let secondsLeft;

const backGroundChange = (daysLeft) => {
  if (daysLeft < 10) {
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    return;
  }
};

const brittneysBirthday = new Date("September 14, 2022 00:00:00");

const alwaysDoubleDigits = (time, container) => {
  time < 10
    ? (container.textContent = "0" + time)
    : (container.textContent = time);
};

const countdown = () => {
  setInterval(() => {
    let currentTime = new Date();
    distance = brittneysBirthday - currentTime;

    daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    hoursLeft = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = daysLeft;

    alwaysDoubleDigits(daysLeft, days);
    alwaysDoubleDigits(hoursLeft, hours);
    alwaysDoubleDigits(minutesLeft, minutes);
    alwaysDoubleDigits(secondsLeft, seconds);
    backGroundChange(daysLeft);
  }, 1000);
};

countdown();
