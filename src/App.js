
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import fondo from './assets/41604-Labrador-dog-underwater-cute-animals-funny.jpg'

function App() {
  console.log("holisss")
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={'Bienvenidos'}/>
    <img src ={fondo} className="fondo" />
    </>
  );
}

export default App;
