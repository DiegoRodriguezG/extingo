import { Helmet } from 'react-helmet-async';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.extingo.cl/#organization",
    "name": "EXTINGO",
    "description": "Empresa familiar con más de 30 años de experiencia en venta, recarga y mantención de extintores en Chile. Servicios certificados para empresas y hogares.",
    "url": "https://www.extingo.cl",
    "logo": "https://www.extingo.cl/logo.png",
    "image": "https://www.extingo.cl/og-image.jpg",
    "telephone": "+56912345678",
    "email": "contacto@extingo.cl",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CL",
      "addressLocality": "Chile"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "CL"
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/extingo",
      "https://www.instagram.com/extingo"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.extingo.cl/#product",
    "name": "Extintores en Chile",
    "description": "Venta de extintores certificados: PQS, CO2, HCFC, agua y espuma. Incluye servicio de recarga y mantención.",
    "brand": {
      "@type": "Brand",
      "name": "EXTINGO"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "CLP",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "EXTINGO"
      }
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.extingo.cl/#service",
    "serviceType": "Venta, Recarga y Mantención de Extintores",
    "provider": {
      "@type": "LocalBusiness",
      "name": "EXTINGO"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Chile"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Extintores",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Venta de Extintores"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Recarga de Extintores"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mantención de Extintores"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.extingo.cl/#website",
    "url": "https://www.extingo.cl",
    "name": "EXTINGO",
    "description": "Venta, Recarga y Mantención de Extintores en Chile",
    "publisher": {
      "@type": "Organization",
      "name": "EXTINGO"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.extingo.cl/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.extingo.cl"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Productos",
        "item": "https://www.extingo.cl/#productos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Servicios",
        "item": "https://www.extingo.cl/#servicios"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contacto",
        "item": "https://www.extingo.cl/#contacto"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}
