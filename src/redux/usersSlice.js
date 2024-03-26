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
            username: faker.internet.userName(),
            email: faker.internet.email(),
            phone: faker.string.numeric({ length: 10, min: 6000000000, max: 9999999999 }),
            title: faker.person.jobTitle(),
            city: faker.location.city(),
            country: faker.location.country(),
            dob: faker.date.past({ years: 60 }).toISOString().split("T")[0],
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
        },
        reducers: {
            setNewUsers: (state, action) => {
                state.newUsers = action.payload
            },
            setUsers: (state, action) => {
                state.users = action.payload
            }
        }
    }
)

export default usersSlice.reducer
export const { setNewUsers, setUsers, setLoggedInUser } = usersSlice.actions