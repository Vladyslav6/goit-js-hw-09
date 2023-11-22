import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
////
const startButton = document.querySelector('button[data-start]');
const SetDays = document.querySelector('span[data-days]');
const SetHours = document.querySelector('span[data-hours]');
const SetMinutes = document.querySelector('span[data-minutes]');
const SetSeconds = document.querySelector('span[data-seconds]');
//////
/////
startButton.setAttribute('disabled', '');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    let currentDate = new Date();
    let targetDate = new Date(selectedDates[0]);

    //////
    // const SetIntr = setInterval(() => {
    if (targetDate < currentDate) {
      //   clearInterval(SetIntr);
      Notify.failure('Please choose a date in the future');
      startButton.setAttribute('disabled', '');
      return;
    }

    startButton.removeAttribute('disabled', '');

    startButton.addEventListener('click', () => {
      timerId = setInterval(() => {
        currentDate = new Date();
        targetDate = new Date(selectedDates[0]);
        const finishDay = convertMs(targetDate - currentDate);
        SetDays.textContent = addLeadingZero(finishDay.days);
        SetHours.textContent = addLeadingZero(finishDay.hours);
        SetMinutes.textContent = addLeadingZero(finishDay.minutes);
        SetSeconds.textContent = addLeadingZero(finishDay.seconds);
      }, 1000);
    });
    ///////PadStart///
    function addLeadingZero(value) {
      let NumberStr = String(value).padStart(2, '0');
      return NumberStr;
    }
    ////////

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
  },
};

flatpickr('#datetime-picker', options, {});
