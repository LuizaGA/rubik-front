import { NavLink } from 'react-router-dom';
import {useState} from 'react';

const LinkWrapper = props => {

    const [hoverActive, setHoverActive] = useState(false);

    const handleMouseEnter = () => {
        setHoverActive(true);
    };
  
    const handleMouseLeave = () => {
        setHoverActive(false);
    };

    return (
        <NavLink {...props}
            style={{
                textDecoration: "none",
                color: hoverActive ? "#3dcf64" : "white",
                cursor: "pointer",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
}
export default LinkWrapper;