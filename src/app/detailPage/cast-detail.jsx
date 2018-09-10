import React, {Component} from 'react';
import '../../assets/css/detail.css';
import folowers from '../../assets/images/followers.svg';
import calander from '../../assets/images/calander.svg';
import plus from '../../assets/images/plus.svg';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { settings1 } from '../components/carouselSetting';
import { settings32 } from '../components/carouselSetting';


class CastDetail extends Component {
    render() {
        return (
            <div>
                <div className="top-banner img-center d-desktop-block">
                    <img className="img-fluid" src="https://www.91-cdn.com/upcomingg-img/images/images/000/005/681/original/ET00078520.jpg?1530060630" alt="" />
                </div>
                <div className="container">
                    <div className="row no-gutters ">
                        <div className="col-lg-8 col-md-12 col-12 left-panel">
                            <div className="m-d-flex tab-box">
                                <span className="active">Info</span>
                                <span>Cast</span>
                                <span>Episode</span>
                            </div>
                            <div className="container">
                                <div className="card-component d-desktop-block">
                                    <div className="padd">
                                        <h1 className="details-title">About Mrunal Thakur</h1>
                                    </div>
                                </div>
                                <div className="card-component">
                                    <div className="padd d-mobile-block">
                                        <h1 className="details-title"> Mrunal Thakur</h1>
                                        <div className="detail-filter pb-1">
                                            <span>Indian Actress  |  Height, Weight, Biography & more…</span>
                                        </div>
                                    </div>
                                    <div className="top-banner img-center d-mobile-block">
                                        <img className="img-fluid" src="https://www.91-cdn.com/upcomingg-img/images/images/000/005/681/original/ET00078520.jpg?1530060630" alt="" />
                                    </div>
                                    <div className="padd">
                                        <span className="overview-title font-weight-bold">About the Artist</span>
                                        <span className="description clearfix d-block">
                                Mrunal Thakur is an Indian Actress who appears in Indian Soap operas. She has played a lead role in Tabrez Noorani & David Womark’s 2017 film Love Sonia... <span className="read-more">read more</span>
                            </span>
                                        <div className="follow-wrp d-mobile-block">
                                            <div className="folow-count">
                                                <img src="/static/media/followers.4b2097be.svg" className="pr-2" />8500 Followers
                                            </div>
                                            <div className="folow-btn pull-right">
                                                <div className="btn btn-coral active">+ Following</div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*social handle start*/}
                            <div className="container d-mobile-block">
                                <div className="card-component padd">
                                    <span className="details-subtitle text-uppercase mb-0">Social Handle</span>
                                    <span className="social-icn">
                                        <img src="https://www.upcomingg.com/packs/bundles/Upcomingg/assets/images/icons/icon-facebook-f91b15171b3d225fa75b597d44dcc8a7.svg" />
                                    </span>
                                    <span className="social-icn">
                                        <img src="https://www.upcomingg.com/packs/bundles/Upcomingg/assets/images/icons/icon-facebook-f91b15171b3d225fa75b597d44dcc8a7.svg" />
                                    </span>
                                    <span className="social-icn">
                                        <img src="https://www.upcomingg.com/packs/bundles/Upcomingg/assets/images/icons/icon-facebook-f91b15171b3d225fa75b597d44dcc8a7.svg" />
                                    </span>
                                </div>
                            </div>
                            {/*social handle end*/}
                            <div className="container">
                                <div className="card-component padd">

                                    {/*  card wrapper */}
                                    <div className="card-wrapper no-overflow">
                                        <span className="details-subtitle text-uppercase">STREAMING ON</span>

                                        <div className="card-slider streamcard">
                                            <Carousel className="card-slider slide-1" {...settings32}>
                                            <div className="card-div sm-card mr-2">
                                                <a href="#" className="card-sm-img img-top">
                                                    <img src="http://via.placeholder.com/400x300"/></a>
                                                <div className="card-bottom">
                                                    <div className="card-title">Kumkum Bhagya</div>
                                                    <div className="card-subtitle">Hindi, 2033 Episodes, Since 2014</div>
                                                </div>
                                            </div>
                                            <div className="card-div sm-card mr-2">
                                                <a href="#" className="card-sm-img img-top"><img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/></a>
                                                <div className="card-bottom">
                                                    <div className="card-title">Mujhse Kuchh Kehti...Yeh Khamoshiyaan</div>
                                                    <div className="card-subtitle">Hindi, 3757 Episodes, Since 2011</div>
                                                </div>
                                            </div>
                                            <div className="card-div sm-card mr-2">
                                                <a href="#" className="card-sm-img img-top"><img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/></a>
                                                <div className="card-bottom"><div className="card-title">Love Sonia</div>
                                                    <div className="card-subtitle">Hindi, Drama, Movie, 2018</div>
                                                </div>
                                            </div>
                                            <div className="card-div sm-card mr-2">
                                                <a href="#" className="card-sm-img img-top"><img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/></a>
                                                <div className="card-bottom"><div className="card-title">Mujhse Kuchh Kehti...Yeh Khamoshiyaan</div>
                                                    <div className="card-subtitle">Hindi, 3757 Episodes, Since 2011</div>
                                                </div>
                                            </div>
                                            <div className="card-div sm-card mr-2">
                                                <a href="#" className="card-sm-img img-top"><img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/></a>
                                                <div className="card-bottom"><div className="card-title">Mujhse Kuchh Kehti...Yeh Khamoshiyaan</div>
                                                    <div className="card-subtitle">Hindi, 3757 Episodes, Since 2011</div>
                                                </div>
                                            </div>
                                            </Carousel>
                                        </div>

                                    </div>
                                    {/* End card wrapper */}
                                </div>
                            </div>

                            {/*cast table start*/}
                            <div className="container">
                                <div className="card-component padd">
                                    <span className="details-subtitle text-uppercase"> Mrunal Thakur  BIO</span>
                                    <div className="cast-table-wrp">
                                        <table className="cast-table-list">
                                            <tr className="trleft">
                                                <td>Real Name</td>
                                                <td><strong>Mrunal Thakur</strong></td>
                                            </tr>
                                            <tr className="trright">
                                                <td>Profession</td>
                                                <td><strong>Actress</strong></td>
                                            </tr>
                                            <tr className="trleft">
                                                <td>Famous Role</td>
                                                <td><strong>Bulbul (Kumkum Bhagya)</strong></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/*cast table end*/}
                            {/*cast table start*/}
                            <div className="container">
                                <div className="card-component padd">
                                    <span className="details-subtitle text-uppercase"> Mrunal Thakur  - Physical Stats & More</span>
                                    <div className="cast-table-wrp">
                                        <table className="cast-table-list">
                                            <tr className="trleft">
                                                <td>Height</td>
                                                <td><strong>165 cm | 5”5 inche</strong></td>
                                            </tr>
                                            <tr className="trright">
                                                <td>Weight</td>
                                                <td><strong>52kg</strong></td>
                                            </tr>
                                            <tr className="trleft">
                                                <td>Figure Measurement</td>
                                                <td><strong>32-28-35</strong></td>
                                            </tr>
                                            <tr className="trright">
                                                <td>Eye color</td>
                                                <td><strong>Black</strong></td>
                                            </tr>
                                            <tr className="trleft">
                                                <td>Hair color</td>
                                                <td><strong>Black</strong></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/*cast table end*/}
                            {/*cast table start*/}
                            <div className="container">
                                <div className="card-component padd">
                                    <span className="details-subtitle text-uppercase"> Mrunal Thakur  - Other Details</span>
                                    <div className="cast-table-wrp">
                                        <table className="cast-table-list">
                                            <tr className="trleft">
                                                <td>Date of Birth</td>
                                                <td><strong>01 August 1992</strong></td>
                                            </tr>
                                            <tr className="trright">
                                                <td>Age (as on 2018)</td>
                                                <td><strong>26 years</strong></td>
                                            </tr>
                                            <tr className="trleft">
                                                <td>Birth Place	</td>
                                                <td><strong>Nagpur, Maharastra, India</strong></td>
                                            </tr>
                                            <tr className="trright">
                                                <td>Sun Sign</td>
                                                <td><strong>Leo</strong></td>
                                            </tr>
                                            <tr className="trleft">
                                                <td>Nationality 			     </td>
                                                <td><strong>Indian</strong></td>
                                            </tr>
                                            <tr className="trright">
                                                <td>Home Town</td>
                                                <td><strong>Nagpur, Maharastra, India</strong></td>
                                            </tr>
                                            <tr className="trleft">
                                                <td>School</td>
                                                <td><strong>Not Known</strong></td>
                                            </tr>
                                            <tr className="trright">
                                                <td>College	</td>
                                                <td><strong>K C College</strong></td>
                                            </tr>
                                            <tr className="trleft">
                                                <td>Education Qualification</td>
                                                <td><strong>B.Tech</strong></td>
                                            </tr>

                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/*cast table end*/}


                        </div>
                        <div className="col-lg-4 col-md-12 col-12 right-panel">
                            <div className="container">
                                <div className="card-component padd">
                                    <span className="details-subtitle text-uppercase mb-0">Social Handle</span>
                                    <span className="social-icn">
                                        <img src="https://www.upcomingg.com/packs/bundles/Upcomingg/assets/images/icons/icon-facebook-f91b15171b3d225fa75b597d44dcc8a7.svg" />
                                    </span>
                                    <span className="social-icn">
                                        <img src="https://www.upcomingg.com/packs/bundles/Upcomingg/assets/images/icons/icon-facebook-f91b15171b3d225fa75b597d44dcc8a7.svg" />
                                    </span>
                                    <span className="social-icn">
                                        <img src="https://www.upcomingg.com/packs/bundles/Upcomingg/assets/images/icons/icon-facebook-f91b15171b3d225fa75b597d44dcc8a7.svg" />
                                    </span>
                                </div>

                                <div className="card-component padd">
                                    <div className="follow-wrp">
                                        <div className="folow-count"><img src="/static/media/followers.4b2097be.svg" className="pr-2" />8500 Followers</div>
                                        <div className="folow-btn mt-3"><div className="btn btn-coral w-100 active">+ Following</div></div>
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

export default CastDetail;