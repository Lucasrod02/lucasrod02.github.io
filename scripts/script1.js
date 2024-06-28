const headerElement = document.querySelector('.header-element');

// Agrega el guion bajo al elemento h1 utilizando textContent
headerElement.textContent += '_';

// Define la función que hace que el guion bajo parpadee
function blink() {
  headerElement.textContent = headerElement.textContent.replace(/_/g, '');
  setTimeout(() => {
    headerElement.textContent += '_';
  }, 500);
}

// Llama a la función blink cada 1000ms
setInterval(blink, 1000);