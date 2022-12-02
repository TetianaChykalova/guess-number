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
let guessingNumber = Math.floor(Math.random() * 20 + 1);
console.log(guessingNumber)

function newGuessingNumber () {
    guessingNumber = Math.floor(Math.random() * 20 + 1);
    console.log(guessingNumber)
}

let countAttempt = 1
let bestResultValue = 20

//SCRIPT
function inputNewNumber (num) {
    console.log(countAttempt)

    if(num == guessingNumber) {
        titleNumber.textContent = num
        generalText.textContent = 'Bravo! You are winner!'
        document.body.classList.add('body-win')

        if (countAttempt < bestResultValue) {
            bestResult.textContent = countAttempt
            bestResultValue = countAttempt
            countAttempt = 1
        }
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
            if (attemptsNumber.textContent > 0) {
                inputNewNumber(inputValue)
            } else {
                // alert('Game Over!')
                generalText.textContent = 'Game Over!'
                attemptsNumber.textContent = '0'
                document.body.classList.add('body-over')
                generalText = document.querySelector('.content__text-general')
            }
        }
    })
}

function reloadForStart() {
    buttonStart.addEventListener('click', function () {
        // window.location.reload();
        newGuessingNumber()
        document.querySelector('.content__input-input').value = ''
        document.body.classList.remove('body-over')
        document.body.classList.remove('body-win')
        attemptsNumber.textContent = '20'
        titleNumber.textContent = '???'
    })
}

buttonTryScript()
reloadForStart()