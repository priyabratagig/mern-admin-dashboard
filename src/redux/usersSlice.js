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

const newUsers = getNewUser()

const usersSlice = createSlice(
    {
        name: "users",
        initialState: {
            newUsers,
            loggedInUser: {
                name: faker.person.fullName(),
                title: faker.person.jobTitle(),
                email: faker.internet.email()
            }
        },
        reducers: {
            setNewUsers: (state, action) => {
                state.newUsers = action.payload
            }
        }
    }
)

export default usersSlice.reducer