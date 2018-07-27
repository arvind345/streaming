import React, {Component} from 'react';
class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-banner">
                    <img className="w-100" src="https://www.91-cdn.com/upcomingg-img/banners/banner_images/000/000/006/original/Upcoming-movies-V1.jpg?1530705594" />
                    <div className="home-search d-sm-none">
                        <div className="home-search-title">THE STREAMING SEARCH ENGINE</div>
                        <div className="home-search-input"><i className=""></i> Search </div>
                    </div>
                </div>
                <div className="container homepage">
                            <div className="home-tab"></div>
                            <div className="">
                                <div className="card-wrapper">
                                    <div className="card-header mt-2">Geners</div>
                                    <div className="card-slider">
                                        <div className="card-div sm-card mr-2">
                                            <a href="#" className="card-sm-img img-top">
                                                <img src="http://via.placeholder.com/150x78"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
                                        <div className="card-div sm-card mr-2">
                                            <a href="#" className="card-sm-img img-top">
                                                <img src="http://via.placeholder.com/150x78"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
                                        <div className="card-div sm-card mr-2">
                                            <a href="#" className="card-sm-img img-top">
                                                <img src="http://via.placeholder.com/150x78"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card-wrapper">
                                    <div className="card-header mt-2">Popular TV Shows</div>
                                    <div className="card-slider">
                                        <div className="card-div lg-card mr-3">
                                            <a href="#" className="card-lg-img img-top">
                                                <img src="http://via.placeholder.com/210x210"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
                                        <div className="card-div lg-card mr-3">
                                            <a href="#" className="card-lg-img img-top">
                                                <img src="http://via.placeholder.com/210x210"/>
                                            </a>
                                            <div className="card-bottom">
                                                <div className="card-title">Drama</div>
                                                <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                            </div>
                                        </div>
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
                            </div>
                            {/*channel list start */}

                    <div className="card-header mt-2">TV Channel Serial List <span className="card-view-all">View All</span></div>
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
                    </div>
                            {/*channel list end*/}

                    {/*new widget*/}
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
                    {/*new widget end */}
                </div>
            </div>
        );
    }
}
export default Home;