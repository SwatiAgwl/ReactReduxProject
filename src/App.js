import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import {Routes,Route} from 'react-router-dom'
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </div>
  );
}


export default App;
