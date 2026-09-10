function Dashboard({
    searchTerm,
    setSearchTerm,
    typeFilter,
    setTypeFilter,
    categoryFilter,
    setCategoryFilter
}) {

    return (
        <div className="dashboard">

            <div className="dashboard-header">

                <div>
                    <h2>Transaction History</h2>

                    <p>
                        Search and filter your transactions
                    </p>
                </div>

            </div>

            <div className="filters">

                <div className="search-box">

                    <span>🔎</span>

                    <input
                        type="text"
                        placeholder="Search by title, category or description..."
                        value={searchTerm}
                        onChange={(e) =>
                            setSearchTerm(e.target.value)
                        }
                    />

                </div>

                <select
                    value={typeFilter}
                    onChange={(e) =>
                        setTypeFilter(e.target.value)
                    }
                >
                    <option value="all">
                        All Types
                    </option>

                    <option value="income">
                        Income
                    </option>

                    <option value="expense">
                        Expense
                    </option>
                </select>

                <select
                    value={categoryFilter}
                    onChange={(e) =>
                        setCategoryFilter(e.target.value)
                    }
                >
                    <option value="all">
                        All Categories
                    </option>

                    <option value="Food">Food</option>
                    <option value="Bills">Bills</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">
                        Entertainment
                    </option>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                    <option value="Salary">Salary</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Other">Other</option>
                </select>

            </div>

        </div>
    );
}

export default Dashboard;