import { SettingsSuggest } from "@mui/icons-material";
import UnderConstructionCSS from "./underconstruction.module.css";

const UnderConstruction = () => {
    return (
        <div className={UnderConstructionCSS.underconstruction}>
            <h1>Feature will be added soon</h1>
            <div className={UnderConstructionCSS.underconstructionIcon}>
                <span>
                    <SettingsSuggest style={{ fontSize: 'inherit' }} />
                </span>
            </div>
        </div>
    );
}

export default UnderConstruction;