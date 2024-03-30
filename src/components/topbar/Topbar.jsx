import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import TopbarCSS from "./topbar.module.css";
import { useSelector } from "react-redux";
import Avatar, { genConfig } from "react-nice-avatar";
import { Link } from "react-router-dom";

const Topbar = () => {
    const loggedInUser = useSelector((state) => state.users.users)[0]
    const avatarConfig = genConfig(loggedInUser.email)

    return (
        <div className={TopbarCSS.topbar}>
            <div className={TopbarCSS.topbarWrapper}>
                <div className={TopbarCSS.topLeft}>
                    <Link to="/home">
                        <span className={TopbarCSS.logo}>Stylight.admin</span>
                    </Link>
                </div>
                <div className={TopbarCSS.topRight}>
                    <div className={TopbarCSS.topbarIconContainer}>
                        <NotificationsNone fontSize="large" />
                        <span className={TopbarCSS.topIconBadge}>2</span>
                    </div>
                    <div className={TopbarCSS.topbarIconContainer}>
                        <Language fontSize="large" />
                        <span className={TopbarCSS.topIconBadge}>2</span>
                    </div>
                    <div className={TopbarCSS.topbarIconContainer}>
                        <Settings fontSize="large" />
                    </div>
                    <Link to={'/user/' + loggedInUser.email}>
                        <Avatar {...avatarConfig} className={TopbarCSS.topAvatar} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Topbar