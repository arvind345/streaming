import React, {Component} from 'react';
import sliderArrow from '../../assets/images/slider-arrow.svg';
import $ from "jquery";
import tvIcn from '../../assets/images/tv-icn.svg';
import movieIcn from '../../assets/images/movie-icn.svg';
import { DatePicker } from 'antd';
import { Carousel } from 'antd';
import { settings1 } from '../components/carouselSetting';

class Home extends Component {


    render() {
        return (
            <div>

                <div className="home-banner">
                    <img className="w-100" src="https://www.91-cdn.com/upcomingg-img/banners/banner_images/000/000/006/original/Upcoming-movies-V1.jpg?1530705594" />
                    <div className="home-search">
                        <div className="home-search-title">THE STREAMING SEARCH ENGINE</div>
                        <input className="home-search-input" placeholder="Search Movie, plays, sports" /><i className=""></i>
                        <div className="center-search-screen">
                            <ul className="auto_sugg_ul">
                                <div className="search-title">
                                    <div className="as-info1">
                                        <svg height="11" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#ff3053"
                                                      stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"></polyline>
                                            <polyline fill="none" points="17 6 23 6 23 12" stroke="#ff3053"
                                                      stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"></polyline>
                                        </svg>
                                        Trending Searches
                                    </div>
                                </div>
                                <li><a href="#" className="trending">Ye Rishta kya kehlata hai</a></li>
                                <li><a href="#" className="trending">Ishqbaz</a></li>
                                <li><a href="#" className="trending">Kasauti Zingdi Ki</a></li>
                                <li><a href="#" className="trending">Krishna chali Landon</a></li>
                                <li><a href="#">
                                    <div className="as-img"><img
                                        src="https://www.91-cdn.com/upcomingg-img/images/images/000/012/413/original/poster.jpg?1533817420"/>
                                    </div>
                                    <div className="as-list">
                                        <div className="as-info1">Padmavat</div>
                                        <div className="as-info2">2018 | Movie | Hindi</div>
                                    </div>
                                </a></li>
                                <li><a href="#">
                                    <div className="as-img"><img
                                        src="https://www.91-cdn.com/upcomingg-img/images/images/000/012/413/original/poster.jpg?1533817420"/>
                                    </div>
                                    <div className="as-list">
                                        <div className="as-info1">Padmavat</div>
                                        <div className="as-info2">2018 | Movie | Hindi</div>
                                    </div>
                                </a></li>
                                <li><a href="#">
                                    <div className="as-img"><img
                                        src="https://www.91-cdn.com/upcomingg-img/images/images/000/012/413/original/poster.jpg?1533817420"/>
                                    </div>
                                    <div className="as-list">
                                        <div className="as-info1">Padmavat</div>
                                        <div className="as-info2">2018 | Movie | Hindi</div>
                                    </div>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container homepage">
                    <div className="home-tab m-d-flex">
                        <div className="tabblock"><i className="tabicn"><img src={movieIcn} /></i>All Movies</div>
                        <div className="tabblock">
                            <i className="tabicn"><img src={tvIcn} /></i>
                            ALL TV SHOWS</div>
                    </div>
                            <div className="no-m-card-component card-component padd pos-relative" >
                                <div className="card-wrapper no-overflow" id="slide-1">
                                    <div className="card-header mt-2">Geners</div>

                                        <Carousel className="card-slider slide-1" {...settings1}>
                                        <div className="card-div sm-card mr-2">
                                            <a href="#" className="card-sm-img img-top">
                                                <img src="http://via.placeholder.com/300x200"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                                
                                            </div>
                                        </div>
                                        <div className="card-div sm-card mr-2">
                                            <a href="#" className="card-sm-img img-top">
                                                <img src="http://via.placeholder.com/300x200"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                                
                                            </div>
                                        </div>
                                        <div className="card-div sm-card mr-2">
                                            <a href="#" className="card-sm-img img-top">
                                                <img src="http://via.placeholder.com/300x200"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                                
                                            </div>
                                        </div>
                                        <div className="card-div sm-card mr-2">
                                            <a href="#" className="card-sm-img img-top">
                                                <img src="http://via.placeholder.com/300x200"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                                
                                            </div>
                                        </div>
                                        <div className="card-div sm-card mr-2">
                                            <a href="#" className="card-sm-img img-top">
                                                <img src="http://via.placeholder.com/300x200"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                                
                                            </div>
                                        </div>
                                        <div className="card-div sm-card mr-2">
                                            <a href="#" className="card-sm-img img-top">
                                                <img src="http://via.placeholder.com/300x200"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                                
                                            </div>
                                        </div>
                                        <div className="card-div sm-card mr-2">
                                            <a href="#" className="card-sm-img img-top">
                                                <img src="http://via.placeholder.com/300x200"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>

                                            </div>
                                        </div>
                                        <div className="card-div sm-card mr-2">
                                            <a href="#" className="card-sm-img img-top">
                                                <img src="http://via.placeholder.com/300x200"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>

                                            </div>
                                        </div>
                                        <div className="card-div sm-card mr-2">
                                            <a href="#" className="card-sm-img img-top">
                                                <img src="http://via.placeholder.com/300x200"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>

                                            </div>
                                        </div>

                                        </Carousel>

                                </div>
                            </div>
                            <div className="no-m-card-component card-component padd">
                                <div className="card-wrapper">
                                    <div className="card-header mt-2">Popular TV Shows</div>
                                    <div className="card-slider">
                                        <div className="card-div lg-card mr-3">
                                            <a href="#" className="card-lg-img img-top">
                                                <img src="http://via.placeholder.com/350x350"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
                                        <div className="card-div lg-card mr-3">
                                            <a href="#" className="card-lg-img img-top">
                                                <img src="http://via.placeholder.com/350x350"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
                                        <div className="card-div lg-card mr-3">
                                            <a href="#" className="card-lg-img img-top">
                                                <img src="http://via.placeholder.com/350x350"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
                                        <div className="card-div lg-card mr-3">
                                            <a href="#" className="card-lg-img img-top">
                                                <img src="http://via.placeholder.com/350x350"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
                                        <div className="card-div lg-card mr-3">
                                            <a href="#" className="card-lg-img img-top">
                                                <img src="http://via.placeholder.com/350x350"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
                                        <div className="card-div lg-card mr-3">
                                            <a href="#" className="card-lg-img img-top">
                                                <img src="http://via.placeholder.com/350x350"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
                                        <div className="card-div lg-card mr-3">
                                            <a href="#" className="card-lg-img img-top">
                                                <img src="http://via.placeholder.com/350x350"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
                                        <div className="card-div lg-card mr-3">
                                            <a href="#" className="card-lg-img img-top">
                                                <img src="http://via.placeholder.com/350x350"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
                                        <div className="card-div lg-card mr-3">
                                            <a href="#" className="card-lg-img img-top">
                                                <img src="http://via.placeholder.com/350x350"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    {/*new channel list start*/}
                    <div className="no-m-card-component card-component padd">
                        <div className="card-wrapper">
                            <div className="card-header mt-2">TV Channel Serial List <span className="card-view-all mr-2">View All</span></div>
                            <div className="card-slider m-no-slider">
                                <div className="card-div channel-card mr-2">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>
                                        
                                    </div>
                                </div>
                                <div className="card-div channel-card mr-2">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>
                                        
                                    </div>
                                </div>
                                <div className="card-div channel-card mr-2">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>
                                        
                                    </div>
                                </div>
                                <div className="card-div channel-card mr-2">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>
                                        
                                    </div>
                                </div>
                                <div className="card-div channel-card mr-2">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>
                                        
                                    </div>
                                </div>
                                <div className="card-div channel-card mr-2">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>
                                        
                                    </div>
                                </div>
                                <div className="card-div channel-card mr-2">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>

                                    </div>
                                </div>
                                <div className="card-div channel-card mr-2">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>

                                    </div>
                                </div>
                                <div className="card-div channel-card mr-2">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>

                                    </div>
                                </div>
                                <div className="card-div channel-card mr-2">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*new channel list end*/}
                            {/*channel list start */}

                    {/*<div className="card-header mt-2">TV Channel Serial List <span className="card-view-all">View All</span></div>
                    <div className="channel-wrapper">
                        <div className="row">
                            <div className="col-6 col-md-3">
                                <div className="card-div channel-card">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="card-div channel-card">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="card-div channel-card">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="card-div channel-card">
                                    <div className="card-channel-logo img-center">
                                        <img src="https://images.justwatch.com/icon/4233120/s100/hotstar" />
                                    </div>
                                    <div className="card-channel-text">
                                        <div className="card-title">Star Plus</div>
                                        <div className="card-subtitle">91 Shows</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                            {/*channel list end*/}

                    {/*new widget*/}
{/*
                    <div className="row new1">
                        <div className="col-md-3 col-sm-4 col-6">
                            <div className="card-div lg-card mr-3">
                                <a href="#" className="card-lg-img img-top">
                                    <img src="http://via.placeholder.com/210x210"/>
                                </a>
                                <div className="card-bottom">
                                    <div className="card-title">Drama</div>
                                    <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <div className="card-div lg-card mr-3">
                                <a href="#" className="card-lg-img img-top">
                                    <img src="http://via.placeholder.com/210x210"/>
                                </a>
                                <div className="card-bottom">
                                    <div className="card-title">Drama</div>
                                    <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <div className="card-div lg-card mr-3">
                                <a href="#" className="card-lg-img img-top">
                                    <img src="http://via.placeholder.com/210x210"/>
                                </a>
                                <div className="card-bottom">
                                    <div className="card-title">Drama</div>
                                    <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <div className="card-div lg-card mr-3">
                                <a href="#" className="card-lg-img img-top">
                                    <img src="http://via.placeholder.com/210x210"/>
                                </a>
                                <div className="card-bottom">
                                    <div className="card-title">Drama</div>
                                    <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                </div>
                            </div>
                        </div>
                    </div>
*/}
                    {/*new widget end */}
                </div>
            </div>
        );
    }
}
export default Home;