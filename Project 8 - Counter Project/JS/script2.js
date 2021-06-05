console.log('This is my counter Applications');

let count = 0;
let displayedNumber = document.querySelector('#displayedNumber');
let buttons = document.querySelectorAll('.countBtn')

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        if(button.classList.contains('lowCounter')){
            count--;
            displayedNumber.innerText = count ;
        }
        else if(button.classList.contains('addCounter')){
            count++;
            displayedNumber.innerText = count ;
        }
        else{}

        if(count < 0){
            displayedNumber.style.color = 'red';
        }
        else if(count > 0){
            displayedNumber.style.color = 'green';
        }
        else{
            displayedNumber.style.color = '#333333';
        }
    })
})

