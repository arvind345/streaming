import React, {Component} from 'react';
import '../../assets/css/common.css';
import '../../assets/css/profile.css';
import { Carousel } from 'antd';
import { settings32 } from '../components/carouselSetting';



class Profile extends Component {
    render() {
        return(
            <div>

                <div className="container prof-container">
                    <div className="no-m-card-component card-component">
                        <div className="row no-gutters">
                            <div className="col-cs-12 col-cssm-12 col-cslg-3 border-right profile-wrap">
                                <div className="left-snippet  p-0">
                                    <div className="prof-head-wrap">
                                        <div className="prof-head-top d-mobile-block"><i className="back-arrow"></i>My Profile</div>
                                        <div className="prof-head">
                                            <div className="prof-img"><img src=""/></div>
                                            <div className="prof-detail">
                                                <p>Anshul Bnasal</p>
                                                <p>Anshul@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prof-btm-wrap d-desktop-block">
                                        <p>Edit Profile</p>
                                        <p>Logout</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-cs-12 col-cssm-12 col-cslg-9">
                                <div className="ryt-snippet">
                                    <div className="card-component padd no-desktop-card">
                                        <span className="card-header mt-2">MY SUBSCRIPTIONS</span>
                                        <div className="subs-wrap">
                                            <div className="subs-box active">
                                                <div className="subs-num">35</div>
                                                <div className="subs-cat">All</div>
                                            </div>
                                            <div className="subs-box">
                                                <div className="subs-num">22</div>
                                                <div className="subs-cat">Movies</div>
                                            </div>
                                            <div className="subs-box">
                                                <div className="subs-num">08</div>
                                                <div className="subs-cat">TV Shows</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="">
                                            <div className="card-wrapper no-overflow">
                                                <div className="card-header mt-2">Popular Hindi TV Shows</div>
                                                <Carousel className="card-slider pofile-card" {...settings32}>
                                                    <div className="lg-card">
                                                    <div className="card-div mr-3"><a href="#" className="card-lg-img img-top"><img
                                                        src="http://via.placeholder.com/280x250" width="300px" height="300px" /></a>
                                                        <div className="card-bottom">
                                                            <div className="card-title oneline-truncate">Yeh Rishta Kya Kehlata Hai</div>
                                                            <div className="card-subtitle oneline-truncate">Since 2009</div>
                                                        </div>
                                                    </div>
                                                    <div className="folow-btn mt-2">
                                                        <div className="btn btn-coral w-100 active"> ADDED TO WATCHLIST</div>
                                                    </div>
                                                    </div>
                                                    <div className="lg-card">
                                                        <div className="card-div mr-3"><a href="#" className="card-lg-img img-top"><img
                                                            src="http://via.placeholder.com/280x250" width="300px" height="300px" /></a>
                                                            <div className="card-bottom">
                                                                <div className="card-title oneline-truncate">Yeh Rishta Kya Kehlata Hai</div>
                                                                <div className="card-subtitle oneline-truncate">Since 2009</div>
                                                            </div>
                                                        </div>
                                                        <div className="folow-btn mt-2">
                                                            <div className="btn btn-coral w-100 active"> ADDED TO WATCHLIST</div>
                                                        </div>
                                                    </div>
                                                    <div className="lg-card">
                                                        <div className="card-div mr-3"><a href="#" className="card-lg-img img-top"><img
                                                            src="http://via.placeholder.com/280x250" width="300px" height="300px" /></a>
                                                            <div className="card-bottom">
                                                                <div className="card-title oneline-truncate">Yeh Rishta Kya Kehlata Hai</div>
                                                                <div className="card-subtitle oneline-truncate">Since 2009</div>
                                                            </div>
                                                        </div>
                                                        <div className="folow-btn mt-2">
                                                            <div className="btn btn-coral w-100 active"> ADDED TO WATCHLIST</div>
                                                        </div>
                                                    </div>
                                                    <div className="lg-card">
                                                        <div className="card-div mr-3"><a href="#" className="card-lg-img img-top"><img
                                                            src="http://via.placeholder.com/280x250" width="300px" height="300px" /></a>
                                                            <div className="card-bottom">
                                                                <div className="card-title oneline-truncate">Yeh Rishta Kya Kehlata Hai</div>
                                                                <div className="card-subtitle oneline-truncate">Since 2009</div>
                                                            </div>
                                                        </div>
                                                        <div className="folow-btn mt-2">
                                                            <div className="btn btn-coral w-100 active"> ADDED TO WATCHLIST</div>
                                                        </div>
                                                    </div>
                                                    <div className="lg-card">
                                                        <div className="card-div mr-3"><a href="#" className="card-lg-img img-top"><img
                                                            src="http://via.placeholder.com/280x250" width="300px" height="300px" /></a>
                                                            <div className="card-bottom">
                                                                <div className="card-title oneline-truncate">Yeh Rishta Kya Kehlata Hai</div>
                                                                <div className="card-subtitle oneline-truncate">Since 2009</div>
                                                            </div>
                                                        </div>
                                                        <div className="folow-btn mt-2">
                                                            <div className="btn btn-coral w-100 active"> ADDED TO WATCHLIST</div>
                                                        </div>
                                                    </div>

                                                </Carousel>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="">
                                            <div className="card-wrapper no-overflow">
                                                <div className="card-header mt-2">Popular Hindi TV Shows</div>
                                                <Carousel className="card-slider pofile-card" {...settings32}>
                                                    <div className="lg-card">
                                                        <div className="card-div mr-3"><a href="#" className="card-lg-img img-top"><img
                                                            src="http://via.placeholder.com/280x250" width="300px" height="300px" /></a>
                                                            <div className="card-bottom">
                                                                <div className="card-title oneline-truncate">Yeh Rishta Kya Kehlata Hai</div>
                                                                <div className="card-subtitle oneline-truncate">Since 2009</div>
                                                            </div>
                                                        </div>
                                                        <div className="folow-btn mt-2">
                                                            <div className="btn btn-coral w-100 active">+ ADDED TO WATCHLIST
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="lg-card">
                                                        <div className="card-div mr-3"><a href="#" className="card-lg-img img-top"><img
                                                            src="http://via.placeholder.com/280x250" width="300px" height="300px" /></a>
                                                            <div className="card-bottom">
                                                                <div className="card-title oneline-truncate">Yeh Rishta Kya Kehlata Hai</div>
                                                                <div className="card-subtitle oneline-truncate">Since 2009</div>
                                                            </div>
                                                        </div>
                                                        <div className="folow-btn mt-2">
                                                            <div className="btn btn-coral w-100 active"> ADDED TO WATCHLIST</div>
                                                        </div>
                                                    </div>
                                                    <div className="lg-card">
                                                        <div className="card-div mr-3"><a href="#" className="card-lg-img img-top"><img
                                                            src="http://via.placeholder.com/280x250" width="300px" height="300px" /></a>
                                                            <div className="card-bottom">
                                                                <div className="card-title oneline-truncate">Yeh Rishta Kya Kehlata Hai</div>
                                                                <div className="card-subtitle oneline-truncate">Since 2009</div>
                                                            </div>
                                                        </div>
                                                        <div className="folow-btn mt-2">
                                                            <div className="btn btn-coral w-100 active"> ADDED TO WATCHLIST</div>
                                                        </div>
                                                    </div>
                                                    <div className="lg-card">
                                                        <div className="card-div mr-3"><a href="#" className="card-lg-img img-top"><img
                                                            src="http://via.placeholder.com/280x250" width="300px" height="300px" /></a>
                                                            <div className="card-bottom">
                                                                <div className="card-title oneline-truncate">Yeh Rishta Kya Kehlata Hai</div>
                                                                <div className="card-subtitle oneline-truncate">Since 2009</div>
                                                            </div>
                                                        </div>
                                                        <div className="folow-btn mt-2">
                                                            <div className="btn btn-coral w-100 active"> ADDED TO WATCHLIST</div>
                                                        </div>
                                                    </div>
                                                    <div className="lg-card">
                                                        <div className="card-div mr-3"><a href="#" className="card-lg-img img-top"><img
                                                            src="http://via.placeholder.com/280x250" width="300px" height="300px" /></a>
                                                            <div className="card-bottom">
                                                                <div className="card-title oneline-truncate">Yeh Rishta Kya Kehlata Hai</div>
                                                                <div className="card-subtitle oneline-truncate">Since 2009</div>
                                                            </div>
                                                        </div>
                                                        <div className="folow-btn mt-2">
                                                            <div className="btn btn-coral w-100 active"> ADDED TO WATCHLIST</div>
                                                        </div>
                                                    </div>

                                                </Carousel>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;