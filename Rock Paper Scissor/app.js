let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    Math.random()
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    
    msg.innerText="Game was draw. Play again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        userScore++;
        msg.style.backgroundColor="green";
        userScorePara.innerText=userScore;
    }
    else{
        
        msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
        compScore++;
        msg.style.backgroundColor="red";
        compScorePara.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    //Generate Computer choice
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        //Draw
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                userWin=false;
            }
        }
        else if(userChoice==="paper"){
            if(compChoice==="scissors"){
                userWin=false;
            }
        }
        else{
            if(compChoice==="rock"){
                userWin=false;
            }
        }
        showWinner(userWin,userChoice,compChoice);

    }

};


choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
})