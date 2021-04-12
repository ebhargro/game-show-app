/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Project by Ebony Hargro // 
// Aiming for Meets Expectations // 


// creating the Phrase class with one parameter: phrase// 
class Phrase {
    constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    }

// Creating a method that adds letter placeholders to the display when the game starts.
// Each letter is presented by an empty box, one li element for each letter.

/**
 * display phrase on game board
 */

    addPhraseToDisplay() {
        let ul = document.getElementById('phrase').getElementsByTagName('ul')[0];
        for(let i = 0; i < this.phrase.length; i++){
            let li = document.createElement('li');
            const regex = /[a-z]/.test(this.phrase[i]);
            if(regex === true){
                li.classList.add('hide', 'letter', `${this.phrase[i]}`);
                li.textContent = `${this.phrase[i]}`;
            }else{
                li.classList.add('space');
                li.textContent = ' ';
            }
            ul.appendChild(li);
            }
        }
    

//checks to see if the letter selected by the player matches a letter in the phrase.
/**
 * Checks if passed letter is in phrase
 * @param (string) letter - letter to check
 */
    checkLetter(letter){
        const letterPresent = this.phrase.includes(letter);
        return letterPresent;
    }
//reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.
    showMatchedLetter(letter){
        const matchingSet = Array.from(document.getElementsByClassName(letter));
        matchingSet.forEach(match => {
            match.classList.remove('hide');
            match.classList.add('show');
        })
    }
}