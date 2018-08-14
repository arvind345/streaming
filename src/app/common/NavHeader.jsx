import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import navicon from '../../assets/images/nav-icn.svg';
import bellIcn from '../../assets/images/bell-icn.svg';
import searchIcn from '../../assets/images/search-icn.svg';
import userIcn from '../../assets/images/user-icn.svg';
import arrowIcn from '../../assets/images/arrow-icn.svg';
import $ from "jquery";


class NavHeader extends Component {
    componentDidMount(){
        $(document).ready(function(){
            $('#navicon').click(function(){
                $('.m-menu').addClass('active');
            });
            $('.overlay_menu').click(function(){
                $('.m-menu').removeClass('active');
            })
        })
    }


    render() {
        return (

        <div>
                <nav className="navbar">
                {/*<h1>{}</h1>

                <NavLink to="/" className="button">Home</NavLink> |
                <NavLink to="/detail" className="button"> Detail Page</NavLink>*/}
                    <div className="container m-d-flex">
                        <span className="nav-span ml-1 flex-1">
                             <img src={navicon}  onclick="openNav()" id="navicon" />
                        </span>
                        <span className="logo flex-9">StreamA2Z</span>

                        <span className="nav-span flex-1">
                             <img src={bellIcn} width="30" />
                        </span>
                        <span className="nav-span flex-1">
                             <img src={searchIcn} width="30"  />
                        </span>
                    </div>
                    <div className="d-nav-items m-m-flex">
                        <span className="logo flex-9">StreamA2Z</span>
                        <div className="dsk-navbar">
                            <ul className="dsk-navbar-nav text-uppercase">
                                <li className="item-nav"><a className="nav-link" href="#">Latest Movies/Tv Shows</a></li>
                                <li className="item-nav"><a className="nav-link" href="#">Movies</a></li>
                                <li className="item-nav"><a className="nav-link" href="#">Shows</a></li>
                                <li className="item-nav"><a className="nav-link" href="#">Langue</a></li>
                                <li className="item-nav"><a className="nav-link" href="#">More</a></li>
                            </ul>
                            <form className="orm-inline">
                                <div className="input-group">

                                </div>
                            </form>
                        </div>
                    </div>
                </nav>

                <div id="m-menu" className="m-menu">
                    <div className="sidenav">
                    <div className="m-menu-head row">
                        <div className="col-2"><img src={userIcn} /> </div>
                        <div className="col-8 pt-1 navBar_mobileview text-uppercase">User Login</div>
                        <div className="col-2 text-lg-right"><img className="rotaterightImage" src={arrowIcn} /> </div>
                    </div>
                    <div className="m-nvabar-box">
                        <ul className="m-navbar pl-3 pr-2 pb-1 m-0">
                            <li><a href="#"> Latest Movies/Tv Shows <img className="rotaterightImage m-nvabar-arrow" src={arrowIcn} /></a></li>
                            <li><a href="#">TV Shows <img className="rotaterightImage m-nvabar-arrow" src={arrowIcn} /></a></li>
                            <li><a href="#">Events <img className="rotaterightImage m-nvabar-arrow" src={arrowIcn} /></a></li>
                            <li><a href="#">Language <img className="rotaterightImage m-nvabar-arrow" src={arrowIcn} /></a></li>
                            <li><a href="#">Geners <img className="rotaterightImage m-nvabar-arrow" src={arrowIcn} /></a></li>
                            <li><a href="#">Chennels <img className="rotaterightImage m-nvabar-arrow" src={arrowIcn} /></a></li>
                        </ul>
                        <ul className="m-navbar m-navbar pl-3 pr-2 pb-1 m-0 m-dt-menu">
                            <li><a href="#">About Streaming</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                    <div className="overlay_menu"></div>
                </div>

        </div>

        );
    }

}

export default NavHeader;