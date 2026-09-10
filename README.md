# 💰 Expense Tracker

A full-stack Expense Tracker application built using React, Node.js, Express.js, and MySQL.

The application allows users to manage income and expenses, categorize transactions, search and filter transaction history, and visualize expenses using charts.

## ✨ Features

- Add income and expense transactions
- Edit transactions
- Delete transactions
- Categorize transactions
- Search transactions
- Filter by transaction type
- Filter by category
- Calculate total income
- Calculate total expenses
- Calculate current balance
- Expense distribution chart
- Responsive design
- Loading and error handling

## 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- Recharts
- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js
- MySQL
- mysql2
- CORS
- dotenv

### Database

- MySQL

## 📁 Project Structure

```text
expense-tracker/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── transactionController.js
│   ├── models/
│   │   └── transactionModel.js
│   ├── routes/
│   │   └── transactionRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ExpenseChart.jsx
│   │   │   ├── SummaryCards.jsx
│   │   │   ├── TransactionForm.jsx
│   │   │   └── TransactionList.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
│
├── database/
│   └── schema.sql
│
├── .gitignore
└── README.md