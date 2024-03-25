import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import TopbarCSS from "./topbar.module.css";
import { useSelector } from "react-redux";
import Avatar, { genConfig } from "react-nice-avatar";

const Topbar = () => {
    const loggedInUser = useSelector((state) => state.users.loggedInUser)
    const avatarConfig = genConfig(loggedInUser.email)

    return (
        <div className={TopbarCSS.topbar}>
            <div className={TopbarCSS.topbarWrapper}>
                <div className={TopbarCSS.topLeft}>
                    <span className={TopbarCSS.logo}>Stylight.admin</span>
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
                    <Avatar {...avatarConfig} className={TopbarCSS.topAvatar} />
                </div>
            </div>
        </div>
    )
}

export default Topbar