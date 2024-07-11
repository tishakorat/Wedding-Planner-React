import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Nav.css';
import Navbar from './components/Navbar';
import MainLayout from './MainLayout'; 
import Accommodation from './pages/Accommodation';
import Invitation from './pages/Invitation';
import Rsvp from './pages/Rsvp';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Candle from './pages/Candle';
import Hotel from './pages/Hotel';
import Food from './pages/Food';
import Bouquet from './pages/Bouquet';
import Decoration from './pages/Decoration';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout ';
import Service from './pages/Service';
import WeddingRegistry from './pages/WeddingRegistry ';
import LatestNews from './pages/LatestNews ';
import Portfolio from './pages/Portfolio';
import Ourplaner from './pages/Ourplaner';
import WeddingB from './pages/Bridesmaids';
import WeddingG from './pages/Groomsmen';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<MainLayout />}/>
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="invitation" element={<Invitation />} />
          <Route path="rsvp" element={<Rsvp />} />
          {/* Pages  */}
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="candles" element={<Candle />} />
          <Route path="hotels" element={<Hotel />} />
          <Route path="food" element={<Food />} />
          <Route path="bouquets" element={<Bouquet />} />
          <Route path="decoration" element={<Decoration />} />

          {/* {shop} */}
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />

          {/* {service} */}
          <Route path="service" element={<Service />} />
          <Route path="wedding-registry" element={<WeddingRegistry />} />

          {/* blog */}
          <Route path="latest-news" element={<LatestNews />} />
          <Route path="portfolio" element={<Portfolio />} />

          {/* team */}
          <Route path="our-planners" element={<Ourplaner />} />
          <Route path="groomsmen" element={<WeddingG />} />
          <Route path="bridesmaids" element={<WeddingB />} />

          {/* contact */}
          <Route path="contact" element={<Contact />} />
      </Routes>
    <Footer/>

    </BrowserRouter>

  );
}

export default App;
