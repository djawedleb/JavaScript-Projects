let timerdisplay = document.getElementById('time');
const start = document.getElementById('startbtn');
const stop = document.getElementById('stopbtn');
const reset = document.getElementById('resetbtn');
let interval = null;
let msec = 0;
let secs = 0;
let mins = 0;

start.addEventListener('click', () => {
   
    interval = setInterval(startimer,10);
})
stop.addEventListener('click', () => {
    clearInterval(interval);
})
reset.addEventListener('click', () => {
    clearInterval(interval);
    timerdisplay.innerHTML = `00 : 00 : 00`
})

function startimer() {
    msec++ ;
    if (msec == 99) {
        msec = 0;
        secs++ ;
        if(secs == 60) {
            secs = 0;
            mins++ ;
        }
    }
    let msectring = msec < 10 ? `0${msec}` : msec ;
    let secstring = secs < 10 ? `0${secs}` : secs ;
    let minstring = msec < 10 ? `0${mins}` : mins ;

    timerdisplay.innerHTML = `${minstring} : ${secstring} : ${msectring}` ;
}
