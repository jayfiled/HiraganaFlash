/*
GAME RULES:
    -One person playing, one person checking to see if the selections are correct
    - A hiragana flash card is displayed and you have to say it out loud

*/
// Game start
    // Click the start screen to start
let startScreen = document.querySelector('.welcome-start');
startScreen.addEventListener('click', function() {
    startScreen.classList.add('welcome-started');
})

// Counters for how many cards total we have and how many we have seen
let cardAmount = 0;
let randomCard = 0;

// A random number generator for the next cards
let cardFunc = function() {
    return randomCard = Math.floor(Math.random() * 15);
}

let onLoad = function() {
    let startCard = document.querySelector('.card');
    startCard.src = 'cards/hiragana-' + cardFunc() + '.png';
}

window.onload = onLoad();

let gotItCardCount = 0;
let didntGetItCardCount = 0;

let gotItFunc = function(leftOrRight, gotItDidntGetIt, leftOrRightCounter) {

  // Store the name of the hiragana flash card pics and change the last number in file name based on the counter.
    const cardName = 'hiragana-';
    let flashCards = cardName + randomCard + '.png';

    // The main card that you look at as a test of your knowledge
        let mainCard = '<img src="cards/hiragana-' + randomCard + '.png" alt="Card" class="card-move">';
    
    // Move the card from the middle, to the left or right based on which event is triggered
        document.querySelector(`[id=${CSS.escape(leftOrRight)}]`).innerHTML = mainCard;
 
    // If there aren't any cards remaining, remove game functions:
    // (event listeners, buttons), otherwise, show the next card
    if (cardAmount >= 4) {
        emptyCard = document.querySelector('.card');
        emptyCard.src = 'cards/empty.png'
        document.querySelector('.btn-good').removeEventListener('click', clickedGotIt);
        document.querySelector('.btn-bad').removeEventListener('click', clickedDidntGetIt);
        document.querySelector('.btn-good').className = 'btn-good-grey';
        document.querySelector('.btn-bad').className = 'btn-bad-grey';
    } else {
        cardAmount += 1;
        cardFunc();
        document.querySelector('.card').src = 'cards/hiragana-' + randomCard + '.png';
    }
    //Increase the card count to show how many flash cards you have correctly guessed
        document.querySelector(`[id=${CSS.escape(leftOrRightCounter)}]`).textContent = gotItDidntGetIt;
};

    // Function for the event listener on the 'New Game' button
let newGameFunc = function() {
    // Reset counters
    cardAmount = 0;
    gotItCardCount = 0;
    didntGetItCardCount = 0;
    // If Got it button are greyed out, remove it from both buttons
    if (document.querySelector('.btn-good-grey'))
    {
    document.querySelector('.btn-good-grey').className = 'btn-good';
    document.querySelector('.btn-bad-grey').className = 'btn-bad';
    // Re-add the event listeners and remove the text in the counter boxes
    document.querySelector('.btn-good').addEventListener('click', clickedGotIt);
    document.querySelector('.btn-bad').addEventListener('click', clickedDidntGetIt);
    }
    onLoad()
    // Get the elements with the pics from the left and right side
    imgTag = document.getElementsByClassName('card-move');
    // Polyfill to make the HTML collection iterable for older browsers
    HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    // Loop and remove element
    for (let i = 0; i < imgTag.length; i) { // no increment as there will only be 1 element when the first is removed on the first loop.
        imgTag[i].parentNode.removeChild(imgTag[i]);
    }
    document.querySelector('#current-0').textContent = '';
    document.querySelector('#current-1').textContent = '';
};

// Callback functions for the event listeners

const clickedGotIt = function() {
    gotItCardCount += 1;
    gotItFunc('score-0', gotItCardCount, 'current-0')
};

const clickedDidntGetIt = function() {
    didntGetItCardCount += 1;
    gotItFunc('score-1', didntGetItCardCount, 'current-1')
};

const playAudio = function() {
    // check to see if there are any cards left to show
    let getCard = document.querySelector('.card');
    stuffBeforePngSource = getCard.src.slice(0, getCard.src.indexOf('empty.png'));

    if (document.querySelector('.card').src === stuffBeforePngSource + 'empty.png') {
        alert('No more cards left in the deck! Click new game to continue')
        //getCard.className += ' card-end';
    }
 else {
 let getAudioElement = document.querySelector('.hiragana-sound')
        getAudioElement.src = 'nativeWoman/hiraWoman-' + randomCard + '.mp3';
        getAudioElement.play();
   } 
};

// Event listeners for the three buttons

document.querySelector('.btn-good').addEventListener('click', clickedGotIt);

document.querySelector('.btn-bad').addEventListener('click', clickedDidntGetIt);

document.querySelector('.btn-new').addEventListener('click', newGameFunc);

document.querySelector('.card').addEventListener('click', playAudio);


/*

References:
    - Using variables in query selector - you need to use the CSS.escape() method to make sure the string is properly encoded for use in a CSS expression
    https://stackoverflow.com/questions/37081721/use-variables-in-document-queryselector

    - Making an element to hover when you hover over a different element
    https://stackoverflow.com/questions/4502633/how-to-affect-other-elements-when-a-div-is-hovered 

    - Add an extra class - put a space before the classname and - select the element, i.e. element = " new-class"
    https://stackoverflow.com/questions/507138/how-do-i-add-a-class-to-a-given-element

*/