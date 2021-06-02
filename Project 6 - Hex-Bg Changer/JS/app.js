console.log("Project 6: HEX Value Color Changer")

let button = document.querySelector('button');
let body = document.querySelector('body');
let colorViewer  = document.querySelector('span');
let colorIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let color = '#';

button.addEventListener('click', colorChanger);

function colorChanger(){
    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * colorIndex.length);
        let randomColorIndex = String(colorIndex[randomNumber]);
        color+= randomColorIndex;
    }
    colorViewer.innerHTML = color;
    body.style.backgroundColor = color;
    color = '#'
}