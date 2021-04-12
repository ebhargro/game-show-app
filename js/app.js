/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Testing a bunch of stuff

// game.phrases.forEach((phrase, index) => {
//     console.log(`Phease ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };


// const game = new Game();

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

var game;
document.getElementById('btn__reset').addEventListener('click', (e) => {
    game = new Game();
    game.startGame();

} )

/**
 * Handles onscreen keyboard button clicks
 *  @param (HTMLButtonElement) button - the clicked button element
 */
const qwertyDiv = document.getElementById('qwerty');
 qwertyDiv.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        game.handleInteraction(e.target);
    }
})
