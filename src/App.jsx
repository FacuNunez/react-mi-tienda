import './App.css';
import Nabvar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <Nabvar />
    <ItemListContainer texto="Bienvenidos a La Tienda" />
    <ItemDetailContainer/>
    </>
    
  );
}

export default App;
