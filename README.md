# LetGoLease

LetGoLease has two parts:

- `frontend/`: the website users see in the browser.
- `backend/`: the API server the website talks to.

You need to run both parts at the same time while developing.

## What You Need Installed

Install these before starting:

- Node.js: needed for the frontend.
- npm: comes with Node.js and installs frontend packages.
- Python 3.12: needed for the backend.
- uv: installs and runs backend Python packages.

Useful install links:

- Node.js: https://nodejs.org/
- uv: https://docs.astral.sh/uv/getting-started/installation/

To check if they are installed, run these commands:

```bash
node --version
npm --version
python3 --version
uv --version
```

## First-Time Setup

Open a terminal in the main project folder:

```bash
cd LetGoLease
```

### 1. Set Up The Frontend

```bash
cd frontend
npm install
```

This installs the frontend dependencies, including:

- Next.js
- React
- Tailwind CSS
- TypeScript
- ESLint

Then go back to the main project folder:

```bash
cd ..
```

### 2. Set Up The Backend

```bash
cd backend
uv sync
```

This installs the backend dependencies, including:

- FastAPI
- Uvicorn
- SQLAlchemy
- Alembic
- Psycopg
- Redis client
- Pydantic Settings

Then go back to the main project folder:

```bash
cd ..
```

## How To Run The App

You need two terminal windows open.

### Terminal 1: Start The Backend

From the main project folder:

```bash
cd backend
uv run uvicorn app.main:app --reload
```

The backend runs at:

```txt
http://localhost:8000
```

You can test it by opening:

```txt
http://localhost:8000/api/health
```

You should see something like:

```json
{"status":"ok"}
```

### Terminal 2: Start The Frontend

From the main project folder:

```bash
cd frontend
npm run dev
```

The frontend runs at:

```txt
http://localhost:3000
```

Open that link in your browser.

## Important Note About The API

The frontend and backend run separately:

```txt
Frontend: http://localhost:3000
Backend:  http://localhost:8000
```

The frontend is already set up so calls like this:

```txt
/api/universities
```

get sent to the backend automatically.

That means login, signup, and universities should work as long as both servers are running.

## Current Backend Routes

These routes exist right now:

```txt
GET  /api/health
GET  /api/universities
POST /api/auth/signup
POST /api/auth/login
GET  /api/auth/me
POST /api/auth/logout
```

The authentication routes are currently mocked. That means they are fake for now and are only meant to help test the frontend.

## Common Commands

Run frontend lint:

```bash
cd frontend
npm run lint
```

Build the frontend:

```bash
cd frontend
npm run build
```

Run the frontend website:

```bash
npm run dev
```

Run the backend (after you cd to root):

```bash
cd backend
uv run uvicorn app.main:app --reload
```

Install backend dependencies again if needed:

```bash
cd backend
uv sync
```

## If Something Goes Wrong

If the website loads but signup does not load universities:

- Make sure the backend is running.
- Make sure it is running on `http://localhost:8000`.
- Open `http://localhost:8000/api/health` to test the backend.

If `npm run dev` does not work:

- Run `npm install` inside `frontend/`.
- Make sure you are inside the `frontend/` folder.

If the backend command does not work:

- Run `uv sync` inside `backend/`.
- Make sure Python 3.12 and uv are installed.

To stop either server, press:

```txt
Control + C
```
