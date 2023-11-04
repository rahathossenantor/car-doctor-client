import { useTheme } from "../../hooks/useTheme";
import "./switch.css";

const Switch = () => {
    const { changeTheme } = useTheme();

    return (
        <label onClick={changeTheme} className="ui-switch">
            <input type="checkbox" />
                <div className="slider">
                    <div className="circle"></div>
                </div>
        </label>
    );
};

export default Switch;
