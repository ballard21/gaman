# Gaman Consulting Website

## Overview

This is a full-stack web application for a business consulting company called "Gaman Consulting". The application features a modern, responsive design with a React frontend and Express backend. It's designed to showcase consulting services, team members, testimonials, and provide a professional online presence for the business.

The website replicates the Aploxn template design with exact color matching and uses the client's authentic Gaman Consulting logo throughout. The site is fully responsive and mobile-friendly with smooth scrolling navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 2025)

✓ **Logo Integration**: Integrated the authentic Gaman Consulting logo throughout the site (navigation and footer)
✓ **Color Scheme Update**: Updated to match exact Aploxn template colors - professional blue (#3B82F6) and vibrant orange (#FF6B35)
✓ **Complete Website Structure**: Built comprehensive website with hero, solution approach, about, services, portfolio, team, news, and contact sections
✓ **Responsive Design**: Fully mobile-friendly with smooth animations and transitions
✓ **Logo Size Enhancement**: Increased logo size to 72px (h-18) for better visibility and professional appearance
✓ **Header Banner Addition**: Added professional banner below navigation with company statistics and gradient background
✓ **User Satisfaction**: Client confirmed satisfaction with design and functionality improvements

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **Component System**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: Hot Module Replacement (HMR) with Vite integration

## Key Components

### Frontend Structure
- **Layout Components**: Navigation bar, Footer
- **Page Sections**: Hero, About, Services, Portfolio, Team, Testimonials, News, CTA
- **UI Components**: Comprehensive shadcn/ui component library
- **Custom Hooks**: Counter animation, intersection observer, mobile detection, toast notifications
- **Styling**: CSS variables for theming, responsive design patterns

### Backend Structure
- **Server**: Express application with middleware for logging and error handling
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Database Schema**: User management with Drizzle ORM
- **API Structure**: RESTful endpoints with `/api` prefix

### Database Schema
- **Users Table**: 
  - id (serial primary key)
  - username (unique text)
  - password (text)
- **Validation**: Zod schemas for type safety

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **API Layer**: Express routes handle requests and interact with storage layer
3. **Storage Layer**: Abstract interface allows switching between in-memory and database storage
4. **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
5. **Response**: JSON responses sent back to client for state updates

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, Radix UI components
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Forms**: React Hook Form with Zod validation
- **Utilities**: date-fns, class-variance-authority, clsx

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session**: connect-pg-simple
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin
- **Type Checking**: TypeScript
- **Code Quality**: ESLint configuration
- **Database**: Drizzle Kit for migrations

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` script

### Environment Configuration
- **Development**: Uses tsx for hot reloading, Vite dev server
- **Production**: Serves static files from Express, runs compiled JavaScript
- **Database**: Requires `DATABASE_URL` environment variable

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (recommended: Neon Database)
- Environment variables for database connection
- Static file serving capability

### Development Workflow
1. `npm run dev` - Start development server with HMR
2. `npm run build` - Build for production
3. `npm run start` - Start production server
4. `npm run db:push` - Apply database schema changes

The application is designed to be deployed on platforms like Vercel, Netlify, or traditional hosting providers with Node.js support.