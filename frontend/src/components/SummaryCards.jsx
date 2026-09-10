function SummaryCards({ transactions }) {

    const totalIncome = transactions
        .filter((transaction) => transaction.type === "income")
        .reduce(
            (total, transaction) =>
                total + Number(transaction.amount),
            0
        );

    const totalExpenses = transactions
        .filter((transaction) => transaction.type === "expense")
        .reduce(
            (total, transaction) =>
                total + Number(transaction.amount),
            0
        );

    const balance = totalIncome - totalExpenses;

    return (
        <div className="summary-grid">

            <div className="summary-card income-card">
                <div className="summary-icon">
                    💰
                </div>

                <div>
                    <h3>Total Income</h3>

                    <p>
                        ₹{totalIncome.toFixed(2)}
                    </p>
                </div>
            </div>

            <div className="summary-card expense-card">
                <div className="summary-icon">
                    💸
                </div>

                <div>
                    <h3>Total Expenses</h3>

                    <p>
                        ₹{totalExpenses.toFixed(2)}
                    </p>
                </div>
            </div>

            <div className="summary-card balance-card">
                <div className="summary-icon">
                    📊
                </div>

                <div>
                    <h3>Current Balance</h3>

                    <p>
                        ₹{balance.toFixed(2)}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default SummaryCards;