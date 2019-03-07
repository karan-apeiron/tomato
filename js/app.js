let minutesElem = document.querySelector('#minutes');
let secondsElem = document.querySelector('#seconds');
let minutes;
let seconds;
let timerOn = false;
let pause = false;
let timerIntrvlId;
let runningStatus = false;

let startButton = document.querySelector('#start');
let pauseButton = document.querySelector('#pause');
let stopButton = document.querySelector('#stop');


function initializeVariables() {
    minutes = document.querySelector('#minutes').textContent; 
    seconds = document.querySelector('#seconds').textContent;
}
function startTimer(){
    if(runningStatus) 
        return;
    initializeVariables();
    if(timerIntrvlId) 
        clearInterval(timerIntrvlId);
    timerIntrvlId = setInterval(() => {
        if (parseInt(seconds) === 0) {
            seconds = 60;
            minutes -= 1;
        }
        seconds -= 1;
        if (parseInt(minutes) < 0) {
            clearInterval(timerIntrvlId);
            return;
            //showNotification();
        }
        updateDisplay(minutes, seconds);
    
    }, 1000);
    runningStatus = true;
    updateButtons();
}

startTimer();


function updateDisplay(minutes, seconds) {
    minutesElem.textContent = paddleft(minutes);
    secondsElem.textContent = paddleft(seconds);
}
function paddleft(value) {
    if(value.toString().length < 2) {
        return '0'+value;
    }
    else 
        return value;
}

function showNotification(message, timeout) {
    let notificationsElem = document.querySelector('.notifications');
    notificationsElem.style.display = 'block';
}

// event handlers


startButton.addEventListener('click',(e) => {
    startTimer();
});

pauseButton.addEventListener('click',(e) => {
    clearInterval(timerIntrvlId);
    runningStatus = false;
    updateButtons();
});

stopButton.addEventListener('click',(e) => {
    clearInterval(timerIntrvlId);
    minutesElem.textContent = paddleft(25);
    secondsElem.textContent = paddleft(0);
});

function updateButtons() {
    if(runningStatus) {
        startButton.disabled = true;
        pauseButton.disabled = false;
    }
    else{
        startButton.disabled = false;
        pauseButton.disabled = true;
    }
}
