import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { faker } from "@faker-js/faker";
import { setUsers } from "../../redux";
import NewuserCSS from "./newuser.module.css";
import { useNavigate } from "react-router-dom";

const Newuser = () => {
    const user = useMemo(() => ({
        username: faker.internet.userName(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.string.numeric({ length: 10, min: 6000000000, max: 9999999999 }),
        city: faker.location.city(),
        country: faker.location.country()
    }), [])
    const [password, setPassword] = useState(faker.internet.password())
    const [gender, setGender] = useState('male')
    const [active, setActive] = useState('yes')

    const users = useSelector(state => state.users.users)
    const navigate = useNavigate()

    const save = e => {
        e.preventDefault();

        const newUser = {
            name: document.getElementById('name').value || user.name,
            username: document.getElementById('username').value || user.username,
            email: document.getElementById('email').value || user.email,
            phone: document.getElementById('phone').value || user.phone,
            title: faker.person.jobTitle(),
            dob: faker.date.past({ years: 60 }).toISOString().split("T")[0],
            city: document.getElementById('address').value?.split('|')[0] || user.city,
            country: document.getElementById('address').value?.split('|')[1] || user.country,
            active: document.getElementById('active').value === 'yes' ? 'Active' : 'Inactive',
        }

        setUsers([...users, newUser])

        navigate('/user/' + newUser.email)
    }

    return (
        <div className={NewuserCSS.newUser}>
            <h1 className={NewuserCSS.newUserTitle}>New User</h1>
            <form className={NewuserCSS.newUserForm}>
                <div className={NewuserCSS.newUserItem}>
                    <label>Username</label>
                    <input id="username" type="text" placeholder={user.username} />
                </div>
                <div className={NewuserCSS.newUserItem}>
                    <label>Full Name</label>
                    <input id="name" type="text" placeholder={user.name} />
                </div>
                <div className={NewuserCSS.newUserItem}>
                    <label>Email</label>
                    <input id="email" type="email" placeholder={user.email} />
                </div>
                <div className={NewuserCSS.newUserItem}>
                    <label>Password</label>
                    <input id="password" type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className={NewuserCSS.newUserItem}>
                    <label>Phone</label>
                    <input id="phone" type="text" placeholder={user.phone} />
                </div>
                <div className={NewuserCSS.newUserItem}>
                    <label>Address</label>
                    <input id="address" type="text" placeholder={`${user.city} | ${user.country}`} />
                </div>
                <div className={NewuserCSS.newUserItem}>
                    <label>Gender</label>
                    <div className={NewuserCSS.newUserGender}>
                        <input type="radio" name="gender" id="male" value="male" checked={gender.toLowerCase() === "male"} onChange={e => e.target.checked && setGender(e.target.value)} />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" checked={gender.toLowerCase() === "female"} onChange={e => e.target.checked && setGender(e.target.value)} />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" checked={gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female"} onChange={e => e.target.checked && setGender(e.target.value)} />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className={NewuserCSS.newUserItem}>
                    <label>Active</label>
                    <select className={NewuserCSS.newUserSelect} name="active" id="active" value={active} onChange={e => setActive(e.target.value)}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button type="button" className={NewuserCSS.newUserButton} onClick={save}>Create</button>
            </form>
        </div>
    )
}

export default Newuser