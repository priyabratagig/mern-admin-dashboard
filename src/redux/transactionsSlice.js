import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const getTransactions = () => {
    const transactions = Array(4).fill(null)

    return transactions.map(() => {
        return {
            fullName: faker.person.fullName(),
            email: faker.internet.email(),
            date: faker.date.recent().toString().slice(0, 21),
            amount: faker.finance.amount({ min: 500, max: 5000, precision: 0.01 }),
            status: faker.helpers.arrayElement(["Approved", "Pending", "Rejected"])
        }
    })
}

const transactions = getTransactions()

const transactionsSlice = createSlice({
    name: "transactions",
    initialState: {
        transactions
    },
    reducers: {
        setTransactions: (state, action) => {
            state.transactions = action.payload
        }
    }
})

export default transactionsSlice.reducer