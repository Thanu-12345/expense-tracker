const db = require("../config/db");

// Get all transactions
const getAllTransactions = (callback) => {
    const sql = `
        SELECT *
        FROM transactions
        ORDER BY transaction_date DESC, id DESC
    `;

    db.query(sql, callback);
};

// Get one transaction
const getTransactionById = (id, callback) => {
    const sql = `
        SELECT *
        FROM transactions
        WHERE id = ?
    `;

    db.query(sql, [id], callback);
};

// Add transaction
const addTransaction = (transaction, callback) => {
    const sql = `
        INSERT INTO transactions
        (
            title,
            amount,
            type,
            category,
            description,
            transaction_date
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            transaction.title,
            transaction.amount,
            transaction.type,
            transaction.category,
            transaction.description,
            transaction.transaction_date
        ],
        callback
    );
};

// Update transaction
const updateTransaction = (id, transaction, callback) => {
    const sql = `
        UPDATE transactions
        SET
            title = ?,
            amount = ?,
            type = ?,
            category = ?,
            description = ?,
            transaction_date = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            transaction.title,
            transaction.amount,
            transaction.type,
            transaction.category,
            transaction.description,
            transaction.transaction_date,
            id
        ],
        callback
    );
};

// Delete transaction
const deleteTransaction = (id, callback) => {
    const sql = `
        DELETE FROM transactions
        WHERE id = ?
    `;

    db.query(sql, [id], callback);
};

module.exports = {
    getAllTransactions,
    getTransactionById,
    addTransaction,
    updateTransaction,
    deleteTransaction
};