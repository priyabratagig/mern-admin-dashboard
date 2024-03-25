import { DeleteOutline, Search } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUsers } from '../../redux'
import Avatar, { genConfig } from "react-nice-avatar";
import SelectSortTable from "../../components/mui-table/SelectSortTable";
import UserListCSS from "./userlist.module.css";
import { useEffect, useState } from "react";

export default function UserList() {
    const users = useSelector((state) => state.users.users)

    const [filterdUsers, setFilterdUsers] = useState(users)

    const filter = (e) => {
        setFilterdUsers(users.filter((user) => user.name.toLowerCase().includes(e.target.value.toLowerCase()) || user.email.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const handleDelete = (email) => {
        setUsers(users.filter((user) => user.email !== email))
        setFilterdUsers(filterdUsers.filter((user) => user.email !== email))
    }

    const headCells = [
        { id: "user", numeric: false, disablePadding: false, label: "User", style: { maxWidth: "20rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
        { id: "email", numeric: false, disablePadding: false, label: "Email", style: { maxWidth: "20rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
        { id: "active", numeric: false, disablePadding: false, label: "active", style: { maxWidth: "12rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
        { id: "transaction", numeric: true, disablePadding: false, label: "Transaction Volume", style: { maxWidth: "16rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
        { id: "action", numeric: false, disablePadding: false, label: "Action", style: { maxWidth: "15rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
    ]

    const body = filterdUsers.map((user) => {
        const avatarConfig = genConfig(user.email)
        return {
            user: (
                <div className={UserListCSS.userListUser}>
                    <Avatar {...avatarConfig} className={UserListCSS.userListImg} />
                    {user.name}
                </div>
            ),
            email: user.email,
            active: user.active,
            transaction: user.transactions,
            action: (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Link to={"/user/" + user.email}>
                        <button className={UserListCSS.userListEdit}>Edit</button>
                    </Link>
                    <DeleteOutline
                        className={UserListCSS.userListDelete}
                        onClick={() => handleDelete(user.email)}
                    />
                </div>
            ),
        }
    })

    const header = <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p className={UserListCSS.userListTitle}>User List</p>
        <span style={{ height: "3rem", display: "flex", columnGap: "0.5rem", alignItems: "center", border: "0.1rem solid #b2aeae", borderRadius: "0.2rem", padding: "0.2rem 0.5rem" }}>
            <Search />
            <input type="search" onChange={filter} /></span>
    </div>

    return (
        <div className={UserListCSS.userList}>
            <SelectSortTable header={header} headCells={headCells} body={body} />
        </div>
    );
}