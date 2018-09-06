import React, {Component} from 'react';
import sliderArrow from '../../assets/images/slider-arrow.svg';
import $ from "jquery";
import tvIcn from '../../assets/images/tv-icn.svg';
import movieIcn from '../../assets/images/movie-icn.svg';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

class Home extends Component {


    render() {
        return (
            <div>
                <Carousel slidesToShow={4} arrows={true} dots={false}>

                </Carousel>

                <div className="home-banner">
                    <img className="w-100" src="https://www.91-cdn.com/upcomingg-img/banners/banner_images/000/000/006/original/Upcoming-movies-V1.jpg?1530705594" />
                    <div className="home-search">
                        <div className="home-search-title">THE STREAMING SEARCH ENGINE</div>
                        <div className="home-search-input"><i className=""></i> Search </div>
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
                                        <Carousel className="card-slider slide-1" slidesToShow={5} arrows={true} dots={false} infinite={false} >
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
                                            <div class="clearfix"></div>
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