# MERN Social App

A minimal social media application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Project Structure

- `/backend`: Express API server, MongoDB connection, user/post endpoints, JWT authentication
- `/frontend`: React app (login, register, post feed)

## Quick Start

### 1. Clone
```bash
git clone https://github.com/Hemasri-01/Mern-social-app.git
cd Mern-social-app
```

### 2. Backend Setup
```bash
cd backend
cp .env.example .env
npm install
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
cp .env.example .env
npm install
npm start
```

## Folder Details

- `backend/controllers` — Auth, post logic
- `backend/models` — Mongoose schemas
- `backend/routes` — API routes
- `frontend/src` — React app source

## Environment Variables
See `.env.example` in each folder for required config.

---

## License
MIT
