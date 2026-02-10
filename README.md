# Copilot Ralph Webpage

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

A React application showcasing GitHub Copilot Ralph features with a modern dark theme inspired by Twitter's design language.

## Features

- Hero section with application screenshot and download links
- Features overview highlighting Plan Mode and Git Integration
- Integrated diff view and JSON storage
- Responsive design with Tailwind CSS
- Tabler Icons for consistent iconography

## Tech Stack

- **React 19.2.0** - UI framework
- **Vite 7.3.1** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Tabler Icons React** - Icon library
- **PostCSS** - CSS processing

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment to Netlify

This project is configured for seamless deployment to Netlify.

### Quick Deploy

1. **Connect Your Repository**
   - Log in to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub, GitLab, Bitbucket)
   - Select this repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - (These are already configured in `netlify.toml`)

3. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - Every push to your main branch will trigger a new deployment

### Manual Deploy

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

### Configuration

The `netlify.toml` file includes:
- Build command and publish directory
- SPA redirect rules (routes all requests to `index.html`)

### Environment Variables

Currently, this project does not require any environment variables. If you need to add them in the future:

1. Go to Site settings → Environment variables in Netlify dashboard
2. Add your variables
3. Redeploy the site

### Custom Domain

To add a custom domain:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure DNS

## Project Structure

```
copilot_ralph_webpage/
├── public/
│   └── screenshots/     # Application screenshots
├── src/
│   ├── components/      # React components
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles and Tailwind directives
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── netlify.toml         # Netlify configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.js       # Vite configuration
```

## License

MIT
