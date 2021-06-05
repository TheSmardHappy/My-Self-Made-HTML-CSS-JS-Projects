console.log("Project 9 - Image Slider");


let buttons = document.querySelectorAll('.BtnContainer');
let counter = 0;
let setBackground = document.querySelector('.container');

// Taking The Pictures From Source
const pictures = [
    "contBcg-0.jpeg",
    "contBcg-1.jpeg",
    "contBcg-2.jpeg",
    "contBcg-3.jpeg",
    "contBcg-4.jpeg"
];

//Showing Image On the Button Click
buttons.forEach(function(button){
    button.addEventListener('click', function(){
        if(button.classList.contains('prv-Btn')){
            counter--;

            if(counter < 0){
                counter = pictures.length - 1;
            }
            else{};
            setBackground.style.backgroundImage = `url('../IMG/${pictures[counter]}')`

        }

        else if(button.classList.contains('nxt-Btn')){
            counter++;

            if(counter > pictures.length - 1){
                counter = 0;
            }
            else{};
            setBackground.style.backgroundImage = `url('../IMG/${pictures[counter]}')`
        }
        else{}
    })
})

