// task 1

const minutesInput = document.getElementById("minutes-input");
const secondsInput = documen.getElementById("seconds-input");
const startButton = document.getElementById("start-button")
const resetButton = document.getElementById("reset-button")

let totalTime = 0;

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

function startTime() {
    const minutes = parseInt(minutesInput.value);
    const seconds = parseInt(secondsInput.value);
}

function resetTimer() {

}


function padNumber(number) {
    return String(number).padStart(2, '0')
} 

function timerDisplayUpdate() {
    
}