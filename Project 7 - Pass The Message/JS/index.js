console.log('Project 7 - Pass The Message.');

let msg = document.querySelector('#msg');
let submit = document.querySelector('#submitBtn');
let msgDelivered = document.querySelector('#msgDelivered');
let form = document.querySelector('form');
let errorMsg = document.querySelector('#errorMsg')

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(msg.value === ''){
        errorMsg.style.display = 'block';
        setTimeout(() =>{
            errorMsg.style.display = 'none';
        }, 2000);
    }
    else{
        msgDelivered.innerText = msg.value;
        msg.value = "";
    }
})