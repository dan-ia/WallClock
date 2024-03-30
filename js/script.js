const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand')


const getTime = () => {
    const date = new Date();

    const obj = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }

    return obj;
}


setInterval(() => {

    const { seconds ,minutes, hours} = getTime();

    
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;
    play()

}, 1000);


// ////////////////////////////////////////////////////

// relogio digital

const digitalClock = document.querySelector('.digital-clock')

const digitalHour = document.querySelector('.digital-hour')
const digitalMinute = document.querySelector('.digital-minute')
const digitalSecond = document.querySelector('.digital-second')


const twoDigits = (digit) => {

    if(digit < 10) {
        return ('0' + digit)
    }
    else return (digit)
}

setInterval(() => {

    const {seconds,minutes, hours} = getTime()

    digitalHour.innerHTML = twoDigits(hours)
    digitalMinute.innerHTML = twoDigits(minutes)
    digitalSecond.innerHTML = twoDigits(seconds)

}, 1000);