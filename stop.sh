#!/bin/bash

# DevOps Monitoring in a Box - Stop Script
# This script stops the monitoring stack

echo "🛑 Stopping DevOps Monitoring in a Box..."
echo "========================================="

# Stop the services
echo "📦 Stopping monitoring services..."
docker-compose down

echo ""
echo "✅ Monitoring stack has been stopped!"
echo ""
echo "💡 To start again, run: ./start.sh"
echo "   Or use: docker-compose up -d"
