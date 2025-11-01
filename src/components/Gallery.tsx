import { Truck, Building2, Factory, Home } from 'lucide-react';

const projects = [
  {
    icon: Building2,
    title: 'Edificios Corporativos',
    description: 'Mantención completa de sistemas contra incendios en torres de oficinas',
    stats: '50+ edificios atendidos'
  },
  {
    icon: Factory,
    title: 'Industrias y Bodegas',
    description: 'Protección integral para plantas industriales y centros logísticos',
    stats: '100+ instalaciones'
  },
  {
    icon: Home,
    title: 'Condominios y Comunidades',
    description: 'Servicios periódicos para conjuntos residenciales',
    stats: '200+ comunidades'
  },
  {
    icon: Truck,
    title: 'Servicio Móvil',
    description: 'Flota equipada para atención en terreno en toda la región',
    stats: 'Cobertura completa'
  }
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyectos y Experiencia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protegiendo empresas y comunidades en toda la región
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="bg-gradient-to-br from-red-700 to-red-900 p-8 text-white">
                <project.icon className="h-16 w-16 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-100 mb-4">{project.description}</p>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                  <p className="font-semibold">{project.stats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestro Compromiso con la Calidad
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cada proyecto es tratado con la máxima profesionalidad, desde la evaluación
              inicial hasta la entrega de certificaciones finales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="text-4xl font-bold text-red-700 mb-2">1</div>
              <h4 className="font-bold text-gray-900 mb-2">Evaluación</h4>
              <p className="text-gray-600 text-sm">Análisis técnico de necesidades</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="text-4xl font-bold text-red-700 mb-2">2</div>
              <h4 className="font-bold text-gray-900 mb-2">Ejecución</h4>
              <p className="text-gray-600 text-sm">Trabajo profesional certificado</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="text-4xl font-bold text-red-700 mb-2">3</div>
              <h4 className="font-bold text-gray-900 mb-2">Seguimiento</h4>
              <p className="text-gray-600 text-sm">Soporte continuo y mantención</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
