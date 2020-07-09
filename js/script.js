window.addEventListener('DOMContentLoaded', function() {
    'use strict';
     
    let deadLine = "2020-12-31",
        timeZone = 8; // Timezone (UTC+8)

    function getTimeRemaining(endTime) {
        let delta = Date.parse(endTime) - Date.now(),
            seconds = Math.floor((delta/1000) % 60),
            minutes = Math.floor((delta/1000/60) % 60),
            hours = Math.floor((delta/1000/60/60) % 24) - timeZone,
            days = Math.floor(delta/1000/60/60/24);

        return {
            'total' : delta,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            days = document.querySelector(".days"),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            dayLabel = document.querySelector(".day-label"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let time = getTimeRemaining(endTime);
            days.textContent = time.days;
            hours.textContent = time.hours;
            minutes.textContent = time.minutes;
            seconds.textContent = time.seconds;

            if (time.seconds < 10) {
                seconds.textContent = "0" + time.seconds;
            } 
            if (time.minutes < 10) {
                minutes.textContent = "0" + time.minutes;
            }
            if (time.hours < 10) {
                hours.textContent = "0" + time.hours;
            }

            if (time.days % 100 >= 11 && time.days % 100 <= 20) {
                dayLabel.textContent = "дней";
            } else if (time.days % 10 == 1) {
                dayLabel.textContent = "день";
            } else if (time.days % 10 >= 2 && time.days % 10 <= 4) {
                dayLabel.textContent = "дня";
            } else {
                dayLabel.textContent = "дней";
            }
         
            if (time.total <=0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock("timer", deadLine);

});