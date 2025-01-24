# Next.js Project

This is a Next.js project bootstrapped with `create-next-app`.

---

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Development](#development)
- [Production](#production)
- [Deployment](#deployment)
- [Resources](#resources)
- [License](#license)

---

## Introduction

This project is built using [Next.js](https://nextjs.org/), a powerful React-based framework for server-rendered applications. It leverages modern web development practices and is ready for both local development and production deployment.

---

## Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm, yarn, pnpm, or bun (for package management)
- Git (for version control)

### Installation

1. Clone the repository and navigate to the project folder:

   ```bash
   git clone <repository-url>
   cd <project-folder>

   ```

2. Install the project dependencies:
   npm install

   # or

   yarn install

   # or

   pnpm install

   # or

   bun install

3. Environment Variables
   This project uses environment variables to manage configuration. Create a .env.local file in the root directory of the project and add the following variables:

   NEXT_PUBLIC_BASE_API=https://portfolio-backend-beta-roan.vercel.app/api
   NEXT_PUBLIC_BASE_URL=https://portfolio-backend-beta-roan.vercel.app/

   # Uncomment these for local development:

   # NEXT_PUBLIC_BASE_API=http://localhost:5000/api

   # NEXT_PUBLIC_BASE_URL=http://localhost:5000/

   NEXTAUTH_SECRET=abc

The production server will be accessible at http://localhost:3000.

4. Development
   npm run dev

   # or

   yarn dev

   # or

   pnpm dev

   # or

   bun dev

5. Production
   To test the production build locally:

Build the project:

bash
Copy
Edit
npm run build

# or

yarn build
Start the production server:

bash
Copy
Edit
npm start

# or

yarn start
The production server will be accessible at http://localhost:3000.

6. Deployment
   The easiest way to deploy this Next.js application is via the Vercel Platform, created by the developers of Next.js.

To deploy, follow these steps:

Push your code to a GitHub repository.
Connect your repository to Vercel.
Vercel will automatically detect the Next.js project and deploy it.
For more details, refer to the Next.js Deployment Documentation.

7. Resources
   Next.js Documentation - Learn about Next.js features and API.
   Learn Next.js - Interactive Next.js tutorial.
   Next.js GitHub Repository - Feedback and contributions are welcome.
   License
   This project is licensed under [your license here]. Make sure to replace this section with the actual license used in your project.
