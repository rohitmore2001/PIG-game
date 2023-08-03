'use strict';

//access all elements global
let score0=document.getElementById("score-0");
let score1=document.getElementById("score-1");
let dice=document.querySelector(".dice");
let rollDice=document.querySelector(".btn-roll");
let player0=document.querySelector(".player-0");
let player1=document.querySelector(".player-1");
let current1=document.getElementById("current-0");
let current2=document.getElementById("current-1");
let holdBtn=document.querySelector(".btn-hold");
let btnNew=document.querySelector(".btn-new");
let name1=document.getElementById('name-0');
let name2=document.getElementById('name-1');

let scores=[0,0];
let current=0;
let activePlayer=0;



//set score to zero
score0.textContent = 0;
score1.textContent = 0;
//hide dice  before starts

dice.classList.add("hidden");

let switchPlayer=function(){
    current=0;
    document.getElementById(`current-${activePlayer}`).textContent=current;
    activePlayer=activePlayer==0?1:0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");

}

//function for roll dice  (btn roll dice)
rollDice.addEventListener("click",function(){
    let diceNumber=Math.trunc(Math.random()*6)+1; //random n0 1-6

    dice.classList.remove("hidden"); //remove hidden class of dice
    dice.src=`dice-${diceNumber}.png`; //calling images
    
    if(diceNumber!=1){
    current+=diceNumber;
    document.getElementById(`current-${activePlayer}`).textContent=current;
    // current1.textContent=current;
    }else{
        switchPlayer();
    }
})


//function for hold button 
holdBtn.addEventListener("click", function(){
    scores[activePlayer]+=current;
    document.getElementById(`score-${activePlayer}`).textContent=scores[activePlayer];
    
    if( scores[activePlayer]>=20){
        document.querySelector(`.player-${activePlayer}`).classList.add("player-winner");
        document.getElementById(`name-${activePlayer}`).textContent="Winner!";
        dice.classList.add("hidden");
        rollDice.classList.add("hidden");
        holdBtn.classList.add("hidden");
        document.querySelector(`.player-${activePlayer}`).classList.remove("player--active");
    }else{
        switchPlayer();
    }
})

// function for new button
btnNew.addEventListener("click",function(){
    score0.textContent = 0;
    score1.textContent = 0;
    current1.textContent=0;
     current2.textContent=0;
     document.querySelector(`.player-${activePlayer}`).classList.remove("player-winner");
     player0.classList.add("player--active");   
     player1.classList.remove("player--active");   
     dice.classList.add("hidden");
     rollDice.classList.remove("hidden");
     holdBtn.classList.remove("hidden");
     name1.textContent="Player 1"
     name2.textContent="Player 2"

     scores=[0,0];
     current=0;
     activePlayer=0;

})