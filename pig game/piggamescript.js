var scores,activePlayer,roundScore,dice,gamePlaying,lastDice;
init();

//roll button

document.querySelector('.btn-roll').addEventListener('click',function(){
 if(gamePlaying){  
   //generate random number
    
    dice=Math.floor(Math.random()*6)+1;
    
    //display the result
    
   var diceDOM= document.querySelector('.dice');
   diceDOM.style.display= 'block';
   diceDOM.src= 'dice-' +dice+ '.png';

    //update the roundScore if rolled number was not equal to one
    if(lastDice===6 && dice===6){
        //Player looses score
        scores[activePlayer]=0;
        document.querySelector('#score-'+activePlayer).textContent=0;
        nextPlayer();
    }
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
    
    //check if player won the game
    if(scores[activePlayer]>=50)
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
//document.querySelector('#current-'+activePlayer).textContent=dice;
