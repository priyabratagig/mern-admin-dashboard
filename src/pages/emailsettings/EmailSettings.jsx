import { useState } from "react";
import { useSelector } from "react-redux";
import { setEmailSettings } from '../../redux'
import EmailSettingsCSS from "./emailsettings.module.css";

const EmailSettings = () => {
    const emailSettings = useSelector(state => state.settings.email)

    const [server, setServer] = useState(emailSettings.server)
    const [password, setPassword] = useState(emailSettings.password)

    const saveSettings = (e) => {
        e.preventDefault();

        const newEmailSettings = {
            server: server,
            port: document.getElementById('port').value || emailSettings.port,
            email: document.getElementById('email').value || emailSettings.email,
            password: password
        }

        setEmailSettings(newEmailSettings)
    }

    const doNothing = () => { }

    return (
        <div className={EmailSettingsCSS.emailSettings}>
            <h1 className={EmailSettingsCSS.title}>Email Settings</h1>
            <form className={EmailSettingsCSS.emailSettingsForm}>
                <div className={EmailSettingsCSS.emailSettingsItem}>
                    <label>Server</label>
                    <select name="server" id="server" value={server} onChange={e => setServer(e.target.value)}>
                        <option value="smtp">SMTP</option>
                    </select>
                </div>
                <div className={EmailSettingsCSS.emailSettingsItem}>
                    <label>Port</label>
                    <input type="number" id="port" name="port" placeholder={emailSettings.port} />
                </div>
                <div className={EmailSettingsCSS.emailSettingsItem}>
                    <label>Email</label>
                    <input type="email" id="email" placeholder={emailSettings.email} onChange={doNothing} />
                </div>
                <div className={EmailSettingsCSS.emailSettingsItem}>
                    <label>Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="button" className={EmailSettingsCSS.saveEmailSettings} onClick={saveSettings}>Save</button>
            </form>
        </div>
    );
}

export default EmailSettings;