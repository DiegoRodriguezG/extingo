import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'general'
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
            service: formData.service
          }
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'general'
      });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Hubo un error al enviar el formulario. Por favor intente nuevamente.');
      console.error('Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos listos para proteger tu seguridad. Solicita tu cotización hoy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-red-700 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Teléfono</h4>
                  <p className="text-gray-600">+56 9 1234 5678</p>
                  <p className="text-gray-600">+56 2 2345 6789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-red-700 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">contacto@extingo.cl</p>
                  <p className="text-gray-600">ventas@extingo.cl</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-red-700 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Dirección</h4>
                  <p className="text-gray-600">Santiago, Región Metropolitana</p>
                  <p className="text-gray-600">Chile</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-red-700 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Horario</h4>
                  <p className="text-gray-600">Lunes a Viernes: 8:00 - 18:00</p>
                  <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                  <p className="text-red-700 font-semibold mt-2">Emergencias: 24/7</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-red-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">¿Por qué elegirnos?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-red-700 rounded-full mr-3"></span>
                  Respuesta rápida a consultas
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-red-700 rounded-full mr-3"></span>
                  Cotizaciones sin compromiso
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-red-700 rounded-full mr-3"></span>
                  Asesoría técnica profesional
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-red-700 rounded-full mr-3"></span>
                  Garantía en todos los servicios
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicita tu Cotización
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Empresa / Organización
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Servicio de interés *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent"
                >
                  <option value="general">Consulta general</option>
                  <option value="venta">Venta de extintores</option>
                  <option value="recarga">Recarga de extintores</option>
                  <option value="mantencion">Mantención</option>
                  <option value="senaleticas">Señaléticas</option>
                  <option value="capacitacion">Capacitación</option>
                  <option value="kits">Kits de seguridad</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent"
                  placeholder="Cuéntanos sobre tu necesidad..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  ¡Mensaje enviado exitosamente! Nos contactaremos pronto.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-red-700 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-red-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Enviar consulta
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
