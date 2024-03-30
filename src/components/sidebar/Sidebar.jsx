import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
    LocalOffer,
    PersonAddAlt
} from "@mui/icons-material";
import SidebarCSS from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const navLinkState = ({ isActive }) => isActive ? SidebarCSS.link + " " + SidebarCSS.active : SidebarCSS.link

    return (
        <div className={SidebarCSS.sidebar}>
            <div className={SidebarCSS.sidebarWrapper}>
                <div className={SidebarCSS.sidebarMenu}>
                    <h3 className={SidebarCSS.sidebarTitle}>Dashboard</h3>
                    <ul className={SidebarCSS.sidebarList}>
                        <NavLink to="/home" className={navLinkState}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <LineStyle className={SidebarCSS.sidebarIcon} />
                                Home
                            </li>
                        </NavLink>
                        <NavLink to="/home/analytics#analytics" className={navLinkState}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <Timeline className={SidebarCSS.sidebarIcon} />
                                Analytics
                            </li>
                        </NavLink>
                        <NavLink to="/home/sales#sales" className={navLinkState}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <TrendingUp className={SidebarCSS.sidebarIcon} />
                                Sales
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className={SidebarCSS.sidebarMenu}>
                    <h3 className={SidebarCSS.sidebarTitle}>Quick Menu</h3>
                    <ul className={SidebarCSS.sidebarList}>
                        <NavLink to="/users" className={navLinkState}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <PermIdentity className={SidebarCSS.sidebarIcon} />
                                Users
                            </li>
                        </NavLink>
                        <NavLink to="/new-user" className={navLinkState}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <PersonAddAlt className={SidebarCSS.sidebarIcon} />
                                New User
                            </li>
                        </NavLink>
                        <NavLink to="/products" className={navLinkState}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <Storefront className={SidebarCSS.sidebarIcon} />
                                Products
                            </li>
                        </NavLink>
                        <NavLink to="/newproduct" className={navLinkState}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <LocalOffer className={SidebarCSS.sidebarIcon} />
                                New Product
                            </li>
                        </NavLink>
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