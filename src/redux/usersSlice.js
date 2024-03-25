import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const getNewUser = () => {
    const newUsers = Array(5).fill(null)

    return newUsers.map(() => {
        return {
            name: faker.person.fullName(),
            title: faker.person.jobTitle(),
            email: faker.internet.email()
        }
    })
}

const getUsers = () => {
    const users = Array(8).fill(null)

    return users.map(() => {
        return {
            name: faker.person.fullName(),
            title: faker.person.jobTitle(),
            email: faker.internet.email(),
            active: "active",
            transactions: faker.finance.amount({ min: 500, max: 5000, precision: 0.01 }),
        }
    })
}

const newUsers = getNewUser()
const users = getUsers()

const usersSlice = createSlice(
    {
        name: "users",
        initialState: {
            newUsers,
            users,
            loggedInUser: {
                name: faker.person.fullName(),
                title: faker.person.jobTitle(),
                email: faker.internet.email()
            }
        },
        reducers: {
            setNewUsers: (state, action) => {
                state.newUsers = action.payload
            },
            setUsers: (state, action) => {
                state.users = action.payload
            },
            setLoggedInUser: (state, action) => {
                state.loggedInUser = action.payload
            }
        }
    }
)

export default usersSlice.reducer
export const { setNewUsers, setUsers, setLoggedInUser } = usersSlice.actions