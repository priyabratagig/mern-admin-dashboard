import { configureStore } from "@reduxjs/toolkit";
import chartsSlice from "./chartsSlice";
import usersSlice from "./usersSlice";
import transactionsSlice from "./transactionsSlice";

const store = configureStore({
    reducer: {
        charts: chartsSlice,
        users: usersSlice,
        transactions: transactionsSlice
    }
})

export default store
export const dispatch = store.dispatch