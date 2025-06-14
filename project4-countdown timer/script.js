let count = document.getElementById('countdown');
let days = document.getElementById('day');
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function timer() {
    let seconds = parseInt(sec.innerText);
    let minutes = parseInt(min.innerText);
    let hours = parseInt(hour.innerText);
    let day = parseInt(days.innerText);

    if (seconds > 0) {
        sec.innerText = seconds - 1;
    } else {
        sec.innerText = 59;
        if (minutes > 0) {
            min.innerText = minutes - 1;
        } else {
            min.innerText = 59;
            if (hours > 0) {
                hour.innerText = hours - 1;
            } else {
                hour.innerText = 23;
                if (day > 0) {
                    days.innerText = day - 1;
                } else {
                    // You may handle what happens when the countdown reaches zero here
                    clearInterval(intervalId);

                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    var intervalId = setInterval(timer, 1000);
});