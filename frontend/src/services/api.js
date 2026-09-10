const API_URL = "http://localhost:5000/api";

// Get all transactions
export const getTransactions = async () => {
    const response = await fetch(`${API_URL}/transactions`);

    if (!response.ok) {
        throw new Error("Failed to fetch transactions");
    }

    return response.json();
};

// Get one transaction
export const getTransaction = async (id) => {
    const response = await fetch(
        `${API_URL}/transactions/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch transaction");
    }

    return response.json();
};

// Add transaction
export const addTransaction = async (transaction) => {
    const response = await fetch(
        `${API_URL}/transactions`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transaction)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to add transaction");
    }

    return response.json();
};

// Update transaction
export const updateTransaction = async (id, transaction) => {
    const response = await fetch(
        `${API_URL}/transactions/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transaction)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update transaction");
    }

    return response.json();
};

// Delete transaction
export const deleteTransaction = async (id) => {
    const response = await fetch(
        `${API_URL}/transactions/${id}`,
        {
            method: "DELETE"
        }
    );

    if (!response.ok) {
        throw new Error("Failed to delete transaction");
    }

    return response.json();
};