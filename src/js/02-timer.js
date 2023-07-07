import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDate = document.querySelector("#datetime-picker");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");
const btnStart = document.querySelector("button[data-start]");

btnStart.disabled = true;
btnStart.addEventListener("click", showTimer);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if (selectedDate < new Date()) {
            Notify.failure('Please choose a date in the future');
            btnStart.disabled = true;
        } else {
            btnStart.disabled = false;
        }
    },
};

flatpickr(inputDate, options);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

function showTimer() {
    btnStart.disabled = true;
    const selectedDate = new Date(inputDate.value);
    const countdown = setInterval(showTimer, 1000);
    const currentTime = new Date();
    const difference = selectedDate - currentTime;

    if (difference <= 0) {
        clearInterval(countdown);
        btnStart.disabled = true;
        return
    }

    const { days, hours, minutes, seconds } = convertMs(difference);

    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
}