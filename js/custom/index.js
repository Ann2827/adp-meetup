import Video from './app';
import { observer } from './app/functions';

// function app () {
//   Reveal.on( 'slidechanged', event => {
//     if (event.indexh === 5 && event.indexv === 1) {
//       console.log('slidechanged', event.currentSlide, event.indexh)
//       new App();
//     }
//     // Reveal.off()
//   });
// }

function project () {
  (function(w, d, c){var embed=d.createElement('script');embed.src='https://embed.quizyworld.tech/embed.js'; embed.onload=function(){if(document.readyState !== 'loading')window.qw.quiz.init(c);else document.addEventListener("DOMContentLoaded",function(){ window.qw.quiz.init(c);});};d.head.insertBefore(embed,d.head.firstElementChild);})(window,document, [{'hash':'c1eba035241062e56ee2a90d96f49089','uuid':'5cd47942-a7af-3d1a-a1e1-f0b58f6785e5','renderType':'IN_PAGE','settings':{'desktop':{'activation':[{'type':''}],'openFrequency':{'frequency':'always','filter':'hash'},'completeFrequency':{'frequency':'always','filter':'hash'}},'mobile':{'activation':[{'type':''}],'openFrequency':{'frequency':'always','filter':'hash'},'completeFrequency':{'frequency':'always','filter':'hash'}}}}])
}

async function architectural () {
  const appVideo = await observer('app-video');
  const appButton = await observer('app-button');
  new Video(appVideo, appButton);
}

function init () {
  project();
  document.addEventListener('DOMContentLoaded', async () => {
    await architectural();
  });
}

init();
