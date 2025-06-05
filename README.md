# HUMANAI Portfolio Website

A cutting-edge AI-powered portfolio and project management platform designed for modern professionals, featuring a comprehensive dashboard with dynamic content and engaging user interfaces.

## 🚀 Features

- **Modern Design System**: Dark theme with emerald/teal gradients and glassmorphism effects
- **Responsive Layout**: Mobile-first approach with seamless cross-device experience
- **Interactive Components**: Smooth hover animations and transitions throughout
- **Single Page Application**: Smooth section navigation with persistent state
- **Contact Integration**: Backend form handling with email notification system
- **Dynamic Content**: Real-time project showcase and team information
- **Floating UI Elements**: Scroll-to-top button that appears on scroll with smooth animations
- **Comprehensive Footer**: Navigation links, contact information, and social media integration

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript for type-safe development
- **Vite** for lightning-fast development and building
- **Tailwind CSS** for utility-first styling with custom design system
- **TanStack Query** for efficient server state management
- **React Hook Form** with Zod validation for robust form handling
- **Wouter** for lightweight client-side routing
- **Framer Motion** for smooth animations
- **Lucide React** for consistent iconography

### Backend
- **Node.js** with Express.js framework
- **TypeScript** for full-stack type safety
- **In-Memory Storage** for fast development and prototyping
- **Email Integration** with SendGrid support
- **RESTful API** design with proper error handling

### Development Tools
- **ESLint** and **Prettier** for code quality
- **Drizzle ORM** with Zod schema validation
- **PostCSS** with Autoprefixer
- **Hot Module Replacement** for instant development feedback

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/         # Shadcn/ui component library
│   │   │   ├── about.tsx   # About section component
│   │   │   ├── contact.tsx # Contact form with validation
│   │   │   ├── header.tsx  # Navigation header
│   │   │   ├── people.tsx  # Team showcase
│   │   │   ├── projects.tsx# Project portfolio
│   │   │   ├── footer.tsx  # Website footer with links
│   │   │   ├── scroll-to-top-button.tsx # Floating scroll button
│   │   │   └── youtube.tsx # YouTube channel stats
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility libraries and configs
│   │   └── pages/          # Page components
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Data layer with memory storage
│   ├── email.ts           # Email service integration
│   └── vite.ts            # Vite development server setup
├── shared/                # Shared types and schemas
│   └── schema.ts          # Zod schemas for data validation
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd humanai-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Email Configuration (Optional)
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   
   # Development
   NODE_ENV=development
   PORT=3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 📋 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production version
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Color Palette
- **Primary**: Emerald (500-600) to Teal (500-600) gradients
- **Secondary**: Blue (500) to Purple (500) gradients
- **Accent**: Orange (400) to Yellow (400) for highlights
- **Background**: Slate (800-900) with transparency layers
- **Text**: White primary, Gray (300) secondary

### Typography
- **Headings**: Bold, uppercase tracking for brand consistency
- **Body**: Clean, readable with proper line heights
- **UI Text**: Semibold for buttons and navigation

### Components
- **Cards**: Rounded corners (xl-3xl) with backdrop blur
- **Buttons**: Gradient backgrounds with hover states
- **Forms**: Floating labels with validation states
- **Animations**: 300ms duration with smooth easing

## 🌐 Sections Overview

### 1. About Section (Default)
- HUMANAI brand showcase with logo
- Service highlights (AI Integration, Fast Delivery, Precision, Quality)
- Performance statistics and metrics
- Call-to-action for engagement

### 2. Projects Portfolio
- Featured project showcases
- Technology stack indicators
- GitHub and live demo links
- Project filtering and search

### 3. YouTube Channel
- Channel statistics (subscribers, views, videos)
- Featured video thumbnails
- Educational content focus
- Subscribe call-to-action

### 4. Team Section
- CEO profile card with detailed information
- Team statistics and metrics
- Individual team member showcases
- Professional ratings and expertise

### 5. Contact Form
- Validated contact form with real-time feedback
- Email integration for notifications
- Support information and response times
- Professional contact details

## 🔧 Configuration

### Email Setup
The application supports email notifications through SendGrid:

1. **Get SendGrid API Key**
   - Sign up at [SendGrid](https://sendgrid.com)
   - Create an API key with mail send permissions

2. **Configure Environment**
   ```env
   SENDGRID_API_KEY=your_api_key_here
   ```

3. **Email Templates**
   Contact form submissions are formatted and sent to:
   `humanai7.enquiries@gmail.com`

### Storage Configuration
Currently using in-memory storage for fast development. For production:

1. **Database Integration** (Optional)
   - PostgreSQL with Drizzle ORM
   - Update `server/storage.ts` to use database
   - Configure connection string in environment

2. **Data Persistence**
   - Projects and contacts stored in memory
   - Survives server restarts in development
   - Consider Redis for production caching

## 🚀 Deployment

### Replit Deployment
The application is optimized for Replit deployment:

1. **Environment Setup**
   - Configure secrets in Replit
   - Ensure all dependencies are installed

2. **Build Configuration**
   - Vite builds are optimized for production
   - Static assets served efficiently

3. **Domain Configuration**
   - Custom domain support available
   - SSL/TLS handled automatically

### Manual Deployment

1. **Build Production Version**
   ```bash
   npm run build
   ```

2. **Set Environment Variables**
   ```bash
   export NODE_ENV=production
   export PORT=3000
   export SENDGRID_API_KEY=your_key
   ```

3. **Start Production Server**
   ```bash
   npm start
   ```

## 🔍 API Documentation

### Endpoints

#### Projects
- `GET /api/projects` - Retrieve all projects
- `POST /api/projects` - Create new project (admin)

#### Contacts
- `GET /api/contacts` - Retrieve all contacts (admin)
- `POST /api/contacts` - Submit contact form

### Request/Response Format

**Contact Submission:**
```typescript
// Request
POST /api/contacts
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services."
}

// Response
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services.",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Responsive images with proper loading
- **Bundle Analysis**: Optimized chunk sizes
- **Caching**: Efficient browser and server caching
- **Compression**: Gzip compression for production

## 🧪 Testing

Currently focused on development experience. For production:

1. **Unit Tests**: Jest with React Testing Library
2. **Integration Tests**: API endpoint testing
3. **E2E Tests**: Playwright for user workflows
4. **Type Safety**: Full TypeScript coverage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and inquiries:
- **Email**: humanai7.enquiries@gmail.com
- **Response Time**: Within 24 hours
- **Support**: 24/7 Available

---

**HUMANAI** - Transforming digital experiences through intelligent web development and AI-powered content creation.