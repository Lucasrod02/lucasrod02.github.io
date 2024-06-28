// Funcion de carrusel de fotos

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        items[currentIndex].classList.remove('active');
        items[currentIndex].classList.add('previous');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.remove('previous');
        items[currentIndex].classList.add('active');
    }

    setInterval(showNextItem, 5000);
}); 


// Funcion de reloj 

function updateClock() {
    var currentTime = new Date(); 
    var hours = currentTime.getHours(); 
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    var fechaString = new Date().toLocaleDateString('es-ES', options);

    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").textContent = timeString;
    document.getElementById("date").textContent = fechaString;

    setTimeout(updateClock, 1000); 

}
function padZero(number) {
    return number < 10 ? "0" + number : number;
}
updateClock();

