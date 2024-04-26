
import requestApi from "../api.js";



function renderDetailPelicula(){
    const resumen = document.createElement('div');
    resumen.classList.add('detalle-pelicula');
    
    requestApi()
        .then (peliculas => {

            if (!peliculas || peliculas.length === 0) {
                console.error('No se encontraron películas para el ID especificado');
                return;
            }

            
            let peliculaSeleccionada = null;
            for (let i = 0; i < peliculas.length; i++) {
                if (peliculas[i].id === id) {
                    peliculaSeleccionada = peliculas[i];
                    break;
                }
            }

            if (!peliculaSeleccionada) {
                console.error('La película seleccionada no fue encontrada');
                return;
            }


            const descripcionElement = document.createElement('p');
            descripcionElement.textContent = peliculaSeleccionada.overview;

            const imagenElement = document.createElement('img');
            imagenElement.setAttribute('src', `https://image.tmdb.org/t/p/w500/${peliculaSeleccionada.poster_path}`);

            const peliculaResumen = document.createElement('div');
            peliculaResumen.classList.add('pelicula');
            peliculaResumen.appendChild(imagenElement);
            peliculaResumen.appendChild(descripcionElement);

            resumen.appendChild(peliculaResumen);
            

        });


    return resumen;





};

export default renderDetailPelicula;