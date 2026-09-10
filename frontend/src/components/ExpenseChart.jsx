import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

function ExpenseChart({ transactions }) {

    const expenseTransactions = transactions.filter(
        (transaction) =>
            transaction.type === "expense"
    );

    const categoryTotals = {};

    expenseTransactions.forEach((transaction) => {
        const category = transaction.category;

        if (!categoryTotals[category]) {
            categoryTotals[category] = 0;
        }

        categoryTotals[category] += Number(
            transaction.amount
        );
    });

    const chartData = Object.keys(categoryTotals).map(
        (category) => ({
            name: category,
            value: Number(
                categoryTotals[category].toFixed(2)
            )
        })
    );

    if (chartData.length === 0) {
        return (
            <div className="chart-container">
                <h2>Expense Distribution</h2>
                <p>No expense data available.</p>
            </div>
        );
    }

    return (
        <div className="chart-container">

            <h2>Expense Distribution</h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >
                <PieChart>

                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        label
                    >
                        {chartData.map(
                            (entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                />
                            )
                        )}
                    </Pie>

                    <Tooltip
                        formatter={(value) =>
                            `₹${value}`
                        }
                    />

                    <Legend />

                </PieChart>
            </ResponsiveContainer>

        </div>
    );
}

export default ExpenseChart;