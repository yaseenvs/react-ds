import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Movies from './pages/Movies';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/movies' element={<Movies/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App