// Generate Property Schema
export const generatePropertySchema = (property) => {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": property.title,
    "description": `${property.title} - A beautiful ${property.type.toLowerCase()} located in ${property.location}. Features ${property.beds} bedrooms and ${property.baths} bathrooms.`,
    "url": `https://sorrelproperties.com/property/${property.id}`,
    "image": property.image,
    "datePosted": new Date().toISOString(),
    "price": property.price,
    "priceCurrency": "KES",
    "priceValidUntil": "2026-12-31",
    "availability": property.status === "For Sale" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": property.location.split(',')[0],
      "addressRegion": "Nairobi",
      "addressCountry": "KE"
    },
    "numberOfRooms": property.beds,
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": property.sqft,
      "unitCode": "SQF"
    },
    "accommodationCategory": property.type,
    "agent": {
      "@type": "RealEstateAgent",
      "name": "Sorrel Properties",
      "telephone": "+254787855213",
      "email": "info.sorrelproperties@gmail.com",
      "url": "https://sorrelproperties.com"
    }
  };
};

// Generate FAQ Schema
export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate Breadcrumb Schema
export const generateBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://sorrelproperties.com${item.url}`
    }))
  };
};

// Generate Local Business Schema
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Sorrel Properties",
    "image": "https://sorrelproperties.com/sorrel-logo.png",
    "@id": "https://sorrelproperties.com",
    "url": "https://sorrelproperties.com",
    "telephone": "+254787855213",
    "email": "info.sorrelproperties@gmail.com",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nairobi",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "postalCode": "00100",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.2921,
      "longitude": 36.8219
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://facebook.com/sorrelproperties",
      "https://instagram.com/sorrelproperties"
    ]
  };
};