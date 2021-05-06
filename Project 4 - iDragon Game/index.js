// Starting Game : Code Begins
let startAudio = new Audio("./sound/game-starting-sound.wav");
let runningAudio = new Audio('./sound/game-running-sound.wav');
let gameOverAudio = new Audio('./sound/game-over-sound.wav')
let gameOverThemeAudio = new Audio('./sound/game-over-theme-song.mp3')
let score = 0;
let cross = true;

startAudio.loop = 'true';
setTimeout(() => {
    startAudio.play();
}, 400);

function gameStart(){
    let len = String(userName.value).length

    if(len > 0){
    gameStarting.style.display = 'none';
    gameRunning.style.display = 'block';
    let playName = userName.value;
    playerName.innerHTML = playName;
    startAudio.pause();
    runningAudio.loop = 'true';
    runningAudio.play();
    }
    else{
        userName.placeholder = "Name is Required to Play"
    }
}
// Starting Game : Code Ends



// Running Game : Code Begins
document.onkeydown = function(e){
    if(e.keyCode == 38){
        fighter.classList.add('jumpUP')
        setTimeout(() => {
            fighter.classList.remove('jumpUP')
        }, 2500);
    }
    else{

    }
    console.log("Your Keycode is " +  e.keyCode);

}

let fx, fy, ox, oy, offsetX, offsetY;

setInterval(() => {
    fx = parseInt(window.getComputedStyle(fighter, null).getPropertyValue('right'));
    fy = parseInt(window.getComputedStyle(fighter, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('right'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(ox - fx);
    offsetY = Math.abs(oy - fy);
    if(offsetX < 300 && offsetY  < 60 ){
        gameOver()
    }
    else if (offsetX < 300 && cross){
        score++
        playerScore.innerHTML = score;
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        if(score > 100 && score < 200){
            obstacle.style.animationDuration = "4s";
            gameRunning.style.animationDuration = "4s";
        }
        else if(score > 200 && score < 400){
            obstacle.style.animationDuration = "3.5s";
            gameRunning.style.animationDuration = "3.5s";
        }
        else if(score > 400 && score < 700){
            obstacle.style.animationDuration = "3s";
            gameRunning.style.animationDuration = "3s";
        }
        else if(score > 700 && score < 1000){
            obstacle.style.animationDuration = "2.2s";
            gameRunning.style.animationDuration = "2.2s";
        }
        else if(score > 1000){
            obstacle.style.animationDuration = "1.5s";
            gameRunning.style.animationDuration = "1.5s";
        }
        else{}
    }
    else{}
    
}, 10);

// Running Game : Code Ends



// Game Over : Code Begins

function gameOver(){
    gameRunning.style.display = 'none';
    endingGame.style.display = 'block';
    runningAudio.pause();
    gameOverAudio.play();
    overallScore.innerHTML = score;
    setTimeout(() => {
        gameOverThemeAudio.play();
        gameOverThemeAudio.loop = 'true';
    }, 1000);
}
// Game Over : Code Ends