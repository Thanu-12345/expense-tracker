import { useEffect, useState } from "react";

import {
    addTransaction,
    updateTransaction
} from "../services/api";

function TransactionForm({
    editingTransaction,
    onTransactionSaved,
    onCancelEdit
}) {

    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        type: "expense",
        category: "Food",
        description: "",
        transaction_date: ""
    });

    useEffect(() => {

        if (editingTransaction) {

            setFormData({
                title: editingTransaction.title,
                amount: editingTransaction.amount,
                type: editingTransaction.type,
                category: editingTransaction.category,
                description:
                    editingTransaction.description || "",
                transaction_date:
                    editingTransaction.transaction_date
                        ? editingTransaction.transaction_date.substring(0, 10)
                        : ""
            });

        }

    }, [editingTransaction]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (editingTransaction) {

                await updateTransaction(
                    editingTransaction.id,
                    formData
                );

            } else {

                await addTransaction(formData);

            }

            setFormData({
                title: "",
                amount: "",
                type: "expense",
                category: "Food",
                description: "",
                transaction_date: ""
            });

            onTransactionSaved();

        } catch (error) {

            console.error(error);

            alert("Something went wrong");

        }

    };

    return (
        <div className="form-container">

            <div className="form-header">

                <div>

                    <h2>
                        {editingTransaction
                            ? "✏️ Edit Transaction"
                            : "➕ Add Transaction"}
                    </h2>

                    <p>
                        {editingTransaction
                            ? "Update your transaction details"
                            : "Record your income or expense"}
                    </p>

                </div>

            </div>

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label>
                        Transaction Title
                    </label>

                    <input
                        type="text"
                        name="title"
                        placeholder="e.g. Grocery Shopping"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="form-group">

                    <label>
                        Amount
                    </label>

                    <input
                        type="number"
                        name="amount"
                        placeholder="Enter amount"
                        value={formData.amount}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        required
                    />

                </div>

                <div className="form-group">

                    <label>
                        Transaction Type
                    </label>

                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    >

                        <option value="expense">
                            Expense
                        </option>

                        <option value="income">
                            Income
                        </option>

                    </select>

                </div>

                <div className="form-group">

                    <label>
                        Category
                    </label>

                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >

                        <option value="Food">
                            Food
                        </option>

                        <option value="Bills">
                            Bills
                        </option>

                        <option value="Shopping">
                            Shopping
                        </option>

                        <option value="Transport">
                            Transport
                        </option>

                        <option value="Entertainment">
                            Entertainment
                        </option>

                        <option value="Health">
                            Health
                        </option>

                        <option value="Education">
                            Education
                        </option>

                        <option value="Salary">
                            Salary
                        </option>

                        <option value="Freelance">
                            Freelance
                        </option>

                        <option value="Other">
                            Other
                        </option>

                    </select>

                </div>

                <div className="form-group full-width">

                    <label>
                        Description
                    </label>

                    <input
                        type="text"
                        name="description"
                        placeholder="Add a short description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>
                        Transaction Date
                    </label>

                    <input
                        type="date"
                        name="transaction_date"
                        value={formData.transaction_date}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="form-buttons">

                    <button
                        type="submit"
                        className="primary-button"
                    >
                        {editingTransaction
                            ? "Update Transaction"
                            : "Add Transaction"}
                    </button>

                    {editingTransaction && (

                        <button
                            type="button"
                            className="cancel-button"
                            onClick={onCancelEdit}
                        >
                            Cancel
                        </button>

                    )}

                </div>

            </form>

        </div>
    );
}

export default TransactionForm;