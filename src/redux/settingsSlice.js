import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";



const emailServer = {
    server: 'smpt',
    port: faker.internet.port(),
    email: faker.internet.email(),
    password: faker.internet.password()
}

const settingsSlice = createSlice(
    {
        name: "settings",
        initialState: {
            email: emailServer
        },
        reducers: {
            setEmailSettings(state, action) {
                return { ...state, email: action.payload }
            }
        }
    }
)

export default settingsSlice.reducer
export const { setEmailSettings } = settingsSlice.actions