# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern barber shop website built with **React 19** and **Vite 7** as a Single Page Application (SPA). The project is **optimized** for performance with lazy loading, code splitting, and service worker caching. It uses EmailJS for frontend-only appointment booking without requiring a backend server.

## Development Commands

### Core Commands
- `npm run dev` - Start development server with HMR on default port
- `npm run build` - Build for production with optimized bundles
- `npm run preview` - Preview production build locally on port 4173
- `npm run lint` - Run ESLint to check code quality

### Environment Setup
- Copy `env.example` to `.env` and configure EmailJS credentials:
  ```
  VITE_EMAILJS_SERVICE_ID=your_service_id
  VITE_EMAILJS_TEMPLATE_ID=your_template_id
  VITE_EMAILJS_PUBLIC_KEY=your_public_key
  ```

## Architecture & Code Structure

### Component Architecture
- **SPA with Component-Based Design**: All components are functional React components using hooks
- **Lazy Loading Implementation**: Components are lazy-loaded using `React.lazy()` and `Suspense` for optimal performance
- **Single File Components**: Each component includes its styles inline for better encapsulation

### Performance Optimizations
- **Code Splitting**: Manual chunk splitting in `vite.config.js` separates vendor libraries (React/React-DOM) and icons
- **Service Worker**: Registered in `main.jsx` for caching and offline functionality
- **Image Preloading**: Critical images are preloaded on app initialization
- **Lazy Loading**: All major sections lazy-load with custom loading spinner

### Key Components Structure
```
src/components/
├── Header.jsx       - Navigation with smooth scroll
├── Hero.jsx         - Landing section with background image
├── About.jsx        - About section
├── Services.jsx     - 17 barbering services with pricing
├── Gallery.jsx      - Image showcase
├── Pricing.jsx      - Service packages
├── Appointment.jsx  - EmailJS booking form
├── Testimonials.jsx - Customer testimonials
├── Contact.jsx      - Contact information
└── Footer.jsx       - Footer with social links
```

### State Management
- **Local Component State**: Uses `useState` for form handling and loading states
- **No Global State**: Simple architecture without Redux/Context - appropriate for this scale
- **EmailJS Integration**: Form submissions handled directly with EmailJS service

### Styling Approach
- **Inline Styles**: Primarily uses inline styles for component-specific styling
- **Responsive Design**: CSS-in-JS with media queries embedded in components
- **Design System**: Consistent color scheme using gold accent (`#D19D64`) and dark theme (`#181818`)

## EmailJS Integration

### Configuration
- Service configured to send appointment requests directly from frontend
- Template includes customer details, service selection, and appointment preferences
- Environment variables used for secure credential management

### Email Flow
1. Customer fills appointment form in `Appointment.jsx`
2. Form data sent via EmailJS to configured email
3. Success/error feedback shown to user
4. No backend server required

## Build Configuration

### Vite Optimizations
- **Manual Chunking**: Vendor libraries and icons separated for better caching
- **ESBuild Minification**: Fast minification for production builds
- **Dependency Pre-bundling**: React ecosystem pre-optimized
- **HMR Optimization**: Fast refresh in development

### Bundle Strategy
- Main app code in primary chunk
- React/React-DOM in vendor chunk
- React-icons in separate chunk
- Assets optimized and copied to dist

## Development Guidelines

### Component Development
- Use functional components with hooks
- Implement lazy loading for new major sections
- Include responsive design considerations
- Maintain consistent gold/dark color scheme

### Performance Considerations
- Add new images to preloading list if critical
- Use lazy loading for non-critical components
- Test loading states with slow 3G throttling
- Verify service worker caching works correctly

### Styling Standards
- Use inline styles for component-specific CSS
- Implement responsive breakpoints: 700px, 420px
- Maintain design consistency with existing components
- Use CSS-in-JS for complex responsive patterns

## Service & Pricing Structure

The application features 17 barbering services ranging from $10-$55, organized in three categories:
- Basic services (haircuts, trims, washes)
- Specialty services (fades, coloring, styling)
- Premium packages (complete grooming)

Services data is centralized in `Services.jsx` and referenced in `Appointment.jsx` for booking.

**Always check the correctness of AI-generated responses.**