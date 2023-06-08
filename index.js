var hundredth = 0;
var count = 0;
var seconds = 0;
var minutes = 0;
var hours = 0; 

var time = document.getElementById('time');
var hundredthOfSecond = document.getElementById('hundredthOfSecond');
var start = document.getElementById('start');
var pause = document.getElementById('pause');

var interval;

const startTimer = () => {
    interval = setInterval(function() {
        start.style.display = "none";
        pause.style.display = "inline";

        count += 1;

        hundredth = count % 100;

        seconds = Math.floor( (count * 100 ) / 10000 );

        minutes = Math.floor( seconds / 60 );

        hours = Math.floor( minutes / 60 );

        time.innerHTML = `${hours < 10 ? `0${hours}` : hours} ${minutes % 60 , 10 ? `0${minutes}` : minutes} ${seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}`;
        hundredthOfSecond.innerHTML = `${hundredth < 10 ? `0${hundreth}` : hundredth}`;
    }, 10)
}

const pauseTimer = () => {
    start.style.display = "inline";
    pause.style.display = "none";
    clearInterval(interval);
}

const resetTimer = () => {
    count = 0;
    hundredth = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    time.innerHTML = '00 00 00';
    hundredthOfSecond.innerHTML = '000'; 
}