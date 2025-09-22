# AutomateAI - Business Automation Platform

A full-stack web application that provides AI-powered business automation solutions. This project includes a modern React frontend and a robust Node.js API Gateway backend with microservice architecture.

## 🚀 Project Overview

AutomateAI is a comprehensive business automation platform designed to help companies streamline their operations with intelligent automation. The platform features:

- **AI-Powered Task Automation** - Automate repetitive business processes
- **Predictive Analytics** - Advanced analytics with trend prediction
- **Enterprise Security** - Bank-level security with SOC 2 compliance
- **Real-time Collaboration** - Team collaboration tools with live updates
- **Microservice Architecture** - Scalable backend with API Gateway pattern

## 📁 Project Structure

```
GDGTask/
├── Frontend/                 # React application with Vite
│   ├── src/
│   │   ├── components/      # React components (Hero, Features, Pricing, etc.)
│   │   ├── pages/           # Application pages
│   │   └── assets/          # Static assets (images, etc.)
│   ├── package.json
│   └── README.md
├── Backend/                 # Node.js API Gateway
│   ├── gateway.js           # Main gateway server with routing and auth
│   └── package.json
├── WebDevelopment_SameerChaudhary.pdf  # Project documentation
└── README.md
```

## 🛠️ Technology Stack

### Frontend
- **React** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server  
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - Modern component library
- **Lucide React** - Beautiful icon library
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **JWT** - JSON Web Token authentication
- **Axios** - HTTP client for service communication
- **Express Rate Limit** - API rate limiting

## ⚡ Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdmGenSameer/GDGTask.git
   cd GDGTask
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd Frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../Backend
   npm install
   ```

### Development Setup

#### Running the Frontend
```bash
cd Frontend
npm run dev
```
The frontend will be available at `http://localhost:5173`

#### Running the Backend
```bash
cd Backend
node gateway.js
```
The API Gateway will be available at `http://localhost:3000`

#### Building for Production
```bash
cd Frontend
npm run build
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the Backend directory:

```env
PORT=3000
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=production
```

### Backend Configuration

The API Gateway is configured to route requests to different microservices:

- **Users Service**: `http://localhost:4001` (primary), `http://localhost:4002` (backup)
- **Orders Service**: `http://localhost:5001` (primary), `http://localhost:5002` (backup)

You can modify service endpoints in `Backend/gateway.js`:

```javascript
const services = {
  users: [
    { name: 'primary', url: 'http://localhost:4001' },
    { name: 'backup', url: 'http://localhost:4002' }
  ],
  orders: [
    { name: 'primary', url: 'http://localhost:5001' },
    { name: 'backup', url: 'http://localhost:5002' }
  ]
};
```

## 📖 API Documentation

### Authentication

All API routes require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### API Endpoints

#### Gateway Health Check
- **GET** `/health` - Check API Gateway status

#### Service Routing
- **ALL** `/api/:service/*` - Proxy requests to microservices
  - `:service` - Service name (e.g., 'users', 'orders')
  - Automatically handles failover to backup instances
  - Rate limited to 100 requests per 15 minutes per user

### Rate Limiting

- **Window**: 15 minutes
- **Limit**: 100 requests per user
- **Key**: User ID from JWT token (falls back to IP address)

## 🎨 Frontend Features

### Components

- **Header** - Navigation and branding
- **Hero** - Landing page hero section with CTA
- **Features** - Product feature showcase
- **Pricing** - Pricing plans and packages
- **Testimonials** - Customer testimonials and stats
- **GetStarted** - Call-to-action section
- **Footer** - Site footer with links

### Pages

- **Index** - Main landing page combining all components

## 🔐 Security Features

### Backend Security
- **JWT Authentication** - Secure token-based authentication
- **Rate Limiting** - Per-user request rate limiting
- **Input Validation** - Request validation middleware
- **CORS Protection** - Cross-origin request security

### Frontend Security
- **Environment Variables** - Secure configuration management
- **Build Optimization** - Production build optimization
- **Asset Security** - Secure asset handling

## 🚀 Deployment

### Frontend Deployment
The frontend is a static React application that can be deployed to any static hosting service:

- Build the application: `npm run build`
- Deploy the `dist/` folder to your hosting provider
- Supported platforms: Vercel, Netlify, AWS S3, GitHub Pages

### Backend Deployment
The backend can be deployed to any Node.js hosting platform:

- Ensure environment variables are configured
- Install production dependencies: `npm install --production`
- Start the server: `node gateway.js`
- Supported platforms: Heroku, AWS EC2, DigitalOcean, Railway

## 🧪 Testing

### Frontend Testing
```bash
cd Frontend
npm run lint          # Run ESLint
npm run build         # Test production build
```

### Backend Testing
The backend includes a health check endpoint for monitoring:
```bash
curl http://localhost:3000/health
```

## 📝 Development Guidelines

### Code Style
- **Frontend**: ESLint configuration with React and TypeScript rules
- **Backend**: CommonJS modules with Express.js patterns
- **Formatting**: Consistent indentation and naming conventions

### Component Structure
```jsx
// React Component Template
import { ComponentProps } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MyComponent = () => {
  return (
    <div className="component-container">
      {/* Component content */}
    </div>
  );
};

export default MyComponent;
```

### API Route Structure
```javascript
// Express Route Template
app.use('/api/:service/*', async (req, res) => {
  // Authentication middleware
  // Rate limiting
  // Service routing logic
  // Error handling
});
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and commit: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License - see the package.json files for details.

## 👤 Author

**Sameer Chaudhary**
- GitHub: [@AdmGenSameer](https://github.com/AdmGenSameer)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues in the GitHub repository
2. Create a new issue with a detailed description
3. Include steps to reproduce the problem
4. Provide relevant system information

## 🔄 Version History

- **v1.0.0** - Initial release with frontend and backend
  - React frontend with modern UI components
  - Node.js API Gateway with authentication
  - Microservice routing and failover support

---

*Built with ❤️ for the GDG Community*
