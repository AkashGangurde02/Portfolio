# Portfolio Website

A modern portfolio website built with React and Vite, featuring a clean, minimalist design.

## Features

- **Responsive Design** - Works seamlessly on all devices
- **Modern UI** - Clean and professional design inspired by contemporary portfolio trends
- **Component-Based** - Organized structure with reusable components
- **Fast Performance** - Built with Vite for lightning-fast development and builds

## Project Structure

```
portfolio/
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── HeroSection.jsx
│   │   ├── HeroSection.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── images/          # Image assets
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/              # Static assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at [http://localhost:5173/](http://localhost:5173/)

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Components

- **Navbar** - Fixed navigation with logo and menu buttons
- **HeroSection** - Main hero section with title, description, social links, and CTA
- **Footer** - Simple footer component

## Customization

To customize the portfolio:

1. Update text content in the component files
2. Add your images to the `src/images/` folder
3. Modify colors and styles in the CSS files
4. Add more sections by creating new components

## Technologies Used

- React 18
- Vite
- CSS3

## License

This project is open source and available under the MIT License.
