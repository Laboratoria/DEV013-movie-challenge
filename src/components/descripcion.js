import renderDetailPelicula from "./renderpelicula.js";




const descripcion = (id)=>{ 
    const tarjetas = document.createElement('div');

    tarjetas.appendChild(renderDetailPelicula(id));
    return tarjetas;
};
export default descripcion;


