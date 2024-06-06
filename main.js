const days = document.getElementById("days");
const hrs = document.getElementById("hrs");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

const targetDate = new Date("june 19 2024 12:00");

const updateCountdown = (deadline) => {
  const currTime = new Date();
  const timeDifference = deadline - currTime;

  let sec = Math.floor(timeDifference / 1000) % 60;
  let min = Math.floor(timeDifference / 1000 / 60) % 60;
  let hr = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  let day = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  days.textContent = formatTime(day);
  hrs.textContent = formatTime(hr);
  mins.textContent = formatTime(min);
  secs.textContent = formatTime(sec);
};

const countDown = (targetDate) => {
  setInterval(() => updateCountdown(targetDate), 1000);
};
countDown(targetDate);
