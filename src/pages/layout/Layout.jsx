import { Outlet } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import LayoutCSS from "./layout.module.css";

const Layout = () => {
    return (
        <section className={LayoutCSS.container}>
            <Topbar />
            <Sidebar />
            <Outlet />
        </section>
    )
}

export default Layout