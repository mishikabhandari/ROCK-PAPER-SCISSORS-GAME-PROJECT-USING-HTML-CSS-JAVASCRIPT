let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#move");
const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#computer-score");

const drawGame=() =>{
    move.innerText="Draw.Play again.";
    move.style.backgroundColor = "#071E22";
};
const gencompChoice = () =>{
    const options= ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        userScore++;
        userscorepara.innerText=userScore;
        move.innerText=`YOU WON!. Your ${userChoice} beats ${compChoice}`;
        move.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        compscorepara.innerText= computerScore;
        move.innerText=`YOU LOSE! ${compChoice} beats  your ${userChoice}`;
        move.style.backgroundColor = "red";
    }
}
const playgame=(userChoice) =>{
    console.log("userChoice = ",userChoice);
    const  compChoice =gencompChoice();
    console.log("compChoice  = ",compChoice);
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let  userWin=true;
        if(userChoice==="rock")
        { //scissors,paper
            userWin= compChoice ==="paper"?false:true;
        }
        else if(userChoice==="paper")
            {// rock,scissors
                userWin= compChoice ==="scissors"?false:true;
            }
            else 
            {
                userWin= compChoice ==="rock"?false:true;
            }
        
        showWinner(userWin,userChoice,compChoice);  
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click" ,  ()=> {
        const userChoice= choice.getAttribute("id");
        playgame(userChoice);
    });
});

document.getElementById("resetGame").addEventListener("click", 
    function(){
        document.getElementById("user-score").textContent = 0;
        document.getElementById("computer-score").textContent = 0;
        document.getElementById("move").textContent = "PLAY YOUR MOVE";   
        document.getElementById("move").style.backgroundColor = "#071E22";
        userScore = 0;
        computerScore = 0;
    });


