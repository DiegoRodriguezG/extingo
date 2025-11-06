import { Shield, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-10 w-10 text-red-700" />
              <div>
                <h3 className="text-xl font-bold">EXTINGO</h3>
                <p className="text-xs text-gray-400">Seguridad y Prevención</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Más de 30 años protegiendo a empresas y familias en Chile con compromiso,
              experiencia y confianza.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">Venta de Extintores</li>
              <li className="hover:text-white transition cursor-pointer">Recarga</li>
              <li className="hover:text-white transition cursor-pointer">Mantención</li>
              <li className="hover:text-white transition cursor-pointer">Señaléticas</li>
              <li className="hover:text-white transition cursor-pointer">Capacitación</li>
              <li className="hover:text-white transition cursor-pointer">Kits de Seguridad</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-700" />
                +56 9 3253 5809
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-700" />
                contacto@extingo.cl
              </li>
              <li className="text-gray-400">
                Santiago, Región Metropolitana<br />Chile
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-red-700 transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-red-700 transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-red-700 transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Síguenos en redes sociales para conocer nuestras novedades y consejos de seguridad.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} EXTINGO.cl - Todos los derechos reservados</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
