import React, {Component} from 'react';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-banner">
                    <img className="w-100" src="https://www.91-cdn.com/upcomingg-img/banners/banner_images/000/000/006/original/Upcoming-movies-V1.jpg?1530705594" />
                </div>
                <div className="container homepage">
                <div className="row no-gutters">
                    <div className="col-md-12 mt-3 mb-3">
                    <div className="home-tab"></div>
                    <div className="m-2">
                        <div className="card-wrapper">
                            <div className="card-header"></div>
                            <div className="card-slider">
                                <div className="card-div">
                                    <a href="#">
                                        <img src=""/>
                                    </a>
                                    <div className=""></div>
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