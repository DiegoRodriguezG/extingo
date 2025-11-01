/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the person contacting
      - `email` (text) - Email address for contact
      - `phone` (text) - Phone number
      - `company` (text, nullable) - Company or organization name
      - `message` (text) - Message content from the contact form
      - `service` (text) - Type of service interested in
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anyone to insert submissions (public form)
    - Add policy for authenticated admin users to read submissions

  3. Notes
    - This table stores all contact form submissions from the EXTINGO website
    - Public users can submit (insert) but cannot read submissions
    - Only authenticated users (admins) can view submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text DEFAULT '',
  message text NOT NULL,
  service text NOT NULL DEFAULT 'general',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
