import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Extintor PQS 6kg',
    description: 'Extintor de polvo químico seco de 6kg, ideal para hogares y oficinas. Certificado y con garantía.',
    price: 25990,
    image_url: 'https://salajoweb.s3.us-east-1.amazonaws.com/uploads/dish/photo/2/extintor.jpeg',
    category: 'extintores',
    stock: 50,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Extintor PQS 10kg',
    description: 'Extintor de polvo químico seco de 10kg para uso industrial. Alta capacidad de extinción.',
    price: 45990,
    image_url: 'https://salajoweb.s3.us-east-1.amazonaws.com/uploads/dish/photo/2/extintor.jpeg',
    category: 'extintores',
    stock: 30,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Extintor CO2 5kg',
    description: 'Extintor de dióxido de carbono de 5kg, ideal para equipos eléctricos y electrónicos.',
    price: 65990,
    image_url: 'https://salajoweb.s3.us-east-1.amazonaws.com/uploads/dish/photo/2/extintor.jpeg',
    category: 'extintores',
    stock: 25,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Kit Seguridad Básico',
    description: 'Kit de seguridad que incluye extintor 6kg, señalética y guantes de protección.',
    price: 35990,
    image_url: 'https://salajoweb.s3.us-east-1.amazonaws.com/uploads/dish/photo/2/extintor.jpeg',
    category: 'kits',
    stock: 40,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Kit Seguridad Premium',
    description: 'Kit completo con extintor 10kg, señalética, linterna, botiquín y manta ignífuga.',
    price: 89990,
    image_url: 'https://salajoweb.s3.us-east-1.amazonaws.com/uploads/dish/photo/2/extintor.jpeg',
    category: 'kits',
    stock: 20,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Señalética Extintor',
    description: 'Señalética fotoluminiscente de ubicación de extintor. Normativa chilena.',
    price: 3990,
    image_url: 'https://salajoweb.s3.us-east-1.amazonaws.com/uploads/dish/photo/2/extintor.jpeg',
    category: 'senaleticas',
    stock: 100,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '7',
    name: 'Señalética Salida Emergencia',
    description: 'Cartel de salida de emergencia fotoluminiscente. Material duradero.',
    price: 5990,
    image_url: 'https://salajoweb.s3.us-east-1.amazonaws.com/uploads/dish/photo/2/extintor.jpeg',
    category: 'senaleticas',
    stock: 80,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '8',
    name: 'Recarga Extintor PQS 6kg',
    description: 'Servicio de recarga para extintor de polvo químico seco de 6kg con certificación.',
    price: 12990,
    image_url: 'https://salajoweb.s3.us-east-1.amazonaws.com/uploads/dish/photo/2/extintor.jpeg',
    category: 'servicios',
    stock: 999,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];
