import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonical?: string;
}

export default function SEO({
  title = 'EXTINGO - Venta, Recarga y Mantención de Extintores en Chile',
  description = 'EXTINGO: Empresa familiar con más de 30 años de experiencia en venta, recarga y mantención de extintores en Chile. Servicios certificados para empresas y hogares. Ofrecemos extintores PQS, CO2, HCFC, agua y espuma.',
  keywords = 'extintores, extintores chile, recarga extintores, mantención extintores, venta extintores, extintores certificados, extintores PQS, extintores CO2, extintores empresas, seguridad contra incendios, equipos contra incendios, prevención incendios, extintor polvo químico, extintor dióxido carbono',
  ogType = 'website',
  ogImage = 'https://vztmahuiifcvnkpsmpha.supabase.co/storage/v1/object/public/images/extingo-og-image.jpg',
  ogUrl = 'https://www.extingo.cl',
  twitterCard = 'summary_large_image',
  canonical = 'https://www.extingo.cl'
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="es-CL" />
      <html lang="es-CL" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="es_CL" />
      <meta property="og:site_name" content="EXTINGO" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="EXTINGO" />

      {/* Geographic Tags */}
      <meta name="geo.region" content="CL" />
      <meta name="geo.placename" content="Chile" />

      {/* Business Information */}
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
}
