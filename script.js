const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;
let remainingTime = 30;
let timer;

const updateTimerDisplay = () => {
    document.getElementById("timerSpan").innerText = remainingTime;
};

const startTimer = () => {
    timer = setInterval(() => {
        remainingTime--;

        updateTimerDisplay();

        if (remainingTime === 0) {
            clearInterval(timer);
            gameOver(false);
        }
    }, 1000);
};

const resetTimer = () => {
    clearInterval(timer);
    remainingTime = 30;
    updateTimerDisplay();
    startTimer();
};

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
    resetTimer();
};

const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word; 
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
};

const gameOver = (isVictory) => {
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    const wordElement = gameModal.querySelector("p");
    wordElement.innerHTML = `${modalText} <b>${currentWord}</b>`;

    const wordObject = wordList.find(wordObj => wordObj.word === currentWord);
    if (wordObject) {
        const definition = wordObject.definition;
        wordElement.setAttribute("data-definition", definition);
    } else {
        wordElement.removeAttribute("data-definition");
    }

    wordElement.addEventListener("click", function(){
        const definition = this.getAttribute("data-definition");
        if (definition) {
            alert(definition);
        }
    });

    gameModal.classList.add("show");
    clearInterval(timer);
};


const initGame = (button, clickedLetter) => {
    if(currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true; 
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if(wrongGuessCount === maxGuesses) gameOver(false);
    if(correctLetters.length === currentWord.length) gameOver(true);
};

for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);