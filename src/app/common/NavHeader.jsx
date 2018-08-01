import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import navicon from '../../assets/images/nav-icn.svg';
import bellIcn from '../../assets/images/bell-icn.svg';
import searchIcn from '../../assets/images/search-icn.svg';



class NavHeader extends Component {

    render() {
        return (

                <nav className="navbar">
                {/*<h1>{}</h1>

                <NavLink to="/" className="button">Home</NavLink> |
                <NavLink to="/detail" className="button"> Detail Page</NavLink>*/}
                    <span className="nav-span flex-1">
                         <img src={navicon} />
                    </span>
                    <span className="logo flex-9">StreamA2Z</span>

                    <span className="nav-span flex-1">
                         <img src={bellIcn} width="30" />
                    </span>
                    <span className="nav-span flex-1">
                         <img src={searchIcn} width="30"  />
                    </span>
                </nav>

        );
    }

}

export default NavHeader;