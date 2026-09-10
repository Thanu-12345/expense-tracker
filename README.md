# 💰 Expense Tracker

A full-stack Expense Tracker application built using React, Node.js, Express, and MySQL. It allows users to manage income and expenses, search and filter transactions, and visualize expense distribution through charts.

## 🌐 Live Project

### 🚀 Live Website
https://expense-tracker-one-gamma-62.vercel.app/

### 🔗 Backend API
https://expense-tracker-backend-7ptf.onrender.com/

## ✨ Features

- Add income and expense transactions
- Edit existing transactions
- Delete transactions
- Categorize transactions
- Search transactions
- Filter by transaction type
- Filter by category
- View total income
- View total expenses
- View current balance
- Expense distribution chart
- Responsive user interface
- Persistent data storage using MySQL

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- Recharts
- CSS

### Backend
- Node.js
- Express.js
- REST API
- CORS

### Database
- MySQL
- Aiven

### Deployment
- Vercel — Frontend
- Render — Backend
- Aiven — Database

## 📁 Project Structure

```text
expense-tracker/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── database/
│   └── schema.sql
│
├── .gitignore
└── README.md
