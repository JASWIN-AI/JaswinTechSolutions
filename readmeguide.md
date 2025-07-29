# JASWIN AI Solutions Website

## Overview

This is a full-stack web application for JASWIN AI Solutions, a technology company website built with React frontend and Express backend. The application uses a modern tech stack with TypeScript, React, Express, Drizzle ORM with PostgreSQL, and shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query (React Query) for server state
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Build Tool**: Vite with custom configuration

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (via Neon serverless)
- **Development**: Hot reload with tsx

## Key Components

### Frontend Structure
- **Pages**: Home, About, Services, Projects, Contact, 404
- **Components**: Navigation, Footer, UI components from shadcn/ui
- **Styling**: Custom color palette with navy and gold theme
- **Forms**: React Hook Form with Zod validation
- **Email**: EmailJS integration for contact forms

### Backend Structure
- **Server**: Express server with middleware for logging and error handling
- **Routes**: Modular route registration system (currently minimal)
- **Storage**: Interface-based storage system with in-memory implementation
- **Database**: User schema defined with Drizzle ORM

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **Validation**: Zod schemas for type-safe data validation

## Data Flow

1. **Client Requests**: Frontend makes API calls to Express backend
2. **Server Processing**: Express routes handle business logic
3. **Data Storage**: Storage interface abstracts database operations
4. **Response**: JSON responses sent back to client
5. **State Management**: TanStack Query manages client-side caching and synchronization

## External Dependencies

### Core Dependencies
- **UI Framework**: React, TypeScript, Wouter
- **Styling**: Tailwind CSS, Radix UI components
- **Backend**: Express, Drizzle ORM, PostgreSQL driver
- **Email Service**: EmailJS for contact form submissions
- **Development**: Vite, tsx for hot reload

### Database
- **Neon Serverless PostgreSQL**: Cloud-hosted PostgreSQL database
- **Connection**: Environment variable `DATABASE_URL` required
- **Migrations**: Drizzle Kit for schema migrations

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Schema migrations run via `drizzle-kit push`

### Environment Setup
- **Development**: `npm run dev` starts both frontend and backend with hot reload
- **Production**: `npm run build` creates production bundles, `npm start` runs production server
- **Database**: Requires `DATABASE_URL` environment variable

### Production Considerations
- Static file serving handled by Express in production
- Vite development server only used in development mode
- Database migrations should be run before deployment
- EmailJS configuration requires environment variables for contact form functionality

The application follows a monorepo structure with clear separation between client and server code, shared types, and a modular component architecture that supports both development and production deployments.