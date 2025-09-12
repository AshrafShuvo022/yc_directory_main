# 🚀 StartUps Hub - Startup Pitch Platform

A modern, full-stack startup directory platform built with Next.js 15, React 19, and Sanity CMS. Entrepreneurs can pitch their ideas, connect with founders, and get noticed in virtual competitions.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Sanity](https://img.shields.io/badge/Sanity-CMS-orange)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## ✨ Features

### 🎯 Core Functionality
- **Startup Pitch Submissions** - Rich markdown editor for detailed pitch creation
- **Real-time Search** - Advanced search across startups, founders, and categories
- **User Authentication** - GitHub OAuth integration with NextAuth v5
- **View Tracking** - Real-time view counters with visual ping animations
- **Editor Picks** - Curated content sections for featured startups
- **User Profiles** - Complete founder profiles with startup portfolios

### 🎨 User Experience
- **Responsive Design** - Mobile-first approach with beautiful gradients
- **Custom UI Components** - Built with Radix UI and Tailwind CSS
- **Loading States** - Skeleton components and smooth transitions
- **Toast Notifications** - Real-time user feedback system
- **Form Validation** - Client and server-side validation with Zod

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - App Router with React Server Components
- **React 19** - Latest React features and hooks
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Custom design system with utility classes
- **Radix UI** - Accessible, unstyled components
- **Lucide React** - Beautiful icon library

### Backend & CMS
- **Sanity CMS** - Headless CMS with live content updates
- **NextAuth v5** - Authentication with GitHub provider
- **Server Actions** - Modern form handling without API routes
- **GROQ** - Efficient query language for Sanity

### Development Tools
- **Turbopack** - Lightning-fast builds and development
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm
- Sanity account
- GitHub account (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd yc_directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm install next@canary
   npm run dev
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=your_read_token
   SANITY_API_WRITE_TOKEN=your_write_token
   
   # NextAuth Configuration
   AUTH_SECRET=your_auth_secret
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   ```



## 📁 Project Structure

```
yc_directory/
├── app/                          # Next.js App Router
│   ├── (root)/                   # Root layout group
│   │   ├── page.tsx             # Homepage
│   │   ├── startup/             # Startup pages
│   │   │   ├── [id]/           # Individual startup page
│   │   │   └── create/         # Create startup page
│   │   └── user/               # User profile pages
│   │       └── [id]/           # Individual user page
│   ├── api/                     # API routes
│   │   └── auth/               # NextAuth configuration
│   └── studio/                  # Sanity Studio
├── components/                   # React components
│   ├── ui/                     # Reusable UI components
│   ├── StartupCard.tsx         # Startup card component
│   ├── StartupForm.tsx         # Startup creation form
│   ├── SearchForm.tsx          # Search functionality
│   └── View.tsx                # View tracking component
├── sanity/                      # Sanity CMS configuration
│   ├── lib/                    # Sanity client and utilities
│   ├── schemaTypes/            # Content schemas
│   └── structure.ts            # Studio structure
├── lib/                        # Utility functions
│   ├── actions.ts              # Server actions
│   ├── utils.ts                # Helper functions
│   └── validation.ts           # Zod schemas
└── hooks/                      # Custom React hooks
```

## ⚡ Performance Features

### Partial Pre-Rendering (PPR)
The application leverages Next.js 15's Partial Pre-Rendering feature:
- **Static Content** - Startup cards, layouts, and navigation are pre-rendered
- **Dynamic Content** - Search results, user-specific data, and real-time updates are server-rendered
- **Configuration** - Enabled with `experimental_ppr: 'incremental'` in `next.config.ts`

### Optimizations
- **Image Optimization** - Next.js Image component with remote patterns
- **Live Content Updates** - Real-time synchronization with Sanity
- **Build Performance** - Turbopack for faster development and builds
- **Type Safety** - Auto-generated TypeScript types from Sanity schema

## 🔧 Configuration

### Next.js Configuration
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      }
    ]
  },
  experimental: {
    ppr: 'incremental', // Partial Pre-Rendering
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: 'top-right'
  }
};
```

### Sanity Schema
The platform uses a flexible content schema:
- **Startup** - Title, description, category, image, pitch (markdown)
- **Author** - User profiles with GitHub integration
- **Playlist** - Curated content collections

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically





## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License







---

**Built with ❤️ using modern web technologies**