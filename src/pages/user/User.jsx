import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Avatar, { genConfig } from "react-nice-avatar";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
} from "@mui/icons-material";
import UserCSS from "./user.module.css";
import { setUsers } from "../../redux";


const User = () => {
    const navigate = useNavigate()
    const users = useSelector(state => state.users.users)
    const { email } = useParams()
    const user = users.find(user => user.email === email)
    const avatarConfig = genConfig(email)

    const updateUser = (e) => {
        e.preventDefault()

        const updatedUser = {
            ...user,
            name: document.getElementById("name").value || user.name,
            username: document.getElementById("username").value || user.username,
            email: document.getElementById("email").value || user.email,
            phone: document.getElementById("phone").value || user.phone,
            city: document.getElementById("address").value?.split(" | ")[0] || user.city,
            country: document.getElementById("address").value?.split(" | ")[1] || user.country,
        }

        console.log(updatedUser)

        setUsers(users.map(user => (user.email === email ? updatedUser : user)))

        if (email !== updatedUser.email) navigate("/user/" + updatedUser.email)
    }

    return (
        <div className={UserCSS.user}>
            <div className={UserCSS.userTitleContainer}>
                <h1 className={UserCSS.userTitle}>Edit User</h1>
                <Link to="/new-user">
                    <button className={UserCSS.userAddButton}>Create</button>
                </Link>
            </div>
            <div className={UserCSS.userContainer}>
                <div className={UserCSS.userShow}>
                    <div className={UserCSS.userShowTop}>
                        <Avatar {...avatarConfig} className={UserCSS.userShowImg} />
                        <div className={UserCSS.userShowTopTitle}>
                            <span className={UserCSS.userShowUsername}>{user.name}</span>
                            <span className={UserCSS.userShowUserTitle}>{user.title}</span>
                        </div>
                    </div>
                    <div className={UserCSS.userShowBottom}>
                        <span className={UserCSS.userShowTitle}>Account Details</span>
                        <div className={UserCSS.userShowInfo}>
                            <PermIdentity className={UserCSS.userShowIcon} />
                            <span className={UserCSS.userShowInfoTitle}>{user.username}</span>
                        </div>
                        <div className={UserCSS.userShowInfo}>
                            <CalendarToday className={UserCSS.userShowIcon} />
                            <span className={UserCSS.userShowInfoTitle}>{user.dob}</span>
                        </div>
                        <span className={UserCSS.userShowTitle}>Contact Details</span>
                        <div className={UserCSS.userShowInfo}>
                            <PhoneAndroid className={UserCSS.userShowIcon} />
                            <span className={UserCSS.userShowInfoTitle}>{user.phone}</span>
                        </div>
                        <div className={UserCSS.userShowInfo}>
                            <MailOutline className={UserCSS.userShowIcon} />
                            <span className={UserCSS.userShowInfoTitle}>{user.email}</span>
                        </div>
                        <div className={UserCSS.userShowInfo}>
                            <LocationSearching className={UserCSS.userShowIcon} />
                            <span className={UserCSS.userShowInfoTitle}>{user.city} | {user.country}</span>
                        </div>
                    </div>
                </div>
                <div className={UserCSS.userUpdate}>
                    <span className={UserCSS.userUpdateTitle}>Edit</span>
                    <form className={UserCSS.userUpdateForm}>
                        <div className={UserCSS.userUpdateLeft}>
                            <div className={UserCSS.userUpdateItem}>
                                <label>Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    placeholder={user.username}
                                    className={UserCSS.userUpdateInput}
                                />
                            </div>
                            <div className={UserCSS.userUpdateItem}>
                                <label>Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder={user.name}
                                    className={UserCSS.userUpdateInput}
                                />
                            </div>
                            <div className={UserCSS.userUpdateItem}>
                                <label>Email</label>
                                <input
                                    id="email"
                                    type="text"
                                    placeholder={user.email}
                                    className={UserCSS.userUpdateInput}
                                />
                            </div>
                            <div className={UserCSS.userUpdateItem}>
                                <label>Phone</label>
                                <input
                                    id="phone"
                                    type="text"
                                    placeholder={user.phone}
                                    className={UserCSS.userUpdateInput}
                                />
                            </div>
                            <div className={UserCSS.userUpdateItem}>
                                <label>Address</label>
                                <input
                                    id="address"
                                    type="text"
                                    placeholder={`${user.city} | ${user.country}`}
                                    className={UserCSS.userUpdateInput}
                                />
                            </div>
                        </div>
                        <div className={UserCSS.userUpdateRight}>
                            <div className={UserCSS.userUpdateUpload}>
                                <Avatar {...avatarConfig} className={UserCSS.userUpdateImg} shape="rounded" />
                            </div>
                            <button type="button" className={UserCSS.userUpdateButton} onClick={updateUser}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User