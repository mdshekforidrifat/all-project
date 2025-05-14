let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const gencomChoice = () => {
    const option = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() *3);
    return option[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game Was Draw. Play again"
    msg.style.background = "#76ABAE"
};

const showWinner = (userWin, choiceId , compchoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You Win! Your Choice ${choiceId} beats Computer Choice ${compchoice}`
        msg.style.background = "green"
    }else {
        compScore++;
        compScorePara.innerText = compScore
        msg.innerText =`You lost! Your Choice ${choiceId} beats Computer Choice ${compchoice}`
        msg.style.background = "red"
    }
}

const playGame = (choiceId) => {
    console.log("User choice id", choiceId);
    const compchoice = gencomChoice();
    console.log("Computer choice id", compchoice);
    // gen computer choice
    if (choiceId === compchoice) {
        // draw game
        drawGame();
    }else{
        let userWin = true;
        if(choiceId === "rock") {
            // paper,scissors
            userWin = compchoice === "paper" ? false : true;
        }else if(choiceId === "paper") {
            // rock,scissors
            userWin = compchoice === "scissors" ? false : true ;
        }else if(choiceId === "scissors") {
            // paper,rock
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner (userWin, choiceId , compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const choiceId = choice.getAttribute("id")
        playGame(choiceId);
    });
});