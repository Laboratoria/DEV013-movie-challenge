/*const aplicacion = document.querySelector('.container')*/



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDkzNzM1ZTY2NzMxMWEyMTYyMWVhNDYyOTY5NGI1YSIsInN1YiI6IjY2MDQ0MWYwMzUyMGU4MDE3ZWRiY2JmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYXGAC8Uj_ElKcgQavBmq2sWkCAbzlT1FldBYXf78o'
  }
};


function requestApi() {
  
  return fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-US&page=1&sort_by=popularity.desc", options)
  .then(res => res.json())
  .then(response => {
    console.log(response.results)
    return response.results;
  });
   
};
export default requestApi;