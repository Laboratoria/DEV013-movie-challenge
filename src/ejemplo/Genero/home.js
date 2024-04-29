

export default () => {
  const home = document.createElement('div');

  const template = ` 
  <a href="/#card">Home</a>
  
  
  <button type="button" id="boton">Página 1</button>
  <footer> 
  @Dana Córdova
  </footer>
  
  
  
  `

  home.innerHTML= template;

  return home;


};