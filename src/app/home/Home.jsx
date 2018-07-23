import React, {Component} from 'react';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-banner">
                    <img className="w-100" src="https://www.91-cdn.com/upcomingg-img/banners/banner_images/000/000/006/original/Upcoming-movies-V1.jpg?1530705594" />
                </div>
                <div className="m-2 homepage">
                <div className="row no-gutters">
                    <div className="col-md-12 mt-3 mb-3">
                    <div className="home-tab"></div>
                    <div className="">
                        <div className="card-wrapper">
                            <div className="card-header"></div>
                            <div className="card-slider">
                                <div className="card-div sm-card mr-2">
                                    <a href="#">
                                        <img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/>
                                    </a>
                                    <div className="card-bottom">
                                        <div className="card-title">Drama</div>
                                        <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                    </div>
                                </div>
                                <div className="card-div sm-card mr-2">
                                    <a href="#">
                                        <img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/>
                                    </a>
                                    <div className="card-bottom">
                                        <div className="card-title">Drama</div>
                                        <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                    </div>
                                </div>
                                <div className="card-div sm-card mr-2">
                                    <a href="#">
                                        <img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/>
                                    </a>
                                    <div className="card-bottom">
                                        <div className="card-title">Drama</div>
                                        <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Home;