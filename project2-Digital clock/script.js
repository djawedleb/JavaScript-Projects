const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

const showtime = ()=> {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = `AM`;
    
    if(hours>12){
       hours=hours-12;
       ampm=`PM`;
    }
    if(min<10){
       min=`0${min}`
    }
    if(sec<10){
        sec=`0${sec}`
    }
    if(hours<10){
        hours=`0${hours}`
    }
    if(hours==0){
        hours=`12`
    }
    time.innerHTML = ` ${hours} : ${min} : ${sec}`;
    timeformat.innerHTML = ampm;
}
document.addEventListener('DOMContentLoaded' , ()=> {
    setInterval(showtime , 1000);
})
