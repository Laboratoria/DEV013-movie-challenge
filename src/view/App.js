import title from "../components/title.js";
import renderCartelera from "../components/cartelera.js";



const App = () => {
  const container = document.createElement('div');
  container.appendChild(title());
  container.appendChild(renderCartelera());


  return container;

};
export default App;


