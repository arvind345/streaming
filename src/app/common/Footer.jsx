import React, {Component} from 'react';


class Footer extends Component {
    render() {
        return (
            <div>
                <div id="footer" className="bg-charcoal">
                    <div className="container footer py-3">
                        <div className="row">
                            <div className="col-12 text-uppercase text-white font-heading">
                                <h6 className="footer-title">Related Links</h6></div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-6"><a href="#">Latest Movies</a></div>
                            <div className="col-md-3 col-sm-6"><a href="#">Latest TV shows</a></div>
                            <div className="col-md-3 col-sm-6"><a href="#">Latest on Netflix</a></div>
                            <div className="col-md-3 col-sm-6"><a href="#">Latest on Hotstar</a></div>
                            <div className="col-md-3 col-sm-6"><a href="#">Latest on Ozee</a></div>
                            <div className="col-md-3 col-sm-6"><a href="#">Latest on Amazon Prime</a></div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <hr/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <h6 className="footer-title">BROWSE</h6>
                                <ul className="list-unstyled">
                                    <li><a href="#">Color TV Shows</a></li>
                                    <li><a href="#">Star TV Shows</a></li>
                                    <li><a href="#">Zee TV Shows</a></li>
                                    <li><a href="#">Star Plus Shows</a></li>
                                    <li><a href="#">Sony Liv Shows</a></li>
                                </ul>
                            </div>
                            <div className="col-12 d-block d-sm-none">
                                <hr/>
                            </div>
                            <div className="col-md-3 col-sm-6 border-sm-top">
                                <h6 className="footer-title">Follow us</h6>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="#" target="_blank"><img className="" src="#" alt="facebook link"/></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" target="_blank"><img className="" src="#" alt="twitter link"/></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" target="_blank"><img className="" src="#" alt="youtube link"/></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 d-block d-sm-none">
                                <hr/>
                            </div>

                            <div className="col-md-3 col-sm-6 border-sm-top">
                                <h6 className="footer-title">Contact Us</h6>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        Media : media@91digital.com
                                    </li>
                                    <li className="list-inline-item">
                                        Public Relations : pr@91digital.com
                                    </li>
                                    <li className="list-inline-item">
                                        Call Us :+91 124  2345 2345
                                    </li>
                                    <li className="list-inline-item">
                                        Email us
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 d-block d-sm-none">
                                <hr/>
                            </div>

                            <div className="col-md-3 col-sm-6 text-center text-md-left">
                                <div className="text-white navbar-brand text-uppercase">A2ZSTREAM</div>
                                <div className="footer-sm-txt mt-1">Copyright © 2018, 91 Digital Pvt Ltd. All Rights
                                    Reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;