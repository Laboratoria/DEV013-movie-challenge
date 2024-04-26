import renderDetailPelicula from "../components/renderpelicula.js";


const pelicula = () => {
    const tarjeta = document.createElement('div');
    const 
    const locationHash = window.location.hash;
    console.log(locationHash)
    const sinHash = locationHash.indexOf ("=")
    const idLocationDetalle = locationHash.slice(sinHash+1, locationHash.length-1)
    console.log(locationHash)

    tarjeta.appendChild(renderDetailPelicula(idLocationDetalle))
    
   
    return tarjeta;
};

export default pelicula;

/*javascript

const movieId = window.location.href.match(/id=(\d+)/)[1];*/






/*const pelicula = (id) => {
    const tarjeta = document.createElement('div');
    
    // Botón de regreso a la página de inicio
    const botonHome = document.createElement('button');
    botonHome.textContent = 'Home';
    botonHome.addEventListener('click', () => {
        window.location.href = '#'; // Redirigir a la página de inicio
    });
    tarjeta.appendChild(botonHome);

    // Agregar detalles de la película si se proporciona un ID válido
    if (id) {
        tarjeta.appendChild(renderDetailPelicula(id));
    }

    
    
    return tarjeta;
};

export default pelicula;*/



