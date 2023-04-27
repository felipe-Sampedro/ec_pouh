import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import Rutas from './routes/Rutas';
import CartContext, { GlobalContext } from './components/Context/CartContext';



function App() {
  return (
    <div className="App">
      <CartContext>
        <Rutas />
      </CartContext>
    </div>
  );
}

export default App;
