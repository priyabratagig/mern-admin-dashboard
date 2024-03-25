import { bindActionCreators } from "@reduxjs/toolkit"
import { dispatch } from "./store"
import { setUsers as _setUsers } from "./usersSlice"

export const {
    _setUsers: setUsers
} = bindActionCreators({ _setUsers }, dispatch)