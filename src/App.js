import {Route, Routes} from "react-router-dom"
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
    {/* <BrowserRouter> */}
      <Header/>
      <div>

      <Routes >
            <Route path='/' element={<Home/>} exact/>
            <Route path='/cart' element={<Cart/>} exact/>
          </Routes>

        {/* <Routes>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/cart" exact>
          <Cart/>
        </Route>

        </Routes> */}
        
      </div>
    {/* </BrowserRouter> */}
    </>
    
  );
}

export default App;
