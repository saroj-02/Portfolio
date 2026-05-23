# 💫 Professional Full-Stack Portfolio

A highly polished, premium full-stack portfolio application designed and built to showcase professional projects, skills, education, certifications, and experience. Engineered with a React (TypeScript) frontend powered by Vite and a robust Express + Mongoose (Node.js) backend to enable interactive visitor feedback storage.

---

## 🚀 Key Features

- **Premium Aesthetics & Fluid Interactions**: Custom high-fidelity cursor tracking, interactive glassmorphic cards, smooth spring physics layouts, and dynamic text-typing transitions.
- **Scroll Synchronization & Navigation**: Automated section detection using a custom React lock-based `IntersectionObserver` that updates active navigation links seamlessly during smooth auto-scrolls.
- **Dynamic Certification Hub**: Displays verified industry certifications (Microsoft, Infosys, be10X, LetsUpgrade, GTR Academy, InternsElite) hosted in an elegant, interactive grid structure.
- **Premium Contact validation & Persistence**: Complete feedback submission form built with React Hook Form, backed by **Zod schema validation**, transmitting form data to an Express API and persisting it in a remote **MongoDB Atlas** cluster.
- **Seamless Responsive Engineering**: Curated custom styling using Tailwind CSS, supporting standard transitions, dark/light themes, and precise HSL tail-colors.

---

## 🛠️ Tech Stack & Architecture

### Frontend
- **Core Framework**: React 18 & TypeScript (using Vite for lightning-fast HMR builds)
- **Styling & Theme**: Tailwind CSS & Vanilla CSS custom components
- **Motion & Transitions**: Framer Motion (leveraging spring configurations, container staggers, and entry triggers)
- **Form Management**: React Hook Form with Zod (providing strict frontend schema validation)
- **Iconography**: Lucide React

### Backend & Database
- **API Runtime**: Node.js with Express (configured using ECMAScript Modules - ES Modules)
- **Database Engine**: Mongoose & MongoDB Atlas
- **Security & Utilities**: CORS, dotenv configuration, nodemon
- **Type Checking**: TypeScript configuration for index and Mongoose models

---

## 📁 Repository Structure

```text
Portfolio/
├── server/                     # Express.js backend API
│   ├── models/                 # Database models
│   │   └── Feedback.ts         # Mongoose Feedback Schema
│   ├── index.ts                # Server entry & routes
│   ├── tsconfig.json           # Backend TS Configuration
│   └── package.json            # Backend scripts & dependencies
├── src/                        # React Frontend App
│   ├── assets/                 # Local images, certificates & index entries
│   ├── components/             # Reusable UI component modules
│   │   ├── About.tsx           # Developer bio & profile showcase
│   │   ├── Certificates.tsx    # Interactive certification grid
│   │   ├── Contact.tsx         # Zod validated contact form
│   │   ├── CustomCursor.tsx    # High-fidelity custom cursor
│   │   ├── Experience.tsx      # Chronological timeline (Education/Work)
│   │   ├── Hero.tsx            # dynamic introduction with typewriter effect
│   │   ├── Navbar.tsx          # Responsive navigation & theme toggler
│   │   ├── ProjectCard.tsx     # Standardized portfolio project container
│   │   └── Projects.tsx        # Categorized Web & App list
│   ├── App.tsx                 # Core App controller & scroll listener
│   ├── main.tsx                # Frontend entrypoint
│   └── index.css               # Main custom tailwind/CSS rules
├── tailwind.config.js          # Tailwind styling tokens
├── vite.config.ts              # Vite bundle config
└── package.json                # Root automation scripts & dependencies
```

---

## ⚙️ Local Development Setup

Follow these steps to configure and run the full-stack portfolio locally.

### Prerequisites
- Node.js (v18.x or higher)
- npm (v9.x or higher)
- A MongoDB database instance (or a free MongoDB Atlas Cluster connection URI)

---

### Step 1: Clone and Install Dependencies

First, clone the repository to your local machine and install packages for both the frontend and the backend.

```bash
# Clone the repository
git clone https://github.com/saroj-02/Portfolio.git
cd Portfolio

# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

---

### Step 2: Configure Environment Variables

Create a `.env` file inside the `server/` directory to store your API configuration secrets.

```bash
# Navigate to the server folder
cd server
touch .env
```

Open `server/.env` and configure the following variables:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
```

---

### Step 3: Run the Development Servers

You can boot both the frontend and backend servers together or independently using the root automation scripts.

#### Option A: Running Concurrently (Recommended)

From the root directory of the project, run:

```bash
# Start the Vite Dev server (Frontend)
npm run dev

# In a separate terminal tab, start the Express server (Backend)
npm run server
```

- The **Vite Frontend** will be running at: `http://localhost:5173`
- The **Express Backend** will be running at: `http://localhost:5000`

---

## 📦 Building for Production

To build the complete application for production, run:

```bash
npm run build
```

This root command executes the following tasks under the hood:
1. Compiles the React + TypeScript frontend into optimized static assets under the `/dist` directory.
2. Navigates into the `server/` directory and compiles the TypeScript code (`tsc`) into runtime JavaScript under the `server/dist` folder.
3. Automatically maps the production bundle path inside Express to serve the static assets and run a unified full-stack application.

### Start Production Server

To spin up the production-ready server locally:

```bash
npm start
```

---

## 📬 Contact and Portfolio Showcase

Developed with passion by **Saroj Padhi** - Full Stack & Software Developer.

- **Email**: [sarojpadhi28@gmail.com](mailto:sarojpadhi28@gmail.com)
- **LinkedIn**: [Saroj Padhi Profile](https://www.linkedin.com/in/saroj-padhi-492979270)
- **GitHub**: [github.com/saroj-02](https://github.com/saroj-02)
