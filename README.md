# Sorrel Properties - Real Estate Website

A modern, responsive real estate website built with React and Vite. Features a beautiful design, property listings, search functionality, and contact forms.

![Real Estate Website](https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)

## ✨ Features

- 🏠 **Modern Design** - Clean, contemporary UI with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🏘️ **Property Listings** - Browse properties with detailed information
- 🔍 **Search & Filter** - Find properties by location and type
- 📄 **Property Details** - Comprehensive property pages with contact forms
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎨 **Beautiful Animations** - Smooth transitions and hover effects

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project:**
   ```bash
   cd real-estate-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
real-estate-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Navigation.jsx # Navigation bar
│   │   ├── PropertyCard.jsx # Property card component
│   │   ├── Features.jsx   # Features section
│   │   └── Footer.jsx     # Footer component
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Home page
│   │   ├── Properties.jsx # Properties listing page
│   │   ├── PropertyDetail.jsx # Property detail page
│   │   ├── About.jsx      # About page
│   │   └── Contact.jsx    # Contact page
│   ├── data/              # Data files
│   │   └── properties.js  # Property data
│   ├── styles/            # Global styles
│   │   └── global.css     # Global CSS variables
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🛠️ Built With

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **CSS3** - Styling with CSS variables and animations

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

### Adding New Properties

Edit `src/data/properties.js` to add or modify property listings:

```javascript
{
  id: 7,
  title: "Your Property Name",
  location: "City, State",
  price: 500000,
  beds: 3,
  baths: 2,
  sqft: 2000,
  type: "House",
  image: "https://your-image-url.com/image.jpg",
  featured: true,
  status: "For Sale"
}
```

### Changing Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --accent-color: #f59e0b;
  --dark-color: #1e293b;
  --light-color: #f8fafc;
  --gray-color: #64748b;
}
```

## 🌐 Pages

- **Home** (`/`) - Hero section, featured properties, features, CTA
- **Properties** (`/properties`) - All property listings with search/filter
- **Property Detail** (`/property/:id`) - Individual property details
- **About** (`/about`) - Company information, mission, team
- **Contact** (`/contact`) - Contact form and information

## 📱 Responsive Breakpoints

- **Desktop**: 1280px+
- **Tablet**: 768px - 1279px
- **Mobile**: < 768px

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. Pull requests are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

For questions or support, please contact us at info@modernestate.com

---

Built with ❤️ by Sorrel Properties Team