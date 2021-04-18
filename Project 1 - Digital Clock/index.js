let clockTime;
let date;
let time;
let hours;
let minutes;
let seconds;

function updateTime(){
    clockTime = new Date();
    date = clockTime.toDateString();
    hours = clockTime.getHours();
    if (hours > 12){
        hours = hours - 12;
    }
    if(hours < 10){
        hours = `0${hours}`
    }
    minutes = clockTime.getMinutes();
    if (minutes < 10){
        minutes =  `0${minutes}`
    };
    seconds = clockTime.getSeconds();
    if (seconds < 10){
        seconds = `0${seconds}`
    };
    time = `${hours}:${minutes}:${seconds}`;
    // console.log(date , time);
    document.getElementById("Clock").innerHTML = `${date} , ${time}`
}

setInterval(updateTime, 1000)