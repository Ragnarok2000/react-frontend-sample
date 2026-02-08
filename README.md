# Java Full Stack Sample – Item Management API

## 📌 Project Overview
This is a simple Java Spring Boot backend application that implements a RESTful API for managing a collection of items.  
It was created as part of a sample task for a Freelance Java Developer opportunity.

The project also includes a React frontend deployed on Vercel that interacts with the backend.

---

## ⚙️ Features
- **Item Model**: Represents an item with fields like `id`, `name`, and `description`.
- **In-Memory Data Store**: Uses `ArrayList` to store items.
- **RESTful Endpoints**:
  - `POST /items` → Add a new item
  - `GET /items/{id}` → Get a single item by ID
- **Input Validation**: Ensures required fields are present when adding items.
- **CORS Config**: Allows requests from localhost (for dev) and deployed frontend on Vercel.

---

## 🚀 Deployment Links
- **Frontend (React, Vercel):**  
  👉 [https://react-frontend-sample.vercel.app](https://react-frontend-sample.vercel.app)

- **Backend (Spring Boot, Render):**  
  👉 [https://java-backend-sample.onrender.com](https://java-backend-sample.onrender.com)

⚠️ **Note:** The backend is hosted on a free Render instance.  
The server goes to sleep when idle, so the **first request may take up to 1 minute** while it restarts.  
If you don’t get a response immediately, please try again after a minute.

---

## 📖 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Ragnarok2000/java-backend-sample.git
   cd java-backend-sample
