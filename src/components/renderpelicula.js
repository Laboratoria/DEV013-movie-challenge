import requestApi from "../api.js";

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

function renderDetailPelicula(id) {
  const resumen = document.createElement('div');
  resumen.classList.add('detalle-pelicula');
  requestApi()
    .then(response => {
      const idNumber = parseInt(id);
      const peliculaSeleccionada = response.find(pelicula => pelicula.id === idNumber);      
      
      const cardPosterior = document.createElement('div');
      cardPosterior.classList.add('card-posterior');

      const img = document.createElement('img');
      img.classList.add('img1');
      
      img.setAttribute('alt', peliculaSeleccionada.title);
      img.setAttribute('src', IMG_URL + peliculaSeleccionada.poster_path);

      const cardInfo = document.createElement('div');
      cardInfo.classList.add('card-info2');
      
      const title = document.createElement('h3');
      title.classList.add('title1');
      title.textContent = peliculaSeleccionada.title;

      const star = document.createElement('li');
      star.classList.add('star');
      star.innerHTML=`
      <h4 class="fa-solid fa-star"></h4>
      <h4 class="fa-solid fa-star"></h4>
      <h4 class="fa-solid fa-star"></h4>
      <h4 class="fa-solid fa-star"></h4>
      <h4 class="fa-regular fa-star"></h4>
      `
      const fecha = document.createElement('h4');
      fecha.classList.add('fecha1');
      fecha.textContent = `Año de Lanzamiento: ${peliculaSeleccionada.release_date}`;

      const ul = document.createElement('ul');

      const votacion = document.createElement('li');
      votacion.classList.add('votacion');
      votacion.textContent = `Votación: ${peliculaSeleccionada.vote_average}`;

      const resumenLi = document.createElement('li');
      resumenLi.classList.add('resumen');
      resumenLi.textContent = `Resumen: "${peliculaSeleccionada.overview}"`;

      ul.appendChild(votacion);
      ul.appendChild(star);
      ul.appendChild(resumenLi);
      

      cardInfo.appendChild(title);
      cardInfo.appendChild(fecha);
      cardInfo.appendChild(ul);

      cardPosterior.appendChild(img);
      cardPosterior.appendChild(cardInfo);
      resumen.appendChild(cardPosterior);
    })
    .catch(error => {
      console.error('Error al obtener la película:', error);
    });


  return resumen;

};

export default renderDetailPelicula;

/*vistaPosterior.innerHTML +=
          `
          <div class="card-posterior"> 
            <img class="img1" src=${IMG_URL + movie.poster_path} alt=${movie.title}>
            <div class="card-info2"
              <h3 class="title1">${movie.title}</h3>
              <h4 class="fecha1">Año de Lanzamiento: ${movie.release_date}</h4>
              <ul>
                <li class="votacion">Votación: Votación: ${movie.vote_average}</li>
                <li class="resumen">Resumen: "${movie.overview}"</li>
              </ul>
            </div>
          </div>
          `
      })*/

/*console.log(peliculaSeleccionada.overview)

                const pelicularesumen = document.createElement('div');

                const descripcionElement = document.createElement('p');
                descripcionElement.textContent = '${peliculaSeleccionada.overview}';

                const enlacePoster = document.createElement('a');
                enlacePoster.setAttribute('href', `#tarjeta?id=${peliculaSeleccionada.id}`);

                const imagenElement = document.createElement('img');
                imagenElement.classList.add('poster');
                imagenElement.setAttribute('src', `https://image.tmdb.org/t/p/w500/${peliculaSeleccionada.poster_path}`);

                enlacePoster.appendChild(imagenElement);
                pelicularesumen.appendChild(enlacePoster);
                pelicularesumen.appendChild(descripcionElement);
                resumen.appendChild(pelicularesumen);

                console.log(peliculaSeleccionada)*/