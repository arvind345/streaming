import React, {Component} from 'react';
import '../../assets/css/detail.css';
import folowers from '../../assets/images/followers.svg';
import calander from '../../assets/images/calander.svg';
import plus from '../../assets/images/plus.svg';


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
                                    <span className="details-subtitle text-uppercase">Social Handle</span>
                                </div>
                            </div>
                            {/*social handle end*/}
                            <div className="container">
                                <div className="card-component padd">

                                    {/*  card wrapper */}
                                    <div className="card-wrapper">
                                        <span className="details-subtitle text-uppercase">STREAMING ON</span>
                                        <div className="card-slider">
                                            <div className="card-div xs-card mr-2">
                                                <a href="#" className="card-xs-img img-top">
                                                    <img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/></a>
                                                <div className="card-bottom">
                                                    <div className="card-title">Season 1</div>
                                                    <div className="card-subtitle">18 Episodes</div>
                                                </div>
                                            </div>
                                            <div className="card-div xs-card mr-2">
                                                <a href="#" className="card-xs-img img-top"><img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/></a>
                                                <div className="card-bottom">
                                                    <div className="card-title">Season 2</div>
                                                    <div className="card-subtitle">41 Episodes</div>
                                                </div>
                                            </div>
                                            <div className="card-div xs-card mr-2">
                                                <a href="#" className="card-xs-img img-top"><img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/></a>
                                                <div className="card-bottom"><div className="card-title">Season 3</div>
                                                    <div className="card-subtitle">11 Episodes</div>
                                                </div>
                                            </div>
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
                                        <table className="cast-table" cellSpacing="5" cellPadding="5">
                                            <tr>
                                                <td className="trrow">
                                                    <table width="100%">
                                                        <tr>
                                                            <td className="td1">Real Name</td>
                                                            <td className="td2">Mrunal Thakur</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td className="tdspacer"></td>
                                                <td className="trrow">
                                                    <table width="100%">
                                                        <tr>
                                                            <td className="td1">Weight</td>
                                                            <td className="td2">50kg</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="trrow">
                                                    <table width="100%">
                                                        <tr>
                                                            <td className="td1">Figure Measurement 		</td>
                                                            <td className="td2">32-28-35</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td className="tdspacer"></td>
                                                <td className="trrow">
                                                    <table width="100%">
                                                        <tr>
                                                            <td className="td1">Real Name</td>
                                                            <td className="td2">Mrunal Thakur</td>
                                                        </tr>
                                                    </table>
                                                </td>
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
                                        <table className="cast-table" cellSpacing="5" cellPadding="5">
                                            <tr>
                                                <td className="trrow">
                                                    <table width="100%">
                                                        <tr>
                                                            <td className="td1">Real Name</td>
                                                            <td className="td2">Mrunal Thakur</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td className="tdspacer"></td>
                                                <td className="trrow">
                                                    <table width="100%">
                                                        <tr>
                                                            <td className="td1">Weight</td>
                                                            <td className="td2">50kg</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="trrow">
                                                    <table width="100%">
                                                        <tr>
                                                            <td className="td1">Figure Measurement 		</td>
                                                            <td className="td2">32-28-35</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td className="tdspacer"></td>
                                                <td className="trrow">
                                                    <table width="100%">
                                                        <tr>
                                                            <td className="td1">Real Name</td>
                                                            <td className="td2">Mrunal Thakur</td>
                                                        </tr>
                                                    </table>
                                                </td>
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
                                        <table className="cast-table" cellSpacing="5" cellPadding="5">
                                            <tr>
                                                <td className="trrow">
                                                    <table width="100%">
                                                        <tr>
                                                            <td className="td1">Real Name</td>
                                                            <td className="td2">Mrunal Thakur</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td className="tdspacer"></td>
                                                <td className="trrow">
                                                    <table width="100%">
                                                        <tr>
                                                            <td className="td1">Weight</td>
                                                            <td className="td2">50kg</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="trrow">
                                                    <table width="100%">
                                                        <tr>
                                                            <td className="td1">Figure Measurement 		</td>
                                                            <td className="td2">32-28-35</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td className="tdspacer"></td>
                                                <td className="trrow">
                                                    <table width="100%">
                                                        <tr>
                                                            <td className="td1">Real Name</td>
                                                            <td className="td2">Mrunal Thakur</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>

                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/*cast table end*/}


                        </div>
                        <div className="col-lg-4 col-md-12 col-12 right-panel">
                            <div className="container">
                                <div className="card-component">
                                    <div className="card-component-body pt-2 pb-1">
                                        <div className="col-7 d-block col-md-12">
                                            <div className="font-weight-bold p-1"><img src={calander} className="pr-2" alt="" />19 September 2018</div>
                                            <div className="p-1"><img src={folowers} className="pr-2" /> <span>154</span> Follower(s)</div>
                                        </div>
                                        <div className="pt-2 pb-2 pl-3 pr-3">
                                            <button type="submit" id="LoginButton" className="btn btn-block btn-coral text-uppercase py-2">+ ADD TO WATCHLIST</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-component p-3">
                                    <span className="overview-title font-weight-bold">PEOPLE WHO FOLLOWED THIS MOVIE ALSO FOLLOWED</span>
                                    <div className="card-div mt-2">
                                        <div className="right-img-box">
                                            <img src="https://www.91-cdn.com/upcomingg-img/tr:w-150/images/images/000/005/146/original/MV5BY2ZhYjc1ZjUtZGU2Ny00M2Y0LWEyNDMtZGQ0NzEyZDNkYTM3XkEyXkFqcGdeQXVyNzQ3NTY5MjE_._V1_QL50_SY1000_CR0_0_798_1000_AL_.jpg?1529661557" />
                                        </div>
                                        <div className="right-info-box">
                                            <span className="right-box-title">Kumkum Bhagya</span>
                                            <span className="cat-tag mb-2 mt-1">Horror</span>
                                            <div className="right-calander pt-2"><img src={calander} className="pr-2" />23 Oct</div>
                                            <div className="right-follower"><img src={folowers} className="pr-2" />3500 Followers</div>
                                            <div className="btn btn-outline-coral mt-2">+ Follow</div>
                                        </div>
                                    </div>
                                    <div className="card-div mt-2">
                                        <div className="right-img-box">
                                            <img src="https://www.91-cdn.com/upcomingg-img/tr:w-150/images/images/000/005/146/original/MV5BY2ZhYjc1ZjUtZGU2Ny00M2Y0LWEyNDMtZGQ0NzEyZDNkYTM3XkEyXkFqcGdeQXVyNzQ3NTY5MjE_._V1_QL50_SY1000_CR0_0_798_1000_AL_.jpg?1529661557" />
                                        </div>
                                        <div className="right-info-box">
                                            <span className="right-box-title">Kumkum Bhagya</span>
                                            <span className="cat-tag mb-2 mt-1">Horror</span>
                                            <div className="right-calander pt-2"><img src={calander} className="pr-2" />23 Oct</div>
                                            <div className="right-follower"><img src={folowers} className="pr-2" />3500 Followers</div>
                                            <div className="btn btn-outline-coral mt-2">&plus; Follow</div>
                                        </div>
                                    </div>
                                    <div className="card-div mt-2">
                                        <div className="right-img-box">
                                            <img src="https://www.91-cdn.com/upcomingg-img/tr:w-150/images/images/000/005/146/original/MV5BY2ZhYjc1ZjUtZGU2Ny00M2Y0LWEyNDMtZGQ0NzEyZDNkYTM3XkEyXkFqcGdeQXVyNzQ3NTY5MjE_._V1_QL50_SY1000_CR0_0_798_1000_AL_.jpg?1529661557" />
                                        </div>
                                        <div className="right-info-box">
                                            <span className="right-box-title">Kumkum Bhagya</span>
                                            <span className="cat-tag mb-2 mt-1">Horror</span>
                                            <div className="right-calander pt-2"><img src={calander} className="pr-2" />23 Oct</div>
                                            <div className="right-follower"><img src={folowers} className="pr-2" />3500 Followers</div>
                                            <div className="btn btn-outline-coral mt-2"><i className="plus-coral">+</i> Follow</div>
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

export default CastDetail;