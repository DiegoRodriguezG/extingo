import { Product } from '../types/product';
import { products as productsData } from '../data/products';

export async function getAllProducts(): Promise<Product[]> {
  // Simular delay de API para mantener la experiencia similar
  await new Promise(resolve => setTimeout(resolve, 300));

  // Ordenar por categoría y nombre
  return [...productsData].sort((a, b) => {
    if (a.category === b.category) {
      return a.name.localeCompare(b.name);
    }
    return a.category.localeCompare(b.category);
  });
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  // Simular delay de API para mantener la experiencia similar
  await new Promise(resolve => setTimeout(resolve, 300));

  return productsData
    .filter(p => p.category === category)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  }).format(price);
}
