 
import './App.css';
import Header from './pages/Shared/Header/Header';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/LogIn/Login/Login';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
        <BrowserRouter>
        <Header></Header>
        <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
