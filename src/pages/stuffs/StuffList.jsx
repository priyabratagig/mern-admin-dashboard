import { DeleteOutline, Search } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUsers } from '../../redux'
import Avatar, { genConfig } from "react-nice-avatar";
import SelectSortTable from "../../components/mui-table/SelectSortTable";
import StufflistCSS from "./stufflist.module.css";
import { useState } from "react";

const StuffList = () => {
    const stuffs = useSelector((state) => state.users.users)

    const [filterdStuffs, setFilterdStuffs] = useState(stuffs)

    const filter = (e) => {
        setFilterdStuffs(stuffs.filter((stuff) => stuff.name.toLowerCase().includes(e.target.value.toLowerCase()) || stuff.email.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const handleDelete = (email) => {
        setUsers(stuffs.filter((stuff) => stuff.email !== email))
        setFilterdStuffs(filterdStuffs.filter((stuff) => stuff.email !== email))
    }

    const headCells = [
        { id: "Stuff", numeric: false, disablePadding: false, label: "Stuff", style: { maxWidth: "20rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
        { id: "Email", numeric: false, disablePadding: false, label: "Email", style: { maxWidth: "20rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
        { id: "Active", numeric: false, disablePadding: false, label: "active", style: { maxWidth: "12rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
        { id: "Transaction", numeric: true, disablePadding: false, label: "Transaction Volume", style: { maxWidth: "16rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
        { id: "Action", numeric: false, disablePadding: false, label: "Action", style: { maxWidth: "15rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
    ]

    const body = filterdStuffs.map((stuff) => {
        const avatarConfig = genConfig(stuff.email)
        return {
            Stuff: (
                <div className={StufflistCSS.stuffListStuff}>
                    <Avatar {...avatarConfig} className={StufflistCSS.stuffListImg} />
                    {stuff.name}
                </div>
            ),
            Email: stuff.email,
            Active: stuff.active,
            Transaction: stuff.transactions,
            Action: (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Link to={"/user/" + stuff.email}>
                        <button className={StufflistCSS.stuffListEdit}>Edit</button>
                    </Link>
                    <DeleteOutline
                        className={StufflistCSS.stuffListDelete}
                        onClick={() => handleDelete(stuff.email)}
                    />
                </div>
            ),
        }
    })

    const header = <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p className={StufflistCSS.stuffListTitle}>Stuffs</p>
        <span style={{ height: "3rem", display: "flex", columnGap: "0.5rem", alignItems: "center", border: "0.1rem solid #b2aeae", borderRadius: "0.2rem", padding: "0.2rem 0.5rem" }}>
            <Search />
            <input type="search" onChange={filter} /></span>
    </div>

    return (
        <div className={StufflistCSS.stuffList}>
            <SelectSortTable header={header} headCells={headCells} body={body} />
        </div>
    );
}

export default StuffList;