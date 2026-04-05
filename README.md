🧾 SaaS Financial System

> ⚠️ Project Status: This project is currently under active development (Work in Progress). Features, APIs, and structure may change over time.



A scalable, modular SaaS Financial & Accounting System built to handle core financial operations such as transactions, journal entries, ledger management, and treasury tracking. The system is designed with performance, extensibility, and multi-tenant architecture in mind.


---

🚀 Tech Stack

Frontend

Next.js – SSR & modern React framework

Tailwind CSS – Utility-first styling

ShadCN UI – Accessible and reusable UI components

TanStack (React Query) – Server state management & caching


Backend

NestJS – Scalable Node.js framework with modular architecture

PostgreSQL – Relational database for financial consistency

Redis – Caching & queue support

BullMQ – Background job processing (queues & workers)



---

📌 Core Features

🏢 Organization Management

Multi-tenant system (each organization has isolated data)

CRUD operations for organizations

Scalable structure to support multiple businesses



---

💰 Treasury Management

Create and manage treasuries (cash / bank accounts)

Track balances dynamically

Link treasuries with accounting accounts



---

📒 Chart of Accounts (COA)

Hierarchical account structure (parent / child accounts)

Supports:

Assets

Liabilities

Equity

Revenue

Expenses


Enables proper financial classification



---

🧾 Journal Entries

Double-entry accounting system

Each journal entry contains:

Multiple lines (debit / credit)


Validation:

Total debit = total credit


Uses transaction-safe operations via EntityManager



---

🔄 Transactions Module

High-level abstraction over journal entries

Handles business logic like:

Cash In / Cash Out

Transfers


Automatically generates corresponding journal entries



---

📊 Ledger System

Tracks all account movements

Generates:

Account statements

Running balances


Based on journal lines



---

⚙️ Background Jobs (BullMQ)

Queue-based processing for:

Heavy operations

Async financial tasks


Improves system performance and responsiveness



---

⚡ Caching Layer (Redis)

Cache frequently accessed data:

Accounts

Balances


Reduces database load



---

🧠 Architecture Overview

The system follows a modular architecture in NestJS:

Organizations Module

Accounts Module

Treasury Module

Journal Module

Transactions Module

Ledger Module


Each module:

Has its own DTOs

Uses Services for business logic

Uses Controllers for API exposure



---

🔐 Data Integrity & Consistency

Uses database transactions via EntityManager

Ensures:

Atomic operations

Rollback on failure


Critical for financial correctness



---

📦 API Design

RESTful APIs

DTO validation using class-validator

Clear separation between:

Input validation (DTOs)

Business logic (Services)




---

🛠 Example Workflow

➤ Creating a Transaction

1. User sends transaction request


2. Transaction Service:

Validates input

Prepares journal lines



3. Journal Service:

Creates journal entry

Inserts debit/credit lines



4. Ledger updates automatically




---

📈 Future Enhancements

Multi-currency support 💱

Role-based access control (RBAC) 🔐

Financial reports:

Balance Sheet

Income Statement


Audit logs & activity tracking

Webhooks & integrations



---

⚙️ Setup & Installation

# Clone the repo
git clone <your-repo-url>

# Install dependencies
pnpm install

# Run backend
pnpm run start:dev

# Run frontend
pnpm run dev


---

🧪 Environment Variables

DATABASE_URL=
REDIS_HOST=
REDIS_PORT=
JWT_SECRET=


---

🎯 Project Goals

Build a production-ready SaaS financial system

Apply real-world accounting principles

Practice scalable backend architecture

Ensure high performance & reliability



---

👨‍💻 Author

Developed by Bilal Hussein


---

⭐ Notes

This project demonstrates:

Strong backend architecture using NestJS

Deep understanding of accounting systems

Clean separation of concerns

Scalable SaaS design patterns
