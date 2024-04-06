import { bindActionCreators } from "@reduxjs/toolkit"
import { dispatch } from "./store"
import { setUsers as _setUsers } from "./usersSlice"
import { setProducts as _setProducts } from "./productsSlice"
import { setEmailSettings as _setEmailSettings } from "./settingsSlice"

export const {
    _setUsers: setUsers,
    _setProducts: setProducts,
    _setEmailSettings: setEmailSettings
} = bindActionCreators({ _setUsers, _setProducts, _setEmailSettings }, dispatch)