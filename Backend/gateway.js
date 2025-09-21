// Proxy route example: /api/:service/*
app.use('/api/:service/*', async (req, res) => {
  const { service } = req.params;
  const serviceList = services[service];
  if (!serviceList) {
    return res.status(404).json({ message: 'Unknown service' });
  }
  // Check for healthy service (cache or fresh)
  let targetUrl = healthyService[service];
  if (!targetUrl) {
    targetUrl = await checkServiceHealth(serviceList, service);
    if (!targetUrl) {
      return res.status(503).json({ message: 'All service instances are down' });
    }
  }
  // Proxy the request
  const path = req.originalUrl.replace(`/api/${service}`, '');
  try {
    const response = await axios({
      method: req.method,
      url: `${targetUrl}${path}`,
      headers: { ...req.headers, host: undefined },
      data: req.body
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    // On error, try failover
    targetUrl = await checkServiceHealth(serviceList, service);
    if (targetUrl) {
      try {
        const response = await axios({
          method: req.method,
          url: `${targetUrl}${path}`,
          headers: { ...req.headers, host: undefined },
          data: req.body
        });
        return res.status(response.status).json(response.data);
      } catch (e) {}
    }
    res.status(502).json({ message: 'Service unavailable or error forwarding request' });
  }
});
// Entry point for the API Gateway
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


// JWT Authentication Middleware
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: 'Authorization header missing or malformed' });
  }
}


// Per-user Rate Limiting Middleware
const rateLimit = require('express-rate-limit');

const userRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each user to 100 requests per windowMs
  keyGenerator: (req) => req.user && req.user.id ? req.user.id : req.ip,
  handler: (req, res) => {
    res.status(429).json({ message: 'Too many requests, please try again later.' });
  }
});

// Use JWT authentication and rate limiting for all routes
app.use(authenticateJWT);

app.use(userRateLimiter);

// Example microservice targets (primary and backup)
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

const axios = require('axios');

// Health check cache
const healthyService = {};

async function checkServiceHealth(serviceList, serviceKey) {
  for (const svc of serviceList) {
    try {
      const res = await axios.get(`${svc.url}/health`);
      if (res.status === 200) {
        healthyService[serviceKey] = svc.url;
        return svc.url;
      }
    } catch (e) {
      // Try next
    }
  }
  healthyService[serviceKey] = null;
  return null;
}

// Health check endpoint for gateway
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
