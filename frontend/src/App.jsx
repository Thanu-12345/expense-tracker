import { useEffect, useState } from "react";

import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";
import Dashboard from "./components/Dashboard";

import {
    getTransactions,
    deleteTransaction
} from "./services/api";

import "./App.css";

function App() {

    const [transactions, setTransactions] =
        useState([]);
    const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

    const [editingTransaction, setEditingTransaction] =
        useState(null);

    const [searchTerm, setSearchTerm] =
        useState("");

    const [typeFilter, setTypeFilter] =
        useState("all");

    const [categoryFilter, setCategoryFilter] =
        useState("all");
const fetchTransactions = async () => {

    try {

        setLoading(true);
        setError("");

        const data = await getTransactions();

        setTransactions(data);

    } catch (error) {

        console.error(
            "Error fetching transactions:",
            error
        );

        setError(
            "Unable to load transactions. Please check the backend connection."
        );

    } finally {

        setLoading(false);

    }
};

    useEffect(() => {
        fetchTransactions();
    }, []);

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this transaction?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            await deleteTransaction(id);

            alert(
                "Transaction deleted successfully!"
            );

            fetchTransactions();

        } catch (error) {

            console.error(error);

            alert(
                "Failed to delete transaction"
            );
        }
    };

    const handleEdit = (transaction) => {

        setEditingTransaction(transaction);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleTransactionSaved = () => {

        setEditingTransaction(null);

        fetchTransactions();
    };

    const handleCancelEdit = () => {
        setEditingTransaction(null);
    };

    const filteredTransactions =
        transactions.filter((transaction) => {

            const searchMatch =
                transaction.title
                    .toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    ) ||
                transaction.category
                    .toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    ) ||
                (transaction.description || "")
                    .toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    );

            const typeMatch =
                typeFilter === "all" ||
                transaction.type === typeFilter;

            const categoryMatch =
                categoryFilter === "all" ||
                transaction.category ===
                    categoryFilter;

            return (
                searchMatch &&
                typeMatch &&
                categoryMatch
            );
        });

    return (

        <div className="app">

            <header className="header">

                <h1>
                    💰 Expense Tracker
                </h1>

                <p>
                    Manage your income and expenses
                    easily
                </p>

            </header>

            <main className="main-content">
              {loading && (
    <div className="status-message loading-message">
        ⏳ Loading transactions...
    </div>
)}

{error && !loading && (
    <div className="status-message error-message">
        ⚠️ {error}

        <button
            onClick={fetchTransactions}
            className="retry-button"
        >
            Try Again
        </button>
    </div>
)}

                <SummaryCards
                    transactions={transactions}
                />

                <TransactionForm
                    editingTransaction={
                        editingTransaction
                    }
                    onTransactionSaved={
                        handleTransactionSaved
                    }
                    onCancelEdit={
                        handleCancelEdit
                    }
                />

                <Dashboard
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    typeFilter={typeFilter}
                    setTypeFilter={setTypeFilter}
                    categoryFilter={
                        categoryFilter
                    }
                    setCategoryFilter={
                        setCategoryFilter
                    }
                />

                <TransactionList
                    transactions={
                        filteredTransactions
                    }
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

                <ExpenseChart
                    transactions={transactions}
                />

            </main>

        </div>
    );
}

export default App;