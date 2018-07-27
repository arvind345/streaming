import React, {Component} from 'react';
import '../../assets/css/detail.css';


class Details extends Component {
    render() {
        return (
            <div>
               <div className="tab-box">
                   <span className="active">Info</span>
                   <span>Cast</span>
                   <span>Episode</span>
               </div>
                <div className="container">
                    <div className="card-component">
                        <div className="padd">
                            <h1 className="details-title">Kumkum Bhagya</h1>
                            <div className="detail-filter pb-1">
                                <span>TV Show</span> | <span>Drama</span> | <span>Hinid</span> | <span>Zee TV</span> | <span>241 Episodes</span>
                            </div>
                        </div>
                        <div className="top-banner img-center">
                            <img className="img-fluid" src="https://www.91-cdn.com/upcomingg-img/images/images/000/005/681/original/ET00078520.jpg?1530060630" alt="" />
                        </div>
                        <div className="padd">
                            <span className="overview-title font-weight-bold">About Kumkum Bhagya</span>
                            <span className="description clearfix d-block">
                                Kumkum Bhagya&apos; is a show following the life of a Punjabi matriarch Sarla Arora who runs a marriage hall and lives with the hope of seeing her two daughters Pragya and Bulbul who ... <span className="read-more">read full summary</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="card-component padd">

                        {/*  card wrapper */}
                        <div className="card-wrapper">
                            <span className="details-subtitle text-uppercase">STREAMING ON</span>
                            <div className="card-slider">
                                <div className="card-div sm-card mr-2">
                                    <a href="#" className="card-sm-img img-top">
                                        <img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/></a>
                                    <div className="card-bottom">
                                        <div className="card-title">Season 1</div>
                                        <div className="card-subtitle">18 Episodes</div>
                                    </div>
                                </div>
                                <div className="card-div sm-card mr-2">
                                    <a href="#" className="card-sm-img img-top"><img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/></a>
                                    <div className="card-bottom">
                                        <div className="card-title">Season 2</div>
                                        <div className="card-subtitle">41 Episodes</div>
                                    </div>
                                </div>
                                <div className="card-div sm-card mr-2">
                                    <a href="#" className="card-sm-img img-top"><img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/></a>
                                        <div className="card-bottom"><div className="card-title">Season 3</div>
                                        <div className="card-subtitle">11 Episodes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End card wrapper */}
                    </div>
                </div>


            </div>
        );
    }
}

export default Details;