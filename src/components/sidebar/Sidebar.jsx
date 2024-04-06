import { useEffect, useState } from "react";
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
    PersonAddAlt,
    KeyboardDoubleArrowLeftRounded,
    KeyboardDoubleArrowRightRounded
} from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import SidebarCSS from "./sidebar.module.css";

const Sidebar = () => {
    const navLinkState = ({ isActive }) => isActive ? SidebarCSS.link + " " + SidebarCSS.active : SidebarCSS.link
    const location = useLocation()
    const hashid = location.hash

    useEffect(() => {
        const element = document.querySelector(hashid || undefined);
        const remToPx = parseFloat(getComputedStyle(document.body).fontSize);
        element && element.parentElement.parentElement.scrollTo(0, element.offsetTop - 6 * remToPx)
    }, [hashid])

    const [toggle, setToggle] = useState(true)
    useEffect(() => {
        const toggleButton = document.getElementById("toggle-button");
        setToggle(toggleButton.checkVisibility())
        const resize = () => setToggle(toggleButton.checkVisibility())
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [])
    const toggleSidebar = () => setToggle(toggle => !toggle)

    const linkClick = () => {
        const toggleButton = document.getElementById("toggle-button");
        if (toggleButton.checkVisibility()) toggleSidebar()
    }

    const doNothing = () => { }

    return (
        <div className={SidebarCSS.sidebar}>
            <div className={SidebarCSS.sidebarWrapper + (toggle ? " " + SidebarCSS.hide : "")}>
                <div className={SidebarCSS.sidebarMenu}>
                    <h3 className={SidebarCSS.sidebarTitle}>Dashboard</h3>
                    <ul className={SidebarCSS.sidebarList}>
                        <NavLink to="/home" className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <LineStyle className={SidebarCSS.sidebarIcon} />
                                Home
                            </li>
                        </NavLink>
                        <NavLink to="/home/analytics#analytics" className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <Timeline className={SidebarCSS.sidebarIcon} />
                                Analytics
                            </li>
                        </NavLink>
                        <NavLink to="/home/sales#sales" className={navLinkState} onClick={linkClick}>
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
                        <NavLink to="/users" className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <PermIdentity className={SidebarCSS.sidebarIcon} />
                                Users
                            </li>
                        </NavLink>
                        <NavLink to="/new-user" className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <PersonAddAlt className={SidebarCSS.sidebarIcon} />
                                New User
                            </li>
                        </NavLink>
                        <NavLink to="/products" className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <Storefront className={SidebarCSS.sidebarIcon} />
                                Products
                            </li>
                        </NavLink>
                        <NavLink to="/newproduct" className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <LocalOffer className={SidebarCSS.sidebarIcon} />
                                New Product
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className={SidebarCSS.sidebarMenu}>
                    <h3 className={SidebarCSS.sidebarTitle}>Settings</h3>
                    <ul className={SidebarCSS.sidebarList}>
                        <NavLink to="/emailSettings" className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <MailOutline className={SidebarCSS.sidebarIcon} />
                                Mail
                            </li>
                        </NavLink>
                        <NavLink to="/feedbacksettings" className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <DynamicFeed className={SidebarCSS.sidebarIcon} />
                                Feedback
                            </li>
                        </NavLink>
                        <NavLink to="/messagesettings" className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <ChatBubbleOutline className={SidebarCSS.sidebarIcon} />
                                Messages
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className={SidebarCSS.sidebarMenu}>
                    <h3 className={SidebarCSS.sidebarTitle}>Staff</h3>
                    <ul className={SidebarCSS.sidebarList}>
                        <NavLink to="/managestuffs" className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <WorkOutline className={SidebarCSS.sidebarIcon} />
                                Manage
                            </li>
                        </NavLink>
                        <NavLink to="/analytics" className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <Timeline className={SidebarCSS.sidebarIcon} />
                                Analytics
                            </li>
                        </NavLink>
                        <NavLink to="/reports" className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <Report className={SidebarCSS.sidebarIcon} />
                                Reports
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className={SidebarCSS.toggleSideBar} id="toggle-button">
                <input type="radio" name="toggle-sidebar" id="show" checked={toggle} onChange={doNothing} />
                <label htmlFor="show" onClick={toggleSidebar}>
                    <KeyboardDoubleArrowLeftRounded fontSize="large" />
                </label>
                <input type="radio" name="toggle-sidebar" id="hide" checked={!toggle} onChange={doNothing} />
                <label htmlFor="hide" onClick={toggleSidebar}>
                    <KeyboardDoubleArrowRightRounded fontSize="large" />
                </label>
            </div>
        </div>
    )
}

export default Sidebar