import { bindActionCreators } from "@reduxjs/toolkit"
import { dispatch } from "./store"
import { setUsers as _setUsers } from "./usersSlice"
import { setProducts as _setProducts } from "./productsSlice"

export const {
    _setUsers: setUsers,
    _setProducts: setProducts
} = bindActionCreators({ _setUsers, _setProducts }, dispatch)