# Multi-Tenant Inventory & Sales Management Platform

A backend-focused SaaS platform for managing inventory, products, sales, and employees across multiple businesses (tenants).

Built to simulate real-world multi-tenant backend architecture using modern backend engineering practices.

---

# 🚀 Features

## Current Features

- Multi-tenant architecture
- User authentication
- JWT authorization
- Role-based system (Owner / Employee)
- Tenant onboarding
- PostgreSQL database
- Prisma ORM integration
- Dockerized PostgreSQL setup
- TypeScript support
- Modular architecture
- Input validation with Zod

---

# 🏗️ Architecture

This project follows a feature-based modular architecture.

```txt
src/
│
├── config/
├── middleware/
├── modules/
│   └── auth/
├── prisma/
├── routes/
├── utils/
│
├── app.ts
└── server.ts
```

Each module owns:
- routes
- controllers
- services
- validation
- business logic

This keeps the system scalable and maintainable.

---

# 🧠 Multi-Tenant Design

Every major resource belongs to a tenant.

Example:
- products belong to a tenant
- users belong to a tenant
- sales belong to a tenant

This ensures tenant data isolation.

---

# ⚙️ Tech Stack

## Backend
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL

## Authentication
- JWT
- bcrypt

## Validation
- Zod

## DevOps
- Docker
- Docker Compose

---

# 📦 Database Models

## Tenant
Represents a business/company using the platform.

## User
Represents authenticated users.

Roles:
- OWNER
- EMPLOYEE

## Product
Inventory items owned by a tenant.

## Sale
Tracks sales transactions.

## SaleItem
Represents products inside a sale transaction.

---

# 🔐 Authentication Flow

## Signup
1. Create tenant
2. Hash password
3. Create owner account
4. Generate JWT token

## Login
1. Validate credentials
2. Compare password hash
3. Generate JWT token

---

# 🐳 Docker Setup

## Start PostgreSQL

```bash
docker compose up -d
```

## Stop Containers

```bash
docker compose down
```

---

# 🛠️ Local Development Setup

## 1. Clone Repository

```bash
git clone <repo-url>
cd multi-tenant-inventory-platform
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create `.env`

```env
PORT=5000

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/inventory_db?schema=public"

JWT_SECRET=supersecretkey
JWT_EXPIRES_IN=7d
```

---

## 4. Start Docker

```bash
docker compose up -d
```

---

## 5. Run Prisma Migration

```bash
npx prisma migrate dev --name init
```

---

## 6. Start Development Server

```bash
npm run dev
```

---

# 📌 API Endpoints

## Health Check

```http
GET /health
```

---

## Test Database

```http
GET /test-db
```

---

## Signup

```http
POST /api/auth/signup
```

### Request Body

```json
{
  "tenantName": "Bash Electronics",
  "email": "bash@example.com",
  "password": "password123"
}
```

---

## Login

```http
POST /api/auth/login
```

### Request Body

```json
{
  "email": "bash@example.com",
  "password": "password123"
}
```

---

# 📈 Planned Features

- Protected routes
- RBAC authorization
- Product management
- Inventory tracking
- Sales transactions
- Analytics dashboard
- Pagination
- Audit logs
- Dockerized deployment
- CI/CD pipeline
- Nginx reverse proxy
- Unit & integration testing

---

# 🧪 Development Goals

This project is designed to strengthen:
- backend architecture
- multi-tenant system design
- database modeling
- authentication systems
- API development
- DevOps fundamentals
- production-ready engineering practices

---

# 📄 License

MIT