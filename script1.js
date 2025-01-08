function clock() {
    let hrDots = document.getElementById('hrDots');
    let minDots = document.getElementById('minDots');
    let secDots = document.getElementById('secDots');
    let timezone = document.getElementById('timezoneSelect').value;

    const date = new Date();
    const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeParts = new Intl.DateTimeFormat('en-US', options).formatToParts(date);

    const hours = parseInt(timeParts.find(part => part.type === 'hour').value);
    const minutes = parseInt(timeParts.find(part => part.type === 'minute').value);
    const seconds = parseInt(timeParts.find(part => part.type === 'second').value);
    const amPm = timeParts.find(part => part.type === 'dayPeriod').value;

    function createDots(totalDots, currentDot) {
        let dots = "";
        for (let i = 1; i <= totalDots; i++) {
            let rotate = i * (360 / totalDots);
            dots += '<div class="dot' + (i === currentDot ? ' active' : '') + '" style="transform: rotate(' + rotate + 'deg)"></div>';
        }
        return dots;
    }

    hrDots.innerHTML = createDots(12, hours) + '<h2>' + zero(hours) + '<br><span>Heurs</span></h2>';
    minDots.innerHTML = createDots(60, minutes) + '<h2>' + zero(minutes) + '<br><span>Minutes</span></h2>';
    secDots.innerHTML = createDots(60, seconds) + '<b>' + amPm + '</b>' + '<h2>' + zero(seconds) + '<br><span>Seconde</span></h2>';
}

function zero(number) {
    return number < 10 ? '0' + number : number;
}

document.getElementById('timezoneSelect').addEventListener('change', clock);
setInterval(clock, 1000);
clock(); // Appel initial