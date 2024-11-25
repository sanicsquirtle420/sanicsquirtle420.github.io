let secondsElapsed = 0 ;
let interval = null ;
const time = document.getElementById("time") ;


function padStart(value) {
    return String(value).padStart(2, "0") ;
}

function setTime() {
    const mins = Math.floor(secondsElapsed / 60) ;
    const secs = secondsElapsed % 60 ;
    time.innerHTML = `${padStart(mins)}:${padStart(secs)}` ;
}

function timer() {
    secondsElapsed++ ;
    setTime() ;
}

function startClock() {
    if(interval) stopClock() ;
    interval = setInterval(timer , 1000) ;
}

function stopClock() {
    clearInterval(interval) ;
}

function resetClock() {
    stopClock() ;
    secondsElapsed  = 0 ;
    setTime() ;
}
