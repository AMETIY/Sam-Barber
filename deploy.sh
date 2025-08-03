#!/bin/bash

# 🚀 Barber Shop Deployment Script
echo "🚀 Starting Barber Shop Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "Please run this script from the barber-modern-VITE directory"
    exit 1
fi

print_status "Preparing for deployment..."

# Install dependencies
print_status "Installing dependencies..."
npm install

# Build the project
print_status "Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    print_status "Build successful!"
else
    print_error "Build failed! Please check for errors."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_warning "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Deploy to Vercel
print_status "Deploying to Vercel..."
vercel --prod

print_status "Deployment complete!"
print_status "Your barber shop website is now live!"
print_warning "Don't forget to set environment variables in Vercel dashboard:"
echo "   - VITE_EMAILJS_SERVICE_ID"
echo "   - VITE_EMAILJS_TEMPLATE_ID" 
echo "   - VITE_EMAILJS_PUBLIC_KEY" 