// Funcion de reloj 

function updateClock() {
    var currentTime = new Date(); 
    var hours = currentTime.getHours(); 
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").textContent = timeString;

    setTimeout(updateClock, 1000); 

}
function padZero(number) {
    return number < 10 ? "0" + number : number;
}
updateClock();

