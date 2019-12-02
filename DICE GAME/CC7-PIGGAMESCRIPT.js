/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. 
*/

var scores,activePlayer,roundScore,dice,gamePlaying,lastDice;

init();

//roll button

document.querySelector('.btn-roll').addEventListener('click',function(){
 if(gamePlaying){  
   
     //generate random number
    
    var dice=Math.floor(Math.random()*6)+1;
    
     //display the result
    
   var diceDOM= document.querySelector('.dice');
   diceDOM.style.display= 'block';
   diceDOM.src= 'dice-' +dice+ '.png';
     if(lastDice===6 && dice===6){
      //Player looses score
         scores[activePlayer]=0;
         document.getElementById('current-'+activePlayer).textContent=0;
         nextPlayer();
     }
     
     //update the roundScore if rolled number was not equal to one
    else if(dice!==1){
        roundScore+=dice;
        document.getElementById('current-'+activePlayer).textContent=roundScore;
    }  
    else{
        //nextplayer
    nextPlayer();    
    }
     lastDice=dice;
    }
    });

//hold button

document.querySelector('.btn-hold').addEventListener('click',function(){
   if(gamePlaying){
    
    //Add current score to the globalscore
    scores[activePlayer]+=roundScore;
   
    //update UI
   document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    var input,winningScore;
    input=document.querySelector('.final-score').value;
       
    //Undefined,null,0,"" are CORECED  to false
    //Anything else are CORECEDM to true
       if(input){
           winningScore=input;
       }
       else{
           winningScore=100;
       }
       
    //check if player won the game
    if(scores[activePlayer]>=winningScore)
        {
            document.querySelector('#name-'+activePlayer).textContent='Winner!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying=false;
        }
    else{
        //calling nextplayer
        nextPlayer();
    }  
  }
});

//nextplayer

function nextPlayer(){
    activePlayer===0 ? activePlayer=1 : activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
   
}

//new button

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
scores= [0,0];
activePlayer= 0;
roundScore= 0;
gamePlaying=true;
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.toggle('active');

}
