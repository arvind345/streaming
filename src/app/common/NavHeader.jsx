import React, {Component} from 'react';
import { NavLink } from "react-router-dom";


class NavHeader extends Component {
    render() {
        return (
            <div>

                <h1>{}</h1>

                <NavLink to="/" className="button">Home</NavLink> |
                <NavLink to="/detail" className="button"> Detail Page</NavLink>

            </div>
        );
    }
}

export default NavHeader;