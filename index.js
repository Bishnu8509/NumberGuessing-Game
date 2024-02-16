let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("TextOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio=new Audio("/audio/music.wav")

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    // console.log(computerGuess);
    document.getElementById("newGamebutton").style.display = "none";
    document.getElementById("gamearea").style.display = "none"
}
const EasyMode = () => {
    audio.play();
    maxGuess = 10;
    StartGame()
}

const HardMode = () => {
    audio.play();
    maxGuess = 5;
    StartGame()
}

const StartGame = () => {
    document.getElementById("firstScreen").style.display = "none"
    document.getElementById("gamearea").style.display = "block"
}
//main logic of our app
const compareGuess = () => {
    audio.play();
    userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber]
    document.getElementById("guesses").innerHTML = userGuess;

    //Check the value Low or High
    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your Guess is High"
            userNumberUpdate.value = ""

        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your is guess is Low"
            userNumberUpdate.value = ""

        } else {
            userGuessUpdate.innerHTML = "It's Correct"
            userNumberUpdate.value = ""
            StartNewGame()
        }
    } else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You Loose !! correct number was ${computerGuess}`
            userNumberUpdate.value = "";
            StartNewGame()
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `Your loose !! correct number was ${computerGuess}`
            userNumberUpdate.value = "";
            StartNewGame()
        } else {
            userGuessUpdate.innerHTML = "It's Correct"
            userNumberUpdate.value = ""
            StartNewGame()
        }

    }

    document.getElementById("attemps").innerHTML = userGuess.length;
}
const StartNewGame = () => {
    document.getElementById("newGamebutton").style.display = "inline"
    userNumberUpdate.setAttribute("disabled", true)

}
//reload the page
const newGame = () => {
    audio.play();
    window.location.reload();
}
