import title from "../../components/title.js";




export default () => {
  const home = document.createElement('div');

  const template = ` 
  <div id= "header" >
     <header> 
         ${title}
      </header>
   </div>

  <div class="cards" id="cards">
  
  <a href="/#"></a>
  
  </div>
  
  
  <button type="button" id="boton">Página 1</button>
  <footer> 
  @Dana Córdova
  </footer>
  
  
  
  `

  home.innerHTML= template;

  return home;


};