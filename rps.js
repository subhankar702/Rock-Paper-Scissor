let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");
const generateComChoice = () =>
{
    //rock,paper,scissors
    const options = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}

const drawGame = () =>
{
    console.log("game was draw")
    msg.innerText = "game was draw play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>
{
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) =>
{
    console.log("user choice = ",userChoice);
    //genarate computer choice
    const compChoice = generateComChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //drawGame
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock") {
            //paper,scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;

        }
        else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => 
    {
    choice.addEventListener("click",() => 
        {
            const userChoice = choice.getAttribute("id");
            playgame(userChoice);
        })    
});