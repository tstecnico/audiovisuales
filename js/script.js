const container = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');
let offset = 0;
let slideID = 0;
setInterval(() => {
    offset = slides[0].offsetWidth;
    container.style.transition = 'left ease-in-out 500ms';
    container.style.left = -offset + 'px';
    setTimeout(() => {
        container.style.transition = 'none';
        slides[slideID].style.order = slides.length - 1;
        container.style.left = 0;
        slideID++;
        if(slideID === slides.length) {
            slideID = 0;
            slides.forEach(slide => {
                slide.style.order = 'initial';
            });
        }
    }, 500);
}, 3000);

















/* PARA EL BOTON DE BUSCAR

const searchInput = document.getElementById('buscar'); 

function buscar() {
  const searchTerm = searchInput.value.toLowerCase(); // Obtiene el valor del input en minúsculas

  

  // Selecciona todos los elementos con la clase 'slide'
  const slides = document.querySelectorAll('.slide');

  // Recorre cada slide
  for (let slide of slides) {
    const img = slide.querySelector('img'); // Obtiene la imagen dentro del slide
    if (searchInput == ' ' || searchInput.length == 0) {
      alert('no has escrito nada');
    } if (img && img.alt) {
      // Convierte el atributo 'alt' a minúsculas para la comparación
      const altText = img.alt.toLowerCase(); 
      if (altText.includes(searchTerm)) {
        window.open(img.src);
        return; // Termina la función si se encuentra una coincidencia
      }
    }
  }
  alert('No está disponible');
}
*/

