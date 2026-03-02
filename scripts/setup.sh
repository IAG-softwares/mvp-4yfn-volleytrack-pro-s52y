#!/bin/bash

echo "Setting up MVP application..."

# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..

# Install backend dependencies
cd backend
npm install
cd ..

echo "Setup complete! Run 'npm run dev' to start the application."
