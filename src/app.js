// Routes
import { initRouter } from './route.js';

/* init será la función que llame a initRouter apenas cargue el sitio */
const init = () => {
  initRouter();
}

window.addEventListener('load', init);
