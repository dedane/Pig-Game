var scores, roundScore, activePlayer, gamePlaying;

init();




document.querySelector('.btn-roll').addEventListener('click', function() {

    //1.Random Number
    if (gamePlaying){
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
            nextPlayer();
        }
    }  
});       
     document.querySelector('.btn-hold').addEventListener('click', function() {
         
      if (gamePlaying){
           //add current score
        scores[activePlayer] += roundScore;

        // update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


        //Check if player won the game
        if (scores[activePlayer] >= 20){

            document.querySelector('#name-' +activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
         
        //let the next player play*/

        else{

            nextPlayer();
        }
        
      }
               
     });

    

        function nextPlayer() {
        
           // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ; */
           roundScore = 0;


           if (activePlayer === 0) {
               activePlayer = 1;
           }
           else {
            activePlayer = 0;
           }
           
            
    
            document.getElementById('Current-0').textContent = '0';
            document.getElementById('Current-1').textContent = '0';
    
            //Player Movements in the game
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
    
            document.querySelector('.dice').style.display = 'none';


        }
        //initializes game when player click new-game

        document.querySelector('.btn-new').addEventListener('click', init);

        function init(){
            scores = [0,0];
            activePlayer = 0;
            roundScore = 0;
            gamePlaying = true;

        document.querySelector('.dice').style.display = 'none';

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('Current-0').textContent = '0';
        document.getElementById('Current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player-1';
        document.getElementById('name-1').textContent = 'Player-2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        }
        
    

