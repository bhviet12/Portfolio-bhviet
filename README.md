# React + TypeScript + Vite - Deployed on Render

This is a React + TypeScript application built with Vite, ready to deploy on Render.

## Features

- React 18 with TypeScript
- Vite for fast development and building
- ESLint configuration
- Ready-to-deploy on Render

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deploy to Render

### Method 1: Using render.yaml (Recommended)

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New" -> "Static Site"
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` file and configure everything

### Method 2: Manual Setup

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" -> "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Add Rewrite Rule:
   - **Source**: `/*`
   - **Destination**: `/index.html`
6. Click "Create Static Site"

## Technologies Used

- **React 18**: Modern React with Hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **ESLint**: Code linting

## Project Structure

```
my-react-app/
├── src/
│   ├── assets/          # Static assets
│   ├── App.tsx          # Main App component
│   ├── App.css          # App styles
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Public assets
├── render.yaml          # Render configuration
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
└── vite.config.ts       # Vite config
```

## Contributing

Feel free to submit issues and enhancement requests!
