let minutesElem = document.querySelector('#minutes');
let secondsElem = document.querySelector('#seconds');
let minutes;
let seconds;
let timerOn = false;
let pause = false;
let timerIntrvlId;

function initializeVariables() {
    minutes = document.querySelector('#minutes').textContent; 
    seconds = document.querySelector('#seconds').textContent;
}
function startTimer(){
    initializeVariables();
    timerIntrvlId = setInterval(() => {
        if (parseInt(seconds) === 0) {
            seconds = 60;
            minutes -= 1;
        }
        seconds -= 1;
        if (parseInt(minutes) < 0) {
            clearInterval(timerIntrvlId);
            //showNotification();
        }
        updateDisplay(minutes, seconds);
    
    }, 1000);
}

startTimer();


function updateDisplay(minutes, seconds) {
    minutesElem.textContent = paddleft(minutes);
    secondsElem.textContent = paddleft(seconds);
}
function paddleft(value) {
    if(value < 10) {
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

let startButton = document.querySelector('#start');
let pauseButton = document.querySelector('#pause');
let stopButton = document.querySelector('#stop');

startButton.addEventListener('click',(e) => {
    startTimer();
});

pauseButton.addEventListener('click',(e) => {
    clearInterval(timerIntrvlId);
});

stopButton.addEventListener('click',(e) => {
    clearInterval(timerIntrvlId);
    minutesElem.textContent = paddleft(25);
    secondsElem.textContent = paddleft(0);
});

