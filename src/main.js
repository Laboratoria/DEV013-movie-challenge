import App from './view/App.js';
import Pelicula from './view/Peliculas.js'

const contenedorHTML = document.querySelector("#root");
const init = () => {
    
    window.addEventListener("hashchange", ()=> {
    contenedorHTML.innerHTML= "";
     switch(window.location.hash){
        case " ":
            contenedorHTML.appendChild(App());
        break;
        case "#tarjeta":
            const peliculaId = window.location.hash.substring(1);
            contenedorHTML.appendChild(Pelicula(peliculaId));
        break;
        default:
        console.error("Hash desconocido en la URL.");
      
      
        }
      


    });
};


window.addEventListener("load", () => {
    contenedorHTML.appendChild(App());
    init();
});


/*document.getElementById('root').appendChild(App());*/
