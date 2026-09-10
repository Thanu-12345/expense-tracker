const transactionModel = require("../models/transactionModel");

// Get all transactions
const getTransactions = (req, res) => {
    transactionModel.getAllTransactions((err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to fetch transactions",
                error: err.message
            });
        }

        res.json(results);
    });
};

// Get one transaction
const getTransaction = (req, res) => {
    const { id } = req.params;

    transactionModel.getTransactionById(id, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to fetch transaction",
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Transaction not found"
            });
        }

        res.json(results[0]);
    });
};

// Add transaction
const createTransaction = (req, res) => {
    const {
        title,
        amount,
        type,
        category,
        description,
        transaction_date
    } = req.body;

    if (!title || !amount || !type || !category || !transaction_date) {
        return res.status(400).json({
            message: "Please provide all required fields"
        });
    }

    transactionModel.addTransaction(
        {
            title,
            amount,
            type,
            category,
            description,
            transaction_date
        },
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to add transaction",
                    error: err.message
                });
            }

            res.status(201).json({
                message: "Transaction added successfully",
                id: result.insertId
            });
        }
    );
};

// Update transaction
const editTransaction = (req, res) => {
    const { id } = req.params;

    const {
        title,
        amount,
        type,
        category,
        description,
        transaction_date
    } = req.body;

    if (!title || !amount || !type || !category || !transaction_date) {
        return res.status(400).json({
            message: "Please provide all required fields"
        });
    }

    transactionModel.updateTransaction(
        id,
        {
            title,
            amount,
            type,
            category,
            description,
            transaction_date
        },
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to update transaction",
                    error: err.message
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Transaction not found"
                });
            }

            res.json({
                message: "Transaction updated successfully"
            });
        }
    );
};

// Delete transaction
const removeTransaction = (req, res) => {
    const { id } = req.params;

    transactionModel.deleteTransaction(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to delete transaction",
                error: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Transaction not found"
            });
        }

        res.json({
            message: "Transaction deleted successfully"
        });
    });
};

module.exports = {
    getTransactions,
    getTransaction,
    createTransaction,
    editTransaction,
    removeTransaction
};