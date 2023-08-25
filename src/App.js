import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Order from './components/pages/orderOnline/Order';
import Menu from './components/pages/menu/Menu';
import Reservation from './components/pages/Reservation/Reservation';
import Login from './components/pages/login/Login';

function App() {
  return (
    <>
    <div className='headerContainer'>
      <Header />
      <Nav />
    </div>
    <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/order' element={<Order />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/reservation' element={<Reservation />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
