let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreP.innerText = userScore; 
        msg.innerText =`You won the game! Your ${userChoice} beats Computers ${compChoice}`;
        msg.style.backgroundColor = "#018749"
    }
    else{
        compScore++;
        compScoreP.innerText = compScore; 
        msg.innerText =`You lost the game. Computers ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "#D2122E"
    }
};

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};


const drawGame = () => {
    msg.innerText ="Game was draw. Play again.";
    msg.style.backgroundColor = "#0066b2"
}


const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    const compChoice = genComputerChoice();
    console.log("computer choice =", compChoice);

    if (userChoice===compChoice){
        drawGame();
    } else{
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice=== "scissors" ? false : true;
        }

        else{
            userWin = compChoice=== "rock" ? false : true;
    }

    showWinner (userWin, userChoice,compChoice);

}
};

choices.forEach(( choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame (userChoice);
    })
});