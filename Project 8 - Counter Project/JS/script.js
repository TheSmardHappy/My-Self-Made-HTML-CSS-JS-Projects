console.log('This is my counter Applications');

let count = 0;
let displayedNumber = document.querySelector('#displayedNumber');
let lowCounter = document.querySelector('#lowCounter');
let addCounter = document.querySelector('#addCounter');


lowCounter.addEventListener('click', decreaseCount)
addCounter.addEventListener('click', increaseCount)

function decreaseCount(){
    count--;
    displayedNumber.innerText = count ;
}

function increaseCount(){
    count++
    displayedNumber.innerText = count;
}

setInterval(()=>{

    if(count<0){
       displayedNumber.style.color ='red';
    }
    else if (count > 0){
        displayedNumber.style.color ='green';
    }
    else{
        displayedNumber.style.color = '#333333'
    }
}, 100)