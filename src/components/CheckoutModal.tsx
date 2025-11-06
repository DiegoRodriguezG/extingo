import { useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { CartItem } from '../types/product';
import { formatPrice } from '../utils/products';
import { EMAILJS_CONFIG, RECIPIENT_EMAIL, DEMO_MODE } from '../config/emailjs';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  total: number;
  onOrderComplete: () => void;
}

export default function CheckoutModal({ isOpen, onClose, cart, total, onOrderComplete }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    comments: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateOrderId = (): string => {
    return Math.floor(Math.random() * 0xfffff).toString(16).padStart(5, '0').toUpperCase();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Generate unique order ID
      const orderId = generateOrderId();

      // Format order summary
      const orderSummary = cart.map(item =>
        `${item.product.name} - Cantidad: ${item.quantity} - Precio: ${formatPrice(item.product.price)} - Subtotal: ${formatPrice(item.product.price * item.quantity)}`
      ).join('\n');

      if (DEMO_MODE) {
        // Simulate email send in demo mode
        console.log('DEMO MODE: Order email would be sent with data:', {
          orderId,
          formData,
          cart,
          total
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } else {
        // Prepare email template parameters using kailikaili variable names
        const templateParams = {
          to_email: RECIPIENT_EMAIL,
          order_id: orderId,
          user_name: formData.fullName,
          user_email: formData.email,
          user_phone: formData.phone,
          user_comments: `${formData.address ? 'Dirección: ' + formData.address + '\n' : ''}${formData.comments || 'Sin comentarios adicionales'}`,
          order_summary: orderSummary,
          total_amount: formatPrice(total),
          order_date: new Date().toLocaleString('es-CL')
        };

        // Send email via EmailJS
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.ORDER_TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
      }

      // Show success status
      setStatus('success');

      // Wait 2 seconds, then complete order
      setTimeout(() => {
        onOrderComplete();
        setStatus('idle');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          comments: ''
        });
        onClose();
      }, 2000);

    } catch (error) {
      setStatus('error');
      setErrorMessage('Hubo un error al procesar tu orden. Por favor intenta nuevamente.');
      console.error('Error sending order:', error);

      // Reset to idle after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={() => status !== 'sending' && onClose()}
      ></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {status === 'success' ? (
            <div className="p-8 text-center">
              <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                ¡Orden Recibida!
              </h2>
              <p className="text-gray-600 text-lg">
                Nos pondremos en contacto contigo pronto para confirmar tu orden.
              </p>
            </div>
          ) : (
            <>
              <div className="bg-red-700 text-white p-6 flex items-center justify-between rounded-t-2xl">
                <h2 className="text-2xl font-bold">Finalizar Orden</h2>
                <button
                  onClick={onClose}
                  disabled={status === 'sending'}
                  className="hover:bg-red-800 p-2 rounded-lg transition disabled:opacity-50"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3">Resumen de tu orden</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    {cart.map(item => (
                      <div key={item.product.id} className="flex justify-between text-sm">
                        <span className="text-gray-700">
                          {item.product.name} x{item.quantity}
                        </span>
                        <span className="font-semibold">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                    <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-red-700">{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent disabled:bg-gray-100"
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
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent disabled:bg-gray-100"
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
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Dirección de entrega
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent disabled:bg-gray-100"
                      placeholder="Dirección completa (opcional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                      Comentarios adicionales
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent disabled:bg-gray-100"
                      placeholder="Instrucciones especiales, preguntas, etc. (opcional)"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      disabled={status === 'sending'}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="flex-1 bg-red-700 text-white py-3 rounded-lg font-bold hover:bg-red-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Enviando...' : 'Confirmar Orden'}
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
