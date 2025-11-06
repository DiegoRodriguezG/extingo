import { useState, useEffect } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { CartItem } from '../types/product';
import { getCart, updateCartItemQuantity, removeFromCart, clearCart, getCartTotal, getCartItemCount } from '../utils/cart';
import { formatPrice } from '../utils/products';
import CheckoutModal from './CheckoutModal';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartVersion: number;
}

export default function Cart({ isOpen, onClose, cartVersion }: CartProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    setCart(getCart());
  }, [cartVersion, isOpen]);

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    const updatedCart = updateCartItemQuantity(productId, newQuantity);
    setCart(updatedCart);
  };

  const handleRemoveItem = (productId: string) => {
    const updatedCart = removeFromCart(productId);
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    if (confirm('¿Estás seguro de que deseas vaciar el carro?')) {
      clearCart();
      setCart([]);
    }
  };

  const handleOrderComplete = () => {
    clearCart();
    setCart([]);
    setIsCheckoutOpen(false);
    onClose();
  };

  const total = getCartTotal(cart);
  const itemCount = getCartItemCount(cart);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      <div className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-white shadow-2xl z-50 flex flex-col">
        <div className="bg-red-700 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">Mi Carro</h2>
              <p className="text-sm text-gray-100">
                {itemCount} {itemCount === 1 ? 'artículo' : 'artículos'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-red-800 p-2 rounded-lg transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="h-24 w-24 text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Tu carro está vacío
              </h3>
              <p className="text-gray-600 mb-6">
                Agrega productos para comenzar tu compra
              </p>
              <button
                onClick={onClose}
                className="bg-red-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-800 transition"
              >
                Ver productos
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div
                  key={item.product.id}
                  className="bg-gray-50 rounded-lg p-4 flex gap-4"
                >
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {formatPrice(item.product.price)}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center bg-white rounded-lg border border-gray-300">
                        <button
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 transition rounded-l-lg"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                          className="p-2 hover:bg-gray-100 transition rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemoveItem(item.product.id)}
                        className="p-2 text-red-700 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-lg text-gray-900">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}

              <button
                onClick={handleClearCart}
                className="w-full text-red-700 hover:bg-red-50 py-2 rounded-lg transition text-sm font-medium"
              >
                Vaciar carro
              </button>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t bg-white p-6 space-y-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total:</span>
              <span className="text-red-700">{formatPrice(total)}</span>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full bg-red-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-800 transition"
            >
              Proceder al pago
            </button>

            <button
              onClick={onClose}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Continuar comprando
            </button>
          </div>
        )}

        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          cart={cart}
          total={total}
          onOrderComplete={handleOrderComplete}
        />
      </div>
    </>
  );
}
