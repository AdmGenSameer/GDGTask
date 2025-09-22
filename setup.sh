#!/bin/bash

# AutomateAI Project Setup and Development Script

echo "🚀 AutomateAI Development Setup"
echo "==============================="

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
if ! command_exists node; then
    echo "❌ Node.js is required but not installed."
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

if ! command_exists npm; then
    echo "❌ npm is required but not installed."
    echo "Please install npm (usually comes with Node.js)"
    exit 1
fi

echo "✅ Prerequisites check passed"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo ""

echo "Installing Frontend dependencies..."
cd Frontend && npm install
if [ $? -ne 0 ]; then
    echo "❌ Frontend dependency installation failed"
    exit 1
fi

echo "Installing Backend dependencies..."
cd ../Backend && npm install
if [ $? -ne 0 ]; then
    echo "❌ Backend dependency installation failed"
    exit 1
fi

cd ..

echo ""
echo "✅ All dependencies installed successfully!"
echo ""

# Setup environment file
if [ ! -f "Backend/.env" ]; then
    echo "🔧 Setting up environment configuration..."
    cp Backend/.env.example Backend/.env
    echo "✅ Environment file created at Backend/.env"
    echo "   Please review and update the configuration as needed."
    echo ""
fi

echo "🎉 Setup complete!"
echo ""
echo "To start development:"
echo "  Frontend: cd Frontend && npm run dev"
echo "  Backend:  cd Backend && node gateway.js"
echo ""
echo "Frontend will be available at: http://localhost:5173"
echo "Backend will be available at:  http://localhost:3000"
echo ""
echo "Happy coding! 🚀"