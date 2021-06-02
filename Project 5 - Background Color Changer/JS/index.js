console.log("This is a Background Changer Application")

let body = document.querySelector('body');
let button = document.querySelector('button');

colorChanger()
button.addEventListener('click', colorChanger)

function colorChanger(){
	let randomNumber = {
		randomNumber1 : Math.round(Math.random() * 256),
		randomNumber2 : Math.round(Math.random() * 256),
		randomNumber3 : Math.round(Math.random() * 256),
	}
	body.style.backgroundColor = `rgb(${randomNumber.randomNumber1}, 
									  ${randomNumber.randomNumber2}, 
									  ${randomNumber.randomNumber3})`
}
