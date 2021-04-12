/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Creating a Game class with a constructor method and three properties: missed, phrases, and activePhrase 

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

//Creating a method called createPhrases() that creates and returns an array of 5 new Phrase objects and then sets the prhases property to call that method

/**
 * Creates phrases for use in game
 * @returns {array} An array of phrases that could be used in the game
 */
    createPhrases() {
        const arrayofQuotes = ['You win some you lose some', 'Slow and steady wins the race', 'To thine own self be true', 'Easier said than done', 'Things come and go'];
        const phrases = arrayofQuotes.map(quote => new Phrase(quote), []);
        return phrases;
    }

/**
 * Begins game by selecting a random phrase and displaying it to user
 */
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        overlay.classList.remove('win');
        overlay.classList.remove('lose');
    }

    /**
 * Selects random phrase from phrases property
 * @returns {Object} Phrase object chosen to be used
 */
     getRandomPhrase(){
        const userChoice = Math.floor(Math.random()* this.phrases.length);
        return this.phrases[userChoice];
    }
/**
 * Checks for winning move
 * @returns {boolean} True if game has been won, false if game wasn't won
 */
    checkForWin() {
        const hidden = document.getElementsByClassName('hide');
        return hidden.length === 0;
    }
/**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */
    removeLife() {
        const tries = Array.from(document.getElementsByClassName('tries'));
        console.log(tries);
        const singleTry = tries[this.missed].firstElementChild;
        console.log(singleTry);
        singleTry.src = 'images/lostHeart.png';
        this.missed +=1;
        if (this.missed === 5) {
            this.gameOver();
            location.reload();
        }
    }

/**
 * Displays game over message
 * @param {boolean} gameWon - Whether or not the user won the game
 */
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'inherit';
        const gameOverMessage = document.getElementById('game-over-message');
        if (gameWon) {
            gameOverMessage.innerHTML = "Great job!"
            setTimeout(this.startGame(), 3000);
        }
        else {
            gameOverMessage.innerHTML = "Sorry, better luck next time!"
            setTimeout(this.startGame(), 3000);
        }

    }


    handleInteraction(button){
        button.disabled = true;
        const keyClicked = button.textContent;
        const verify = this.activePhrase.checkLetter(keyClicked);
        
        if(verify) {
            button.classList.add('chosen', 'bounce');
            this.activePhrase.showMatchedLetter(keyClicked);
            const won = this.checkForWin();
            if(won === true){
                this.gameOver(win);
            }
        }
        if (!verify) {
            button.classList.add('wrong', 'hinge');
            this.removeLife();
        }
    
    }
}