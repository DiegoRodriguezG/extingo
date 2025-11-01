import { ShoppingCart, RefreshCw, Wrench, SignpostBig, GraduationCap, Package } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'Venta de Extintores',
    description: 'Amplia variedad de extintores certificados para todo tipo de necesidades: hogar, empresa, vehículos e industria.',
    features: ['PQS, CO2, Espuma', 'Todas las capacidades', 'Entrega inmediata']
  },
  {
    icon: RefreshCw,
    title: 'Recarga de Extintores',
    description: 'Servicio certificado de recarga con agentes extintores de primera calidad y tecnología actualizada.',
    features: ['Servicio en terreno', 'Certificación incluida', 'Garantía de calidad']
  },
  {
    icon: Wrench,
    title: 'Mantención Integral',
    description: 'Mantención preventiva y correctiva completa según normativa chilena NCH 1432/4.',
    features: ['Inspección técnica', 'Cambio de piezas', 'Certificado oficial']
  },
  {
    icon: SignpostBig,
    title: 'Señaléticas',
    description: 'Señalización de seguridad contra incendios, evacuación y equipos de emergencia.',
    features: ['Normativa chilena', 'Materiales duraderos', 'Instalación incluida']
  },
  {
    icon: GraduationCap,
    title: 'Capacitación',
    description: 'Cursos y talleres prácticos sobre uso de extintores y prevención de incendios.',
    features: ['Certificado oficial', 'Práctica real', 'Para empresas']
  },
  {
    icon: Package,
    title: 'Kits de Seguridad',
    description: 'Paquetes completos de equipamiento para emergencias y primeros auxilios.',
    features: ['Todo incluido', 'Personalizables', 'Para oficinas y hogares']
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales en seguridad y prevención de incendios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <service.icon className="h-14 w-14 text-red-700 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-red-700 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-block bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-800 transition transform hover:scale-105 shadow-lg"
          >
            Solicitar un servicio
          </a>
        </div>
      </div>
    </section>
  );
}
