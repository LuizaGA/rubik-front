import { NavLink } from 'react-router-dom';

const LinkWrapper = props => {
    return (
        <NavLink {...props}
            style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
                hover: "#D95624"
            }}
        />
    );
}
export default LinkWrapper;