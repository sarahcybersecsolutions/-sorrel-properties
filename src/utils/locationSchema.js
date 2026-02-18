// Location-specific schemas for Nairobi neighborhoods
export const locationSchemas = {
  westlands: {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Sorrel Properties - Westlands",
    "description": "Premium apartments for sale in Westlands, Nairobi. Luxury 1, 2, 3 bedroom apartments in the heart of Nairobi's business district.",
    "areaServed": {
      "@type": "City",
      "name": "Westlands",
      "containedInPlace": {
        "@type": "City",
        "name": "Nairobi",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "KE"
        }
      }
    },
    "keywords": "apartments for sale westlands, westlands nairobi real estate, luxury apartments westlands, property for sale westlands nairobi, westlands apartments",
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Residence",
        "name": "Apartments in Westlands",
        "description": "Modern apartments with amenities"
      },
      "areaServed": "Westlands, Nairobi"
    }
  },
  
  riverside: {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Sorrel Properties - Riverside",
    "description": "Exclusive apartments for sale in Riverside, Nairobi. Riverside living with stunning views and world-class amenities.",
    "areaServed": {
      "@type": "City",
      "name": "Riverside",
      "containedInPlace": {
        "@type": "City",
        "name": "Nairobi"
      }
    },
    "keywords": "apartments for sale riverside nairobi, riverside properties, luxury apartments riverside, riverside drive apartments, nairobi riverside real estate"
  },
  
  kilimani: {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Sorrel Properties - Kilimani",
    "description": "Luxury apartments and homes for sale in Kilimani, Nairobi. The most prestigious address with Yaya Centre, schools, and hospitals nearby.",
    "areaServed": {
      "@type": "City",
      "name": "Kilimani",
      "containedInPlace": {
        "@type": "City",
        "name": "Nairobi"
      }
    },
    "keywords": "apartments for sale kilimani, kilimani real estate, luxury homes kilimani, kilimani nairobi properties, houses for sale kilimani"
  },
  
  kileleshwa: {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Sorrel Properties - Kileleshwa",
    "description": "Beautiful apartments and family homes for sale in Kileleshwa, Nairobi. Serene neighborhood perfect for families with top schools nearby.",
    "areaServed": {
      "@type": "City",
      "name": "Kileleshwa",
      "containedInPlace": {
        "@type": "City",
        "name": "Nairobi"
      }
    },
    "keywords": "apartments for sale kileleshwa, kileleshwa houses, kileleshwa real estate, property kileleshwa nairobi, homes for sale kileleshwa"
  },
  
  lavington: {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Sorrel Properties - Lavington",
    "description": "Prestigious apartments and properties for sale in Lavington, Nairobi. Exclusive neighborhood with the best security and shopping at Lavington Mall.",
    "areaServed": {
      "@type": "City",
      "name": "Lavington",
      "containedInPlace": {
        "@type": "City",
        "name": "Nairobi"
      }
    },
    "keywords": "apartments for sale lavington, lavington nairobi properties, luxury apartments lavington, lavington real estate, houses for sale lavington"
  }
};

// Generate combined area schema
export const generateAreaSchema = (location) => {
  const locationKey = location.toLowerCase().replace(/\s+/g, '');
  return locationSchemas[locationKey] || locationSchemas.kilimani;
};

// SEO keywords for each location
export const locationKeywords = {
  westlands: [
    "apartments for sale westlands nairobi",
    "westlands real estate",
    "luxury apartments westlands",
    "property for sale westlands",
    "westlands nairobi apartments",
    "3 bedroom apartment westlands",
    "2 bedroom apartment westlands",
    "westlands office space for sale"
  ],
  riverside: [
    "apartments for sale riverside nairobi",
    "riverside drive apartments",
    "riverside nairobi real estate",
    "luxury apartments riverside",
    "riverside property for sale",
    "riverside nairobi apartments"
  ],
  kilimani: [
    "apartments for sale kilimani",
    "kilimani real estate",
    "kilimani nairobi properties",
    "luxury homes kilimani",
    "houses for sale kilimani",
    "kilimani apartments",
    "property for sale kilimani nairobi"
  ],
  kileleshwa: [
    "apartments for sale kileleshwa",
    "kileleshwa real estate",
    "kileleshwa houses for sale",
    "kileleshwa nairobi properties",
    "property kileleshwa",
    "homes for sale kileleshwa"
  ],
  lavington: [
    "apartments for sale lavington",
    "lavington nairobi real estate",
    "lavington properties for sale",
    "luxury apartments lavington",
    "lavington houses for sale",
    "lavington nairobi apartments"
  ]
};

// Generate meta description for location pages
export const generateLocationMeta = (location) => {
  const metas = {
    westlands: "Find premium apartments for sale in Westlands, Nairobi. Sorrel Properties offers luxury 1, 2 & 3 bedroom apartments in the heart of Nairobi's business district. Call +254 787 855213.",
    riverside: "Discover exclusive apartments for sale in Riverside, Nairobi. Luxury riverside living with stunning views. Sorrel Properties - your trusted real estate partner. Call +254 787 855213.",
    kilimani: "Luxury apartments and homes for sale in Kilimani, Nairobi. Nairobi's most prestigious neighborhood near Yaya Centre. View properties with Sorrel Properties. Call +254 787 855213.",
    kileleshwa: "Beautiful apartments and family homes for sale in Kileleshwa, Nairobi. Peaceful residential area with excellent schools. Sorrel Properties. Call +254 787 855213.",
    lavington: "Prestigious properties for sale in Lavington, Nairobi. Upscale neighborhood with excellent security. Luxury apartments and homes. Sorrel Properties. Call +254 787 855213."
  };
  
  return metas[location.toLowerCase()] || metas.kilimani;
};