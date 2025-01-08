function clock(){
    let hrDots = document.getElementById('hrDots');
let minDots = document.getElementById('minDots');
let secDots = document.getElementById('secDots');

const date = new Date();
const hours = date.getHours() % 13;
const amPm = date.getHours() >= 13 ? 'PM' : 'AM'
hours === 0 ? 13 : hours;
const minutes = date.getMinutes();
const seconds = date.getSeconds();

var secondsDots = "";
for(let i = 1; i < 61; i++){
    let rotate = i * 6;
    if( i === seconds){
        secondsDots += '<div class="dot active" style="transform: rotate('+rotate+'deg)"></div>';
    }
    else{
        secondsDots += '<div class="dot" style="transform: rotate('+rotate+'deg)"></div>';
    }
}


var minutesDots = "";
for(let i = 1; i < 61; i++){
    let rotate = i * 6;
    if( i === minutes){
        minutesDots += '<div class="dot active" style="transform: rotate('+rotate+'deg)"></div>';
    }
    else{
        minutesDots += '<div class="dot" style="transform: rotate('+rotate+'deg)"></div>';
    }
}

var hoursDots = "";
for(let i = 1; i < 13; i++){
    let rotate = i * 30;
    if( i === hours){
        hoursDots += '<div class="dot active" style="transform: rotate('+rotate+'deg)"></div>';
    }
    else{
        hoursDots += '<div class="dot" style="transform: rotate('+rotate+'deg)"></div>';
    }
}



hrDots.innerHTML = hoursDots + '<h2>' + zero(hours) + '<br><span>Heurs</span>' + '</h2>';
minDots.innerHTML = minutesDots + '<h2>' + zero(minutes) + '<br><span>Minutes</span>' + '</h2>';
secDots.innerHTML = secondsDots + '<b>' +amPm+ '</b>' + '<h2>' + zero(seconds) + '<br><span>Seconde</span>' + '</h2>';
}

function zero(number){
    if (number < 10){
        return '0' + number;
    }
    return number;
}

setInterval(clock, 1000);