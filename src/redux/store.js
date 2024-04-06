import { configureStore } from "@reduxjs/toolkit";
import chartsSlice from "./chartsSlice";
import usersSlice from "./usersSlice";
import transactionsSlice from "./transactionsSlice";
import productsSlice from "./productsSlice";
import settingsSlice from './settingsSlice'

const store = configureStore({
    reducer: {
        charts: chartsSlice,
        users: usersSlice,
        transactions: transactionsSlice,
        products: productsSlice,
        settings: settingsSlice
    }
})

export default store
export const dispatch = store.dispatch