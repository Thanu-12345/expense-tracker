function TransactionList({
    transactions,
    onEdit,
    onDelete
}) {

    if (transactions.length === 0) {
        return (
            <div className="transaction-list">
                <h2>Transactions</h2>

                <div className="empty-message">
                    No transactions found.
                </div>
            </div>
        );
    }

    return (
        <div className="transaction-list">

            <div className="transaction-list-header">
                <div>
                    <h2>Transactions</h2>
                    <p>
                        {transactions.length} transaction
                        {transactions.length !== 1 ? "s" : ""}
                    </p>
                </div>
            </div>

            <div className="transaction-table">

                <div className="table-header">
                    <span>Transaction</span>
                    <span>Category</span>
                    <span>Type</span>
                    <span>Amount</span>
                    <span>Date</span>
                    <span>Actions</span>
                </div>

                {transactions.map((transaction) => (

                    <div
                        className="table-row"
                        key={transaction.id}
                    >

                        <div className="transaction-info">

                            <strong>
                                {transaction.title}
                            </strong>

                            {transaction.description && (
                                <small>
                                    {transaction.description}
                                </small>
                            )}

                        </div>

                        <span className="category-badge">
                            {transaction.category}
                        </span>

                        <span
                            className={
                                transaction.type === "income"
                                    ? "type-badge income-badge"
                                    : "type-badge expense-badge"
                            }
                        >
                            {transaction.type === "income"
                                ? "Income"
                                : "Expense"}
                        </span>

                        <span
                            className={
                                transaction.type === "income"
                                    ? "amount income-amount"
                                    : "amount expense-amount"
                            }
                        >
                            {transaction.type === "income"
                                ? "+"
                                : "-"}
                            ₹{Number(
                                transaction.amount
                            ).toFixed(2)}
                        </span>

                        <span className="transaction-date">
                            {transaction.transaction_date}
                        </span>

                        <div className="actions">

                            <button
                                className="edit-button"
                                onClick={() =>
                                    onEdit(transaction)
                                }
                            >
                                ✏️ Edit
                            </button>

                            <button
                                className="delete-button"
                                onClick={() =>
                                    onDelete(transaction.id)
                                }
                            >
                                🗑️ Delete
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default TransactionList;