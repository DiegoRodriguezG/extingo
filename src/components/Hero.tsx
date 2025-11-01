import { Shield, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white pt-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Shield className="h-24 w-24 mx-auto mb-6 animate-pulse" />

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Tu seguridad,<br />nuestra experiencia
        </h1>

        <p className="text-xl md:text-2xl mb-4 text-gray-100 max-w-3xl mx-auto">
          Más de 30 años protegiendo a empresas y familias en Chile
        </p>

        <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
          Venta, recarga y mantención certificada de extintores y sistemas de seguridad
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-xl"
          >
            Cotiza con nosotros
          </button>

          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition transform hover:scale-105 shadow-xl flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            WhatsApp directo
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-3xl font-bold mb-2">30+</h3>
            <p className="text-gray-200">Años de experiencia</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-3xl font-bold mb-2">100%</h3>
            <p className="text-gray-200">Certificado y garantizado</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-3xl font-bold mb-2">24/7</h3>
            <p className="text-gray-200">Atención disponible</p>
          </div>
        </div>
      </div>
    </section>
  );
}
