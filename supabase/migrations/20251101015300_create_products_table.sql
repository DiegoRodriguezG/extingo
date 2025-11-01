/*
  # Create products table

  1. New Tables
    - `products`
      - `id` (uuid, primary key) - Unique identifier for each product
      - `name` (text) - Product name
      - `description` (text) - Product description
      - `price` (numeric) - Product price in Chilean pesos
      - `image_url` (text) - URL to product image
      - `category` (text) - Product category (extintores, kits, senaleticas, etc.)
      - `stock` (integer) - Available stock quantity
      - `created_at` (timestamptz) - Timestamp of creation
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access (anyone can view products)
    - Add policy for authenticated admin users to manage products

  3. Indexes
    - Add index on category for faster filtering
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric(10, 2) NOT NULL CHECK (price >= 0),
  image_url text NOT NULL,
  category text NOT NULL,
  stock integer NOT NULL DEFAULT 0 CHECK (stock >= 0),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products"
  ON products
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);

-- Insert sample products
INSERT INTO products (name, description, price, image_url, category, stock) VALUES
  ('Extintor PQS 6kg', 'Extintor de polvo químico seco de 6kg, ideal para hogares y oficinas. Certificado y con garantía.', 25990, 'https://images.pexels.com/photos/327504/pexels-photo-327504.jpeg?auto=compress&cs=tinysrgb&w=800', 'extintores', 50),
  ('Extintor PQS 10kg', 'Extintor de polvo químico seco de 10kg para uso industrial. Alta capacidad de extinción.', 45990, 'https://images.pexels.com/photos/327504/pexels-photo-327504.jpeg?auto=compress&cs=tinysrgb&w=800', 'extintores', 30),
  ('Extintor CO2 5kg', 'Extintor de dióxido de carbono de 5kg, ideal para equipos eléctricos y electrónicos.', 65990, 'https://images.pexels.com/photos/327504/pexels-photo-327504.jpeg?auto=compress&cs=tinysrgb&w=800', 'extintores', 25),
  ('Kit Seguridad Básico', 'Kit de seguridad que incluye extintor 6kg, señalética y guantes de protección.', 35990, 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=800', 'kits', 40),
  ('Kit Seguridad Premium', 'Kit completo con extintor 10kg, señalética, linterna, botiquín y manta ignífuga.', 89990, 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=800', 'kits', 20),
  ('Señalética Extintor', 'Señalética fotoluminiscente de ubicación de extintor. Normativa chilena.', 3990, 'https://images.pexels.com/photos/618021/pexels-photo-618021.jpeg?auto=compress&cs=tinysrgb&w=800', 'senaleticas', 100),
  ('Señalética Salida Emergencia', 'Cartel de salida de emergencia fotoluminiscente. Material duradero.', 5990, 'https://images.pexels.com/photos/618021/pexels-photo-618021.jpeg?auto=compress&cs=tinysrgb&w=800', 'senaleticas', 80),
  ('Recarga Extintor PQS 6kg', 'Servicio de recarga para extintor de polvo químico seco de 6kg con certificación.', 12990, 'https://images.pexels.com/photos/4506270/pexels-photo-4506270.jpeg?auto=compress&cs=tinysrgb&w=800', 'servicios', 999);
