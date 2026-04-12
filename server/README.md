# AI Mock Platform - Server

This directory contains the Express backend API for the AI Mock Platform application.

## Overview

The server is built with:
- Node.js
- Express 5
- MongoDB / Mongoose
- JSON Web Tokens for auth
- Multer for file uploads
- AssemblyAI for audio transcription
- Murf for text-to-speech
- Google Gemini integration via `@google/genai`

It supports:
- user registration and login
- JWT-based protected API routes
- resume upload and retrieval
- interview session management
- text and voice answer submission
- code submission
- interview history tracking

## Install

```bash
cd server
npm install
```

## Run

```bash
npm run dev
```

The server listens on `http://localhost:5000` by default.

## Environment Variables

Create a `.env` file in `server/` with the following values:

```env
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
ASSEMBLYAI_API_KEY=<your-assemblyai-api-key>
MURF_API_KEY=<your-murf-api-key>
GEMINI_API_KEY=<your-google-gemini-api-key>
```

## API Routes

Main API routes are mounted under `/api`:

- `/api/auth` - authentication
- `/api/resume` - resume upload/retrieval
- `/api/interview` - interview sessions and answers
- `/api/history` - interview history

## Notes

- Keep `.env` out of Git
- Do not commit `node_modules/`
- Use the root README for full project-level instructions
