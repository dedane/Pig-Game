var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('Current-0').textContent = '0';
document.getElementById('Current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {

    //1.Random Number

   var dice = Math.floor(Math.random() * 6)+ 1;
    

    //2. Display the result
    
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. update and round score IF the rolled number was not a 1
    if (dice !== 1){
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        //next player
        // same as, if (activePlayer == 0){ activePlayer = 1} else {activePlayer = 0}
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        roundScore = 0;

        document.getElementById('Current-0').textContent = '0';
        document.getElementById('Current-1').textContent = '0';

        //Player Movements in the game
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = none;

        
    }

});
