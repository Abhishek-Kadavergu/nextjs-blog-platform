# 🧠 Blogify - A Modern Blog Web Application

A full-featured blog application built with **Next.js 14 App Router**, **TypeScript**, **MongoDB**, and **Tailwind CSS**. Users can **create**, **read**, **update**, and **delete** blog posts, including image uploads and dynamic routing.

## 🔗 Demo

Live Demo 👉 [https://your-deployed-url.com](https://your-deployed-url.com)

## ✨ Features

- ✅ Create, Read, Update, Delete (CRUD) blogs
- 📤 Upload images with blog posts
- 📁 Dynamic routing for individual blog pages
- 🌐 Server-side rendering (SSR) with static generation
- 💅 Styled using Tailwind CSS
- ⛓️ MongoDB integration with Mongoose
- 🔐 Type safety with TypeScript
- 🧪 API Routes with RESTful design

## 🧑‍💻 Tech Stack

| Frontend     | Backend         | Database | Styling      | Tools          |
| ------------ | --------------- | -------- | ------------- | -------------- |
| Next.js 14   | Next.js API      | MongoDB  | Tailwind CSS | TypeScript     |
| App Router   | Mongoose         |          |              | Cloudinary (optional) |

---

## 📂 Folder Structure

app/
│
├── api/
│ └── blogs/ # API routes (POST, GET, PUT, DELETE)
│
├── blogs/
│ └── [id]/page.tsx # Dynamic blog details page
│
├── components/ # Reusable UI components
├── lib/ # MongoDB connection helper
├── models/ # Mongoose schemas
├── utils/ # Utility functions
├── styles/ # Global styles
└── page.tsx # Home page with all blogs



---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/blogify-nextjs.git
cd blogify-nextjs
npm install
# or
yarn install

```
### MONGODB_URI=your_mongodb_connection_string
