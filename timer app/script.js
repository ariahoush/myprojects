const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function formatTime(time){
    if(time<10){
        return `0${time}`
    }else{
        return time
    }
}
// '1 jan 2024';

// daysEl=daysEl || 0;
//     hoursEl=hoursEl || 0;
//     minsEl=minsEl || 0;
//     secondsEl=secondsEl || 0;

function countdown() {
    

    const a=document.getElementById("1");
    const newYears=a.value;
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds=(newYearsDate-currentDate)/1000;

    const days=Math.floor(totalSeconds/(3600*24))
    const hours=Math.floor(totalSeconds/3600)%24
    const minutes=Math.floor(totalSeconds/60)%60
    const seconds=Math.floor(totalSeconds)%60

    // console.log(days,hours,minutes,seconds);
    

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML =  formatTime(seconds);

    setInterval(countdown,1000);

    var audio = document.getElementById("myAudio");
    if (days===0){
        audio.play()
    }
}




