const startBtn = document.getElementById("start-btn");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const infoBtn = document.getElementById("infoIcon");
const settingBtn = document.getElementById("settingIcon");
const gameBoardRed = document.getElementsByClassName("game-board-red");
const gameBoardBlue = document.getElementsByClassName("game-board-blue");
const infoCard = document.getElementsByClassName("infoCard");
const settingsCard = document.getElementsByClassName("settingsCard");
const xBtn = document.getElementsByClassName("fa-x");
const dices = document.getElementsByClassName("dice");
const scorePlayer1 = document.getElementById("scorePlayer1");
const scorePlayer2 = document.getElementById("scorePlayer2");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");


let score1 = 0;
let score2 = 0;


function getRandomNumber(){
    return Math.floor(Math.random() * dices.length);
}

function randomActivePlayer(){
    let randomPlayer= Math.floor(Math.random() * 2)

    if(randomPlayer == 0){
        player1.classList.add("activePlayer");
        player2.classList.remove("activePlayer");
    } else{
        player2.classList.add("activePlayer");
        player1.classList.remove("activePlayer");
    }
}



function resetGame(){
    randomActivePlayer();
    score1 = 0;
    score2 = 0;
    scorePlayer1.textContent = score1;
    scorePlayer2.textContent = score2;
    resetBtn.classList.add("invisible");
    rollBtn.classList.remove("invisible");
    player1.classList.remove("winner");
    player2.classList.remove("winner");
}


function rollDice(){
    let randomDice = getRandomNumber();

    for(let dice of dices){
        dice.classList.remove("visible");
        dice.classList.remove("animationDice");
    }

    dices[randomDice].classList.add("visible");
    dices[randomDice].classList.add("animationDice");

    showScore(randomDice);
    gameWon();

}

function showScore(randomDice){

    if(player1.classList.contains("activePlayer")){
        score1 += randomDice + 1;
        scorePlayer1.textContent = score1;
        player1.classList.remove("activePlayer");
        player2.classList.add("activePlayer");
    } else if(player2.classList.contains("activePlayer")){
        score2 += randomDice +1;
        scorePlayer2.textContent = score2;
        player2.classList.remove("activePlayer");
        player1.classList.add("activePlayer");
    }
}

function gameWon(){
    if(scorePlayer1.textContent >= 21){
        player2.classList.remove("activePlayer");
        player1.classList.remove("activePlayer");
        player1.classList.add("winner");
        rollBtn.classList.add("invisible");
        resetBtn.classList.remove("invisible");
    } else if(scorePlayer2.textContent >= 21) {
        player1.classList.remove("activePlayer");
        player2.classList.remove("activePlayer");
        player2.classList.add("winner");
        rollBtn.classList.add("invisible");
        resetBtn.classList.remove("invisible");
    }
}

function startGame(){
    startBtn.remove();
    document.getElementById("centerBtn").remove();
    gameBoardRed[0].classList.remove("invisible");
    document.getElementsByClassName("centerGameBoard")[0].classList.remove("invisible");
    randomActivePlayer();
}

function showInfo(){
    gameBoardBlue[0].classList.add("invisible");
    settingsCard[0].classList.add("invisible");
    settingBtn.classList.add("invisible");
    infoCard[0].classList.remove("invisible");
}

function showSettings(){
    gameBoardBlue[0].classList.add("invisible");
    infoBtn.classList.add("invisible");
    settingsCard[0].classList.remove("invisible");
}

function removeCard(){
    infoCard[0].classList.add("invisible");
    settingsCard[0].classList.add("invisible");
    gameBoardBlue[0].classList.remove("invisible");
    settingBtn.classList.remove("invisible"); 
    infoBtn.classList.remove("invisible");
    
    resetGame();
}

startBtn.addEventListener("click", startGame);
rollBtn.addEventListener("click", rollDice);
resetBtn.addEventListener("click", resetGame);
infoBtn.addEventListener("click", showInfo);
settingBtn.addEventListener("click", showSettings);
for(let btn of xBtn){
    btn.addEventListener("click", removeCard);
}