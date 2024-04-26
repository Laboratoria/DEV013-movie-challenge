import requestApi from '../api.js';


function renderCartelera() {
  const peliculasContainer = document.createElement('div');
  peliculasContainer.classList.add('peliculas-container');
  requestApi()
    .then(response => {
      peliculasContainer.innerHTML = "";

      response.forEach(pelicula => {
        const peliculaElement = document.createElement('div');
        peliculaElement.classList.add('pelicula');

        const tituloElement = document.createElement('h1');
        tituloElement.textContent = pelicula.title;
        
        const enlacePoster = document.createElement('a');
        enlacePoster.setAttribute('href', '#tarjeta?id=' + pelicula.title);

        enlacePoster.addEventListener('click', (event) => { 
          event.preventDefault();
          window.location.href = '#tarjeta?id=' + pelicula.title;
        });

       

        const imagenElement = document.createElement('img');
        imagenElement.classList.add('poster');
        imagenElement.setAttribute('src', `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`);


        peliculaElement.appendChild(enlacePoster);
        enlacePoster.appendChild(imagenElement);
        peliculaElement.appendChild(tituloElement);
        peliculasContainer.appendChild(peliculaElement);
        
        

      });
    })
   
    
  return peliculasContainer;
}

export default renderCartelera;


// Buscar dentro de peliculaContainer el elemento que contiene cada pelicula 
// una vez que obtengamos la pelicula, tenemos que recorrer el arreglo dando un evento a cada pelicula.
// con el evento redirigir al detalle de pelicula "tarjeta"
// crear estructura como pide el readem "img...