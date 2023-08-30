import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import SingleProduct from './pages/SingleProduct';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">    
    <BrowserRouter>
          <Navbar />
            <Routes>
                  <Route path='/' element={<Home /> }/>
                  <Route path='/products' element={<Products />} />
                  <Route path='/products/:id' element={<SingleProduct />} />                  
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/login' element={<Login /> } />
                  <Route path='/cart' element={<Cart /> } />
                  <Route path='*' element={<ErrorPage />} />
            </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
