/*
GAME RULES:
    -One person playing, one person checking to see if the selections are correct
    - A hiragana flash card is displayed and you have to say it out loud

*/

let startCard = document.querySelector('.card');

// Game start - click the start icon to begin
startCard.addEventListener('click', function() {
    /* uncomment below to make the game go full screen when started
    htmlFull = document.querySelector('html');
    htmlFull.webkitRequestFullscreen(); Chrome, Safari and Opera only  */
    startCard.src = 'hiragana-0.png';
})

// A counter to add to the end of the .png file name. Increments when a card is guessed correctly
let cardAmount = 0;
let cardCount = 0;
let cardFunc = function() {
    return cardCount = Math.floor(Math.random() * 15);
}
let gotItCardCount = 0;
let didntGetItCardCount = 0;

let gotItFunc = function() {

    // Store the name of the .png files to dynamically add a number to the end
    const cardName = 'hiragana-';
    let flashCards = cardName + cardCount + '.png';


    // src tag with the .png file in it. Use variable to be able to cycle through all .png hiragana cards
        let cardElementLeft = '<img src="hiragana-' + cardCount + '.png" alt="Card" class="card-move">';
    
    // Move the correctly guessed card from the middle, to the left
        document.querySelector('#score-0').innerHTML = cardElementLeft;
 
    // Increment only if cards remaining, else show 'no more cards', and cross out 'Got it!' and remove event listener
    if (cardAmount >= 14) {
        emptyCard = document.querySelector('.card');
        emptyCard.src = 'empty.png'
        document.querySelector('.btn-bad').removeEventListener('click', didntGetItFunc);
        document.querySelector('.btn-good').removeEventListener('click', gotItFunc);
        document.querySelector('.btn-good').className = 'btn-good-grey';
        document.querySelector('.btn-bad').className = 'btn-bad-grey';
    } else {
        cardAmount += 1;
        gotItCardCount += 1;
        // Randomize and show the next card
        cardFunc();
        document.querySelector('.card').src = 'hiragana-' + cardCount + '.png';
    }
    //Increase the card count to show how many flash cards you have correctly guessed
        document.querySelector('#current-0').textContent = gotItCardCount;
     
};

let didntGetItFunc = function() {

    // Store the name of the .png files to dynamically add a number to the end
    const cardName = 'hiragana-';
    let flashCards = cardName + cardCount + '.png';


    // src tag with the .png file in it. Use variable to be able to cycle through all .png hiragana cards
        let cardElementLeft = '<img src="hiragana-' + cardCount + '.png" alt="Card" class="card-move">';
    
    // Move the correctly guessed card from the middle, to the left
        document.querySelector('#score-1').innerHTML = cardElementLeft;
 
    // Increment only if cards remaining, else show 'no more cards' and cross out 'Got it!'
    if (cardAmount >= 14) {
        emptyCard = document.querySelector('.card');
        emptyCard.src = 'empty.png'
        document.querySelector('.btn-bad').removeEventListener('click', didntGetItFunc);
        document.querySelector('.btn-good').removeEventListener('click', gotItFunc);
        document.querySelector('.btn-good').className = 'btn-good-grey';
        document.querySelector('.btn-bad').className = 'btn-bad-grey';
    } else {
        cardAmount += 1;
        didntGetItCardCount += 1;
        // Randomize and show the next card
        cardFunc();
        document.querySelector('.card').src = 'hiragana-' + cardCount + '.png';
    }
    //Increase the card count to show how many flash cards you have correctly guessed
        document.querySelector('#current-1').textContent = didntGetItCardCount;

};

let newGameFunc = function() {
    cardAmount = 0;
    gotItCardCount = 0;
    didntGetItCardCount = 0;
    startCard.src = 'start.png'
    document.querySelector('.btn-good-grey').className = 'btn-good';
    document.querySelector('.btn-bad-grey').className = 'btn-bad';
    // remove the cards on the left and right
    imgTag = document.getElementsByClassName('card-move');
    // Polyfill to make the HTML collection iterable for older browsers
    HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
// Incrementing Loop doesn't work, because you remove the first element, so, the only element in the array is at index 0, but the iterator is set to 1.
    for (let i = 0; i < imgTag.length; i) {
        imgTag[i].parentNode.removeChild(imgTag[i]);
    }
    document.querySelector('.btn-good').addEventListener('click', gotItFunc);
    document.querySelector('.btn-bad').addEventListener('click', didntGetItFunc);
    document.querySelector('#current-0').textContent = '';
    document.querySelector('#current-1').textContent = '';
};

document.querySelector('.btn-good').addEventListener('click', gotItFunc);

document.querySelector('.btn-bad').addEventListener('click', didntGetItFunc);

document.querySelector('.btn-new').addEventListener('click', newGameFunc);

//A test to see if I can achieve a better result using arrays instead - **test success** implement into above

/*
//An array with elements that emulate flashcards
let centreArr = []; //["pic-0", "pic-1", "pic-2", "pic-3", "pic-4"];

//Add elements to this array based on click event
let rightArr = ["moved to centre"];

//Add elements to this array based on a click event
let leftArr = [];

//Move elements from the right array to the left array when the centre array runs out of elements.

console.log(centreArr.length);

function shiftElement() {
    let count = 0;
    leftArr[count] = centreArr.shift();
    count += 1;
    //if centre array's length === 0 then, move the first element from the rightArr to the centre arr
    if (centreArr.length === 0) {
        centreArr[centreArr.length] = rightArr.shift();
        if (rightArr.lenth === 0) {
            //end game, by replacing the flash card with an animated thumbs up
            // ion-thumbsup change img class to .winner
            //disable got it and didn't get it buttons.
        }
    }
}

shiftElement();

console.log(leftArr);
console.log(centreArr);

*/















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