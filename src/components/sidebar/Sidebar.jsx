import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@mui/icons-material";
// import { Link } from "react-router-dom";
import SidebarCSS from "./sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={SidebarCSS.sidebar}>
            <div className={SidebarCSS.sidebarWrapper}>
                <div className={SidebarCSS.sidebarMenu}>
                    <h3 className={SidebarCSS.sidebarTitle}>Dashboard</h3>
                    <ul className={SidebarCSS.sidebarList}>
                        <Link to="/home" className={SidebarCSS.link}>
                            <li className={SidebarCSS.sidebarListItem + " " + SidebarCSS.active}>
                                <LineStyle className={SidebarCSS.sidebarIcon} />
                                Home
                            </li>
                        </Link>
                        <li className={SidebarCSS.sidebarListItem}>
                            <Timeline className={SidebarCSS.sidebarIcon} />
                            Analytics
                        </li>
                        <li className={SidebarCSS.sidebarListItem}>
                            <TrendingUp className={SidebarCSS.sidebarIcon} />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className={SidebarCSS.sidebarMenu}>
                    <h3 className={SidebarCSS.sidebarTitle}>Quick Menu</h3>
                    <ul className={SidebarCSS.sidebarList}>
                        <Link to="/users" className={SidebarCSS.link}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <PermIdentity className={SidebarCSS.sidebarIcon} />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className={SidebarCSS.link}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <Storefront className={SidebarCSS.sidebarIcon} />
                                Products
                            </li>
                        </Link>
                        <li className={SidebarCSS.sidebarListItem}>
                            <AttachMoney className={SidebarCSS.sidebarIcon} />
                            Transactions
                        </li>
                        <li className={SidebarCSS.sidebarListItem}>
                            <BarChart className={SidebarCSS.sidebarIcon} />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className={SidebarCSS.sidebarMenu}>
                    <h3 className={SidebarCSS.sidebarTitle}>Notifications</h3>
                    <ul className={SidebarCSS.sidebarList}>
                        <li className={SidebarCSS.sidebarListItem}>
                            <MailOutline className={SidebarCSS.sidebarIcon} />
                            Mail
                        </li>
                        <li className={SidebarCSS.sidebarListItem}>
                            <DynamicFeed className={SidebarCSS.sidebarIcon} />
                            Feedback
                        </li>
                        <li className={SidebarCSS.sidebarListItem}>
                            <ChatBubbleOutline className={SidebarCSS.sidebarIcon} />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className={SidebarCSS.sidebarMenu}>
                    <h3 className={SidebarCSS.sidebarTitle}>Staff</h3>
                    <ul className={SidebarCSS.sidebarList}>
                        <li className={SidebarCSS.sidebarListItem}>
                            <WorkOutline className={SidebarCSS.sidebarIcon} />
                            Manage
                        </li>
                        <li className={SidebarCSS.sidebarListItem}>
                            <Timeline className={SidebarCSS.sidebarIcon} />
                            Analytics
                        </li>
                        <li className={SidebarCSS.sidebarListItem}>
                            <Report className={SidebarCSS.sidebarIcon} />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar