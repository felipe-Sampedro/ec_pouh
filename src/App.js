import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings='Esto es una Prueba'/>
      <Footer/>
    </div>
  );
}

export default App;
