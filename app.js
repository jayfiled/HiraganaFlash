/*
GAME RULES:
    -One person playing, one person checking to see if the selections are correct
    - A hiragana flash card is displayed and you have to say it out loud

*/


//Storing the flash card name to a variables and making a card counter to dynamically change the flash card name.
const cardName = 'hiragana-';
let cardCount = 0;



// On 'Got it' button click, the flash card is moved to the left, the main flash card cycles through and the count is incremented by 1
document.querySelector('.btn-good').addEventListener('click', function() {

        cardCount += 1;
        let flashCards = cardName + cardCount + '.png';
        let cardElement = '<img src="hiragana-' + cardCount + '.png" alt="Card" class="card-move-left">';
    
    // Move the correctly guessed card from the middle, to the left (replace the html placeholder '1' on the left)
        document.querySelector('#score-0').innerHTML = cardElement;
    
    //Increase the card count to show how many flash cards you have correctly guessed
        document.querySelector('.player-current-score').textContent = cardCount;
    
    //Display the main card in a delay to what is being moved to the left
        document.querySelector('.card').src = 'hiragana-' + (cardCount - 1) + '.png';
    
});






















/* //Code from previous project for reference

var scores, roundScore, activePlayer, gamePlaying;

init();

 
//see MDN event page for more info
document.querySelector('.btn-shuffle').addEventListener('click', function() {
    if (gamePlaying) {
                // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice; //same as writing roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player toggle
            nextPlayer();

        }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
            //Add the current score to the GLOBAL score
        scores[activePlayer] += roundScore;


        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check if the player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }            
    
});

function nextPlayer() {
    //Next player toggle
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
        //Resets the round score
        roundScore = 0;
        
        //Resets the 'Current' score to 0 for either player
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        
        //Changes the focus on which player is the active player by making text bold, background grey and a pointer.  
        //Toggles the class to active on the player panel element.
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');        
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        //Takes the picture of the dice away when 1 is rolled to make it more obvious that they rolled a 1.
        document.querySelector('.dice').style.display = 'none';
    
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    
};

*/