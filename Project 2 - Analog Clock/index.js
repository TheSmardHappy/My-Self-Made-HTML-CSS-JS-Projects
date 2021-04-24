let hrHand;
let minHand;
let secHand;
let currentDate;

function currentTiming(){
    currentDate = new Date();
    secHand = currentDate.getSeconds();
    minHand = currentDate.getMinutes();
    hrHand = currentDate.getHours();
    document.getElementById('hr').style.transform = `rotate(${(hrHand * 30) + (1/12 * minHand * 6)}deg)`;
    document.getElementById('sec').style.transform = `rotate(${secHand * 6}deg)`;
    document.getElementById('min').style.transform = `rotate(${minHand * 6}deg)`;

}

setInterval(currentTiming , 1000);

// for Small and large Dail lines

let element ;
let deg;
let style;

for( i = 0;i <= 60 ; i++ ){
    element = document.getElementsByClassName('dails')[i]
    deg = i * 6
    element.style.transform = `rotate(${deg}deg)`;
};
