let timer=0;
let timerInterval;
let ms=document.getElementById("milli-second")
let s=document.getElementById("main-second")
let m=document.getElementById("main-min")


///start///

function start(){
    timerInterval=setInterval(function(){
        timer += 1/60;

        let msval= Math.floor((timer-Math.floor(timer)) *100);
        let secondval= Math.floor(timer)-Math.floor(timer/60) *60;
        let minuteval=Math.floor(timer/60);

        ms.textContent=msval < 10 ? "0" + msval.toString():msval;
        s.textContent=secondval < 10 ? "0" + secondval.toString() :secondval;
        m.textContent=minuteval < 10 ? "0" + minuteval.toString() :minuteval;

    }, 1000 / 60)
}


function stop(){
    clearInterval(timerInterval);
}


function reset(){
    stop();
    timer=0;
    ms.textContent='00';
    s.textContent='00';
    m.textContent='00';

}











