# Elysia with Bun runtime

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bun create elysia ./elysia-example
```

## Development

To start the development server run:

```bash
bun run dev
```

Open <http://localhost:3001/> with your browser to see the result.

## API Endpoints

- GET `/` - Hello message
- GET `/api/hello` - JSON API response
- GET `/api/todos` - Fetches todos from JSONPlaceholder API

## Running with Frontend

To run both frontend and backend together:

```bash
# Terminal 1 - Frontend
cd frontend && bun dev

# Terminal 2 - Backend
cd backend && bun dev
```

Frontend will be at <http://localhost:3000/>
Backend will be at <http://localhost:3001/>
Frontend calls backend API directly at <http://localhost:3001/api/>*
