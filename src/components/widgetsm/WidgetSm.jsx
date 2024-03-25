import { useSelector } from "react-redux";
import { Visibility } from "@mui/icons-material";
import Avatar, { genConfig } from "react-nice-avatar";
import WidgetsmCSS from "./widgetsm.module.css";

export default function WidgetSm() {
    const newUsers = useSelector((state) => state.users.newUsers)

    return (
        <div className={WidgetsmCSS.widgetSm}>
            <span className={WidgetsmCSS.widgetSmTitle}>New Join Members</span>
            <ul className={WidgetsmCSS.widgetSmList}>
                {newUsers.map((user) => {
                    const avatarConfig = genConfig(user.email)

                    return (
                        <li className={WidgetsmCSS.widgetSmListItem} key={user.email}>
                            <Avatar {...avatarConfig} className={WidgetsmCSS.widgetSmImg} />
                            <div className={WidgetsmCSS.widgetSmUser}>
                                <span className={WidgetsmCSS.widgetSmUsername}>{user.name}</span>
                                <span className={WidgetsmCSS.widgetSmUserTitle}>{user.title}</span>
                            </div>
                            <button className={WidgetsmCSS.widgetSmButton}>
                                <Visibility className={WidgetsmCSS.widgetSmIcon} />
                                Display
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}