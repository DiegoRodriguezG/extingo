import { Award, CheckCircle, Shield, FileCheck } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: 'NCH 1432/4',
    description: 'Cumplimiento total con la normativa chilena de prevención de incendios'
  },
  {
    icon: Shield,
    title: 'Certificación SEC',
    description: 'Superintendencia de Electricidad y Combustibles de Chile'
  },
  {
    icon: FileCheck,
    title: 'ISO 9001',
    description: 'Sistema de gestión de calidad certificado internacionalmente'
  },
  {
    icon: CheckCircle,
    title: 'Técnicos Acreditados',
    description: 'Personal capacitado y certificado por organismos oficiales'
  }
];

export default function Certifications() {
  return (
    <section id="certificaciones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certificaciones y Acreditaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respaldados por las principales instituciones de seguridad en Chile
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-50 to-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition"
            >
              <cert.icon className="h-16 w-16 text-red-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {cert.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-red-700 text-white rounded-2xl p-12 text-center">
          <Shield className="h-20 w-20 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Garantía de Calidad y Cumplimiento
          </h3>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Todos nuestros servicios cumplen estrictamente con las normativas chilenas vigentes.
            Entregamos certificados oficiales que respaldan cada trabajo realizado, garantizando
            la tranquilidad y seguridad de nuestros clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm">Certificado</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <p className="text-2xl font-bold">30+</p>
              <p className="text-sm">Años</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <p className="text-2xl font-bold">1000+</p>
              <p className="text-sm">Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
