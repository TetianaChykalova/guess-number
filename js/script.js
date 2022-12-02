'use strict'

//VARIABLES TEXT
let titleNumber = document.querySelector('.title__ask-number')
// let inputValue = document.querySelector('.content__input-input').value
let generalText = document.querySelector('.content__text-general')
let attemptsNumber = document.querySelector('.content__text-attempt')
let bestResult = document.querySelector('.content__text-result')

//VARIABLES BUTTON
const buttonStart = document.querySelector('.button-start')
const buttonTry = document.querySelector('.content__input-button')

//VARIABLES FOR SCRIPT
const guessingNumber = Math.floor(Math.random() * 20 + 1);
console.log(guessingNumber)
let countAttempt = 1

//SCRIPT
function inputNewNumber (num) {
    console.log(countAttempt)

    if(num == guessingNumber) {
        titleNumber.textContent = num
        generalText.textContent = 'Bravo! You are winner!'
        bestResult.textContent = countAttempt
    } else if (num > guessingNumber) {
        generalText.textContent = 'Too much:( Try again!'
        countAttempt++
    } else if (num < guessingNumber) {
        generalText.textContent = 'Too little:( Try again!'
        countAttempt++
    }
}

function buttonTryScript () {
    buttonTry.addEventListener('click', function () {
        let inputValue = +document.querySelector('.content__input-input').value

        if(!inputValue) {
            generalText.textContent = 'Please, enter the number'
        } else {
            attemptsNumber.textContent = attemptsNumber.textContent - 1
            inputNewNumber(inputValue)
        }
    })
}

function reloadForStart() {
    buttonStart.addEventListener('click', function () {
        window.location.reload();
    })
}

buttonTryScript()