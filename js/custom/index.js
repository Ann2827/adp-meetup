function app () {
  Reveal.on( 'slidechanged', event => {
    if (event.indexh === 5 && event.indexv === 1) {
      console.log('slidechanged', event.currentSlide, event.indexh)
    }
    // Reveal.off()
  });
}

function init () {
  document.addEventListener('DOMContentLoaded', () => {
    app();
  });
}

init();
