# AI Mock Platform - Client

This directory contains the React frontend for the AI Mock Platform application.

## Overview

The client is built with:
- React 19
- Vite
- Axios
- React Router Dom
- React Hot Toast
- Monaco Editor for code input

It provides:
- user authentication UI
- protected routes
- interview session pages
- resume upload workflow
- interview history and feedback pages

## Install

```bash
cd client
npm install
```

## Run

```bash
npm run dev
```

Open the site at `http://localhost:5173`.

## Configuration

The client reads the backend API URL from the Vite environment variable:

- `VITE_API_URL`

If not set, it defaults to:

- `http://localhost:5000/api`

To override it, add a `.env` file in `client/` with:

```env
VITE_API_URL=http://localhost:5000/api
```

## Notes

- Do not commit `node_modules/`
- Use the root repository README for full project-level setup and backend environment variables
