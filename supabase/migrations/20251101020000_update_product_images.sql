-- Update all product images to use the new URL
UPDATE products
SET image_url = 'https://salajoweb.s3.us-east-1.amazonaws.com/uploads/dish/photo/2/extintor.jpeg',
    updated_at = now();
