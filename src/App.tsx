import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Gallery from './components/Gallery';
import Products from './components/Products';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SEO from './components/SEO';
import StructuredData from './components/StructuredData';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartVersion, setCartVersion] = useState(0);

  const handleCartUpdate = () => {
    setCartVersion(prev => prev + 1);
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen">
      <SEO />
      <StructuredData />
      <Navbar onCartClick={handleOpenCart} cartVersion={cartVersion} />
      <Hero />
      <About />
      <Services />
      <Products onCartUpdate={handleCartUpdate} />
      <Certifications />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartVersion={cartVersion} />
    </div>
  );
}

export default App;
