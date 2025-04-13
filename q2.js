// Stopwatch
let timer = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let elapsedTime = 0, interval;
function updateTime() {
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / 60000) % 60;
    let hours = Math.floor(elapsedTime / 3600000);
    timer.innerText = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startButton.addEventListener("click", () => {
    if (!interval) {
        let startTime = Date.now() - elapsedTime;
        interval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateTime();
        }, 1000);
    }
});

stopButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

resetButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    elapsedTime = 0;
    updateTime();
});

updateTime(); // Initialize the display

// Age Calculator
let dobInput = document.getElementById("dob");
let ageResult = document.getElementById("age-result");

dobInput.addEventListener("mouseover", () => {
    let dob = new Date(dobInput.value);
    if (!isNaN(dob)) {
        let diff = Date.now() - dob.getTime();
        let age = new Date(diff).getUTCFullYear() - 1970;
        ageResult.innerText = `Your age: ${age} years`;
    } else {
        ageResult.innerText = "Enter a valid date of birth.";
    }
});

// Character Counter
let textArea = document.getElementById("text-area");
let charCount = document.getElementById("char-count");

textArea.addEventListener("input", () => {
    charCount.innerText = textArea.value.length;
});
