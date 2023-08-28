import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Order from './components/pages/orderOnline/Order';
import Menu from './components/pages/menu/Menu';
import Reservation from './components/pages/Reservation/Reservation';
import Login from './components/pages/login/Login';
import Step1 from './components/pages/Reservation/Step1';
import Step2 from './components/pages/Reservation/Step2';
import Step3 from './components/pages/Reservation/Step3';
import burgericon from './icons_assets/🦆 icon _hamburger menu.svg';
import closeicon from './icons_assets/close-bold.svg'
import { useContext } from 'react';
import { ContextAPI } from './context/ContextAPI';

function App() {
  const {toggle,handleToggle}=useContext(ContextAPI)

  return (
    <>
    <div className='headerContainer'>
      <Header />
      <label htmlFor='menutoggle' className='burgericon'>{toggle ? <img src={closeicon} alt='burger icon' />:<img src={burgericon} alt='burger icon' />}</label>
      <input type='checkbox' id='menutoggle' checked={toggle} onChange={ e => handleToggle()}/>
      <Nav />
    </div>
    <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/order' element={<Order />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/reservation' element={<Reservation />} >
        <Route path='step1' element={<Step1 />} />
        <Route path='step2' element={<Step2 />} />
        <Route path='step3' element={<Step3 />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
    </main>
    </>
  );
}

export default App;
