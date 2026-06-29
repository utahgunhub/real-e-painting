# Real E Painting

Professional interior and exterior painting services for Utah homes and businesses.

## Project Setup

This project is built with modern web technologies for fast, responsive performance.

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd real-e-painting

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies

This project is built with:

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── home/      # Home page sections
│   ├── layout/    # Layout components (Header, Footer)
│   └── ui/        # shadcn/ui components
├── pages/         # Page components
├── assets/        # Images and static files
├── lib/           # Utility functions
└── hooks/         # Custom React hooks
```

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service.
