
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log("holisss")
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={'Bienvenidos'}/>
    </>
  );
}

export default App;
