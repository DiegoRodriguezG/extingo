import { Heart, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre EXTINGO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresa familiar con más de 30 años protegiendo lo que más importa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-red-700 mb-4">Nuestra Misión</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              En EXTINGO, protegemos a personas, empresas y comunidades mediante soluciones
              integrales en venta, recarga y mantención de extintores y sistemas de seguridad
              contra incendios. Como empresa familiar con más de 30 años de experiencia,
              ofrecemos un servicio rápido, confiable y certificado, combinando tecnología,
              conocimiento técnico y atención personalizada para garantizar la seguridad y
              el cumplimiento normativo de cada cliente.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Consolidarnos como una marca líder en prevención y seguridad contra incendios
              en Chile, reconocida por su excelencia técnica, compromiso y atención cercana,
              siendo el aliado estratégico de empresas y hogares que buscan protección,
              cumplimiento y confianza en cada servicio.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50">
            <Heart className="h-12 w-12 text-red-700 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Compromiso Total</h4>
            <p className="text-gray-300">
              Atención personalizada y cumplimiento de plazos garantizado
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50">
            <Award className="h-12 w-12 text-red-700 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Experiencia Comprobada</h4>
            <p className="text-gray-300">
              Más de 30 años en seguridad y prevención de incendios
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50">
            <Users className="h-12 w-12 text-red-700 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Confianza y Respaldo</h4>
            <p className="text-gray-300">
              Servicios certificados con garantía de calidad
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50">
            <TrendingUp className="h-12 w-12 text-red-700 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Innovación Digital</h4>
            <p className="text-gray-300">
              Tecnología moderna para un servicio eficiente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
