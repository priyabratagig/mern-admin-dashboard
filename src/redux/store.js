import { configureStore } from "@reduxjs/toolkit";
import chartsSlice from "./chartsSlice";
import usersSlice from "./usersSlice";
import transactionsSlice from "./transactionsSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
    reducer: {
        charts: chartsSlice,
        users: usersSlice,
        transactions: transactionsSlice,
        products: productsSlice
    }
})

export default store
export const dispatch = store.dispatch