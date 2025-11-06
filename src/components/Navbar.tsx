import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { getCartItemCount, getCart } from '../utils/cart';
import logo from '../assets/logo.png';

interface NavbarProps {
  onCartClick: () => void;
  cartVersion: number;
}

export default function Navbar({ onCartClick, cartVersion }: NavbarProps) {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cart = getCart();
    setCartItemCount(getCartItemCount(cart));
  }, [cartVersion]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <img src={logo} alt="EXTINGO Logo" className="w-auto" style={{ height: '3rem' }} />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-red-500 font-medium transition">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-white hover:text-red-500 font-medium transition">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-white hover:text-red-500 font-medium transition">
              Servicios
            </button>
            <button onClick={() => scrollToSection('productos')} className="text-white hover:text-red-500 font-medium transition">
              Productos
            </button>
            <button onClick={() => scrollToSection('certificaciones')} className="text-white hover:text-red-500 font-medium transition">
              Certificaciones
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-white hover:text-red-500 font-medium transition">
              Galería
            </button>
            <button onClick={() => scrollToSection('contacto')} className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition font-medium">
              Contacto
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 text-white hover:text-red-500 transition"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-white"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-white hover:text-red-500 font-medium py-2">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left text-white hover:text-red-500 font-medium py-2">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left text-white hover:text-red-500 font-medium py-2">
              Servicios
            </button>
            <button onClick={() => scrollToSection('productos')} className="block w-full text-left text-white hover:text-red-500 font-medium py-2">
              Productos
            </button>
            <button onClick={() => scrollToSection('certificaciones')} className="block w-full text-left text-white hover:text-red-500 font-medium py-2">
              Certificaciones
            </button>
            <button onClick={() => scrollToSection('galeria')} className="block w-full text-left text-white hover:text-red-500 font-medium py-2">
              Galería
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800 transition font-medium text-center">
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
