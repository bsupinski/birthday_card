const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const brittneysBirthday = new Date("September 14, 2022 00:00:00");

const alwaysDoubleDigits = (time, container) => {
  time < 10
    ? (container.textContent = "0" + time)
    : (container.textContent = time);
};

const countdown = setInterval(() => {
  let currentTime = new Date();
  let distance = brittneysBirthday - currentTime;

  let daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hoursLeft = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

  days.textContent = daysLeft;
  //   hours.textContent = hoursLeft;
  alwaysDoubleDigits(daysLeft, days);
  alwaysDoubleDigits(hoursLeft, hours);
  alwaysDoubleDigits(minutesLeft, minutes);
  alwaysDoubleDigits(secondsLeft, seconds);
}, 1000);
