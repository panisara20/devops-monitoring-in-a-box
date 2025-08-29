# 🎨 DevOps Monitor UI

A modern, responsive React-based dashboard that provides a unified interface for your DevOps monitoring stack.

## ✨ Features

- **Modern Design**: Clean, professional interface built with React 18 and Tailwind CSS
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Real-time Updates**: Live monitoring data with automatic refresh
- **Service Management**: Start, stop, and configure monitoring services
- **Unified Dashboard**: Single interface for all your monitoring tools
- **Dark Mode Ready**: Built with dark mode support (coming soon)

## 🚀 Quick Start

### Development Mode

```bash
# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Test production build
npm run serve
```

### Docker Development

```bash
# Start with hot reloading
docker-compose -f ../docker-compose.dev.yml up devops-monitor-ui

# Open http://localhost:4000
```

## 🏗️ Architecture

### Tech Stack

- **React 18** - Modern React with hooks and concurrent features
- **React Router 6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Beautiful, composable charting library
- **Lucide React** - Beautiful & consistent icon toolkit
- **Axios** - HTTP client for API calls

### Project Structure

```
ui/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── Sidebar.js      # Main navigation sidebar
│   ├── pages/              # Page components
│   │   ├── Dashboard.js    # Main dashboard view
│   │   ├── Services.js     # Service management
│   │   ├── Metrics.js      # Metrics and charts
│   │   ├── Logs.js         # Log management
│   │   ├── Alerts.js       # Alert management
│   │   └── Settings.js     # Configuration
│   ├── App.js              # Main app component
│   └── index.js            # App entry point
├── public/                  # Static assets
├── Dockerfile              # Production build
├── Dockerfile.dev          # Development build
└── package.json            # Dependencies
```

## 🎯 Key Components

### Dashboard
- System overview with key metrics
- Real-time charts and graphs
- Quick action buttons
- Recent alerts and notifications

### Services
- Service status monitoring
- Start/stop/restart controls
- Configuration management
- Health indicators

### Metrics
- Custom PromQL queries
- Performance analytics
- Historical data visualization
- Export capabilities

### Logs
- Centralized log search
- Filtering and querying
- Log stream monitoring
- Integration with Loki

## 🔧 Development

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional)

### Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm run test       # Run tests
npm run eject      # Eject from Create React App
```

### Environment Variables

```bash
REACT_APP_API_URL=http://localhost:4000  # API endpoint
CHOKIDAR_USEPOLLING=true                 # File watching (Docker)
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route to `src/App.js`
3. Add navigation item to `src/components/Sidebar.js`

### Styling

- **Tailwind CSS**: Utility classes for rapid development
- **Custom CSS**: Component-specific styles in `App.css`
- **Responsive**: Mobile-first design approach

## 🐳 Docker

### Development Build

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### Production Build

```dockerfile
# Multi-stage build
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
```

## 📱 Responsive Design

The UI is built with a mobile-first approach:

- **Mobile**: Single column layout with collapsible sidebar
- **Tablet**: Two-column layout with optimized spacing
- **Desktop**: Full three-column layout with sidebar

## 🎨 Customization

### Themes

The UI supports multiple themes (coming soon):
- Light mode (default)
- Dark mode
- High contrast mode

### Colors

Customize the color scheme by modifying `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  }
}
```

### Components

All components are built to be easily customizable:
- Consistent prop interfaces
- CSS custom properties
- Tailwind utility classes

## 🚀 Deployment

### Production

```bash
# Build the application
npm run build

# Deploy to your web server
# or use Docker for containerized deployment
```

### Docker Compose

```bash
# Start the full stack
docker-compose up -d

# Access at http://localhost:4000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Development Guidelines

- Use functional components with hooks
- Follow React best practices
- Maintain responsive design
- Add proper error handling
- Include loading states

## 📚 Resources

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

---

**Built with ❤️ by Harshhaa**
