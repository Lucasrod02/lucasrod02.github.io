// funcion de verificacion usuario y contraseña

document.getElementById("submit-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;

    if (password.length >= 6) {
        window.location.href = 'account.html';
    } else {
        alert('Por favor, completa todos los campos y asegurate de que la contraseña tenga al menos 6 caracteres.');
    }
});