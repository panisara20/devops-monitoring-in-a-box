#!/bin/bash

echo "🎨 Starting DevOps Monitor UI Development Server..."
echo "=================================================="

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
UI_DIR="$SCRIPT_DIR/ui"

# Check if UI directory exists
if [ ! -d "$UI_DIR" ]; then
    echo "❌ UI directory not found at: $UI_DIR"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Navigate to UI directory
cd "$UI_DIR"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing UI dependencies..."
    npm install
fi

echo "🚀 Starting UI development server..."
echo "🌐 UI will be available at: http://localhost:3000"
echo "📱 The UI will automatically reload when you make changes"
echo "📁 Working directory: $UI_DIR"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm start
