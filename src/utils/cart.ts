import { CartItem, Product } from '../types/product';

const CART_COOKIE_NAME = 'extingo_cart';
const COOKIE_EXPIRY_DAYS = 7;

export function getCart(): CartItem[] {
  if (typeof document === 'undefined') return [];

  const cookies = document.cookie.split(';');
  const cartCookie = cookies.find(cookie => cookie.trim().startsWith(`${CART_COOKIE_NAME}=`));

  if (!cartCookie) return [];

  try {
    const cartData = cartCookie.split('=')[1];
    const decodedData = decodeURIComponent(cartData);
    return JSON.parse(decodedData);
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]): void {
  if (typeof document === 'undefined') return;

  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + COOKIE_EXPIRY_DAYS);

  const cartData = JSON.stringify(cart);
  const encodedData = encodeURIComponent(cartData);

  document.cookie = `${CART_COOKIE_NAME}=${encodedData}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
}

export function addToCart(product: Product, quantity: number = 1): CartItem[] {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(item => item.product.id === product.id);

  if (existingItemIndex >= 0) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }

  saveCart(cart);
  return cart;
}

export function removeFromCart(productId: string): CartItem[] {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.product.id !== productId);
  saveCart(updatedCart);
  return updatedCart;
}

export function updateCartItemQuantity(productId: string, quantity: number): CartItem[] {
  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.product.id === productId);

  if (itemIndex >= 0) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    cart[itemIndex].quantity = quantity;
    saveCart(cart);
  }

  return cart;
}

export function clearCart(): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${CART_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export function getCartTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}

export function getCartItemCount(cart: CartItem[]): number {
  return cart.reduce((count, item) => count + item.quantity, 0);
}
