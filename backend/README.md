# Agenda de Contatos - Backend API

Backend API for secure contact management system.

## Features

- RESTful API with versioning support
- TypeScript for type safety
- SQL Server database integration
- Multi-tenancy architecture
- Comprehensive error handling
- Request validation with Zod
- CORS and security middleware

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: Microsoft SQL Server
- **Validation**: Zod

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── config/                 # Configuration
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- SQL Server
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```

4. Update database credentials in `.env`

### Development

Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Build

Build for production:
```bash
npm run build
```

### Production

Start the production server:
```bash
npm start
```

## API Endpoints

### Health Check
- `GET /health` - API health status

### API Versioning

All endpoints are versioned:
- External (public): `/api/v1/external/...`
- Internal (authenticated): `/api/v1/internal/...`

## Environment Variables

See `.env.example` for all available configuration options.

## Database

The application uses SQL Server with the following schemas:
- `config` - System configuration
- `functional` - Business logic
- `security` - Authentication/authorization
- `subscription` - Account management

## License

ISC