import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App