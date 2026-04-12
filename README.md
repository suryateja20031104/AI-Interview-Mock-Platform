# AI Mock Platform

AI Mock Platform is a full-stack mock interview application built with a React/Vite frontend and an Express/MongoDB backend. It supports user authentication, resume upload, AI-powered interview sessions, voice transcription, and interview history.

## Key Features

- User registration and authentication with JWT
- Resume upload and parsing
- Live interview session support
  - Text answers
  - Voice answer transcription
  - Code submission
  - AI text-to-speech responses
- Interview history tracking
- React frontend with protected routes and auth state
- Backend APIs in Express with MongoDB persistence

## Tech Stack

- Frontend: React 19, Vite, Axios, React Router Dom
- Backend: Node.js, Express 5, MongoDB, Mongoose
- Auth: JSON Web Tokens
- AI/voice services: AssemblyAI, Murf, Google Gemini (via `@google/genai`)
- File uploads: Multer

## Repository Structure

- `client/` - React application
- `server/` - Express API server
- `server/src/` - backend source code and routes
- `server/.env` - environment variable configuration (local only)

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd "AI Mock Platform"
```

### 2. Install dependencies

```bash
cd server
npm install

cd ../client
npm install
```

### 3. Configure environment variables

Create a `.env` file inside `server/` with the following values:

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

> Do not commit `.env` to Git. Keep secret keys private.

### 4. Run the backend server

```bash
cd server
npm run dev
```

### 5. Run the frontend app

```bash
cd client
npm run dev
```

### 6. Open the app

Visit `http://localhost:5173` in your browser.

## API Overview

The backend exposes these main routes under `/api`:

- `/api/auth`
  - `POST /register` — create a new user
  - `POST /login` — sign in with email/password
  - `GET /me` — get current authenticated user
  - `POST /logout` — log out
- `/api/resume`
  - `POST /upload` — upload a resume file
  - `GET /` — fetch the uploaded resume
- `/api/interview`
  - `POST /start` — start a new interview session
  - `POST /:id/answer` — submit a text answer
  - `POST /:id/answer-audio` — submit a voice answer
  - `POST /:id/code` — submit code for the interview
  - `POST /:id/end` — end the interview
  - `GET /:id` — fetch interview details
  - `POST /:id/speak` — generate spoken text
  - `POST /transcribe` — transcribe uploaded audio
- `/api/history`
  - interview history endpoints for authenticated users

## Notes

- The client uses `VITE_API_URL` if provided; otherwise it defaults to `http://localhost:5000/api`.
- `node_modules/` directories should be ignored in Git and should not be committed.
- Make sure your MongoDB connection string is valid and the database is reachable.

## Recommended Git Ignore

Add the following to `.gitignore` at the repository root if not already present:

```gitignore
/client/node_modules
/server/node_modules
/server/.env
/client/dist
```

## Troubleshooting

- If the frontend cannot reach the backend, confirm `server` is running and `CLIENT_URL` matches the frontend origin.
- If auth fails, verify `JWT_SECRET` is set and matches the secret used by the server.
- If audio transcription or AI calls fail, check your API keys and make sure the services are enabled.

---

