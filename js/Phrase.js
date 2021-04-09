/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Project by Ebony Hargro // 
// Aiming for Meets Expectations // 


// creating the Phrase class // 
class Phrase {
    constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    }
// Creating a method that adds letter placeholders to the display when the game starts.
// Each letter is presented by an empty box, one li element for each letter.

    addPhraseToDisplay() {
        
    }

//checks to see if the letter selected by the player matches a letter in the phrase.
    checkLetter() {
        const letterPresent = this.phrase.includes(letter);
        return letterPresent;
    }
//reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.
    showMatchedLetter(){
        const match = document.querySelectorAll(`.${letter}`);
        for (let )
    }

}