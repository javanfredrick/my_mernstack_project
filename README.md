# 🚀 MERN Stack Capstone Project

A comprehensive full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that showcases modern web development skills including database design, RESTful API development, real-time features, testing, and deployment.

## 📋 Project Overview

This capstone project demonstrates proficiency in:
- **Backend Development**: Express.js API with MongoDB integration
- **Frontend Development**: React.js with modern UI/UX practices
- **Database Design**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based authentication system
- **Real-time Features**: Socket.io integration
- **Testing**: Comprehensive test suite (unit, integration, E2E)
- **Deployment**: Production-ready deployment configuration
- **Documentation**: Complete API and user documentation

## 🛠️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Socket.io** - Real-time bidirectional communication
- **bcryptjs** - Password hashing
- **multer** - File upload handling
- **express-validator** - Input validation
- **helmet** - Security middleware

### Frontend
- **React.js** - JavaScript library for building user interfaces
- **React Router** - Client-side routing
- **Redux Toolkit** - State management
- **Axios** - HTTP client
- **Socket.io-client** - Real-time client
- **React Hook Form** - Form handling
- **React Query** - Data fetching and caching
- **Styled Components** - CSS-in-JS styling

### Development & Testing
- **Jest** - Testing framework
- **Supertest** - API testing
- **React Testing Library** - Component testing
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Cypress** - End-to-end testing

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern-capstone-project
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Environment Setup**
   ```bash
   # Copy environment files
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   
   # Edit the environment files with your configuration
   ```

4. **Start Development Servers**
   ```bash
   # Start both backend and frontend
   npm run dev
   
   # Or start individually
   npm run dev:backend  # Backend on http://localhost:5000
   npm run dev:frontend # Frontend on http://localhost:3000
   ```

## 📁 Project Structure

```
mern-capstone-project/
├── backend/                 # Express.js API server
│   ├── config/             # Database and app configuration
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   ├── tests/              # Backend tests
│   └── server.js           # Main server file
├── frontend/               # React.js application
│   ├── public/             # Static files
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # API services
│   │   ├── store/          # Redux store
│   │   ├── utils/          # Utility functions
│   │   └── styles/         # CSS files
│   └── package.json
├── docs/                   # Documentation
├── tests/                  # End-to-end tests
└── package.json            # Root package.json
```

## 🔧 Available Scripts

### Root Level
- `npm run dev` - Start both backend and frontend in development mode
- `npm run build` - Build both backend and frontend for production
- `npm test` - Run all tests
- `npm run lint` - Lint all code
- `npm run format` - Format all code

### Backend
- `npm run dev:backend` - Start backend development server
- `npm run test:backend` - Run backend tests
- `npm run lint:backend` - Lint backend code

### Frontend
- `npm run dev:frontend` - Start frontend development server
- `npm run test:frontend` - Run frontend tests
- `npm run lint:frontend` - Lint frontend code

## 📚 API Documentation

The API documentation is available in the `docs/` directory:
- [API Endpoints](./docs/api.md)
- [Authentication Guide](./docs/auth.md)
- [Database Schema](./docs/schema.md)

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test              # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

### Frontend Testing
```bash
cd frontend
npm test              # Run all tests
npm run test:coverage # Run tests with coverage
```

### End-to-End Testing
```bash
npm run test:e2e      # Run Cypress E2E tests
```

## 🚀 Deployment

### Backend Deployment
The backend can be deployed to:
- Heroku
- Railway
- Render
- DigitalOcean App Platform

### Frontend Deployment
The frontend can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed deployment instructions.

## 📖 Documentation

- [Setup Guide](./docs/SETUP.md)
- [API Documentation](./docs/api.md)
- [Architecture Overview](./docs/ARCHITECTURE.md)
- [Testing Guide](./docs/TESTING.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)

## 🤝 Contributing

Please read [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Features

- ✅ User authentication and authorization
- ✅ CRUD operations for main entities
- ✅ Real-time updates and notifications
- ✅ File upload functionality
- ✅ Responsive design
- ✅ Comprehensive testing
- ✅ API documentation
- ✅ Production deployment ready

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `docs/` directory
- Review the API documentation

---

**Built with ❤️ using the MERN stack** 