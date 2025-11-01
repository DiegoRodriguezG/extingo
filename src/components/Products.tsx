import { useState, useEffect } from 'react';
import { ShoppingCart, Filter } from 'lucide-react';
import { Product } from '../types/product';
import { getAllProducts, formatPrice } from '../utils/products';
import { addToCart } from '../utils/cart';

interface ProductsProps {
  onCartUpdate: () => void;
}

export default function Products({ onCartUpdate }: ProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [addingToCart, setAddingToCart] = useState<string | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const data = await getAllProducts();
    setProducts(data);
    setLoading(false);
  };

  const categories = [
    { id: 'todos', label: 'Todos los Productos' },
    { id: 'extintores', label: 'Extintores' },
    { id: 'kits', label: 'Kits de Seguridad' },
    { id: 'senaleticas', label: 'Señaléticas' },
    { id: 'servicios', label: 'Servicios' }
  ];

  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    setAddingToCart(product.id);
    addToCart(product, 1);
    onCartUpdate();

    setTimeout(() => {
      setAddingToCart(null);
    }, 1000);
  };

  if (loading) {
    return (
      <section id="productos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-gray-600">Cargando productos...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Productos de calidad certificada para tu seguridad
          </p>
        </div>

        <div className="mb-8 flex items-center justify-center gap-3 flex-wrap">
          <Filter className="h-5 w-5 text-gray-600" />
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                selectedCategory === category.id
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No hay productos disponibles en esta categoría</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                  {product.stock <= 10 && product.stock > 0 && (
                    <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Últimas unidades
                    </div>
                  )}
                  {product.stock === 0 && (
                    <div className="absolute top-3 right-3 bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Agotado
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-red-700 uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-red-700">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-sm text-gray-500">
                      Stock: {product.stock}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0 || addingToCart === product.id}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition ${
                      product.stock === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : addingToCart === product.id
                        ? 'bg-green-600 text-white'
                        : 'bg-red-700 text-white hover:bg-red-800'
                    }`}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {addingToCart === product.id ? 'Agregado' : 'Añadir al carro'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
