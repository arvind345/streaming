import React, {Component} from 'react';
import '../../assets/css/detail.css';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import calander from "../../assets/images/calander.svg";
import folowers from "../../assets/images/followers.svg";

class ChennalDetail extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <div className="row no-gutters ">
                        <div className="col-lg-8 col-md-12 col-12 left-panel">
                             <div className="container">

                                <div className="card-component d-desktop-block">
                                    <div className="padd">
                                        <div className="detail-left-wrp channel-wrap">
                                            <img src="https://vignette.wikia.nocookie.net/logopedia/images/3/3b/%D8%A7%D9%84%D9%85%D8%B3%D9%8A%D9%84%D8%A9_%D8%A8%D8%B1%D8%B3.png/revision/latest?cb=20170604044941" />
                                        </div>
                                        <div className="detail-ryt-wrp detail-movie-wrp">
                                            <h1 className="details-title">Colors TV Serial Schedule</h1>
                                            <div className="detail-filter pb-1">
                                                <span>Viacom 18 </span> | <span>Hindi</span> | <span>25 Shows</span>
                                            </div>
                                            <span className="description clearfix d-block">Get complete list of Colors TV shows along with schedule and show timings. Get daily updates on popular Colors TV serials, news, photos &amp; videos!</span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="card-component d-mobile-block">
                                    <div className="padd d-mobile-block">
                                        <h1 className="details-title">Colors TV Serial Schedule</h1>
                                    </div>
                                    <div className="top-banner img-center d-mobile-block">
                                        <img src="https://vignette.wikia.nocookie.net/logopedia/images/3/3b/%D8%A7%D9%84%D9%85%D8%B3%D9%8A%D9%84%D8%A9_%D8%A8%D8%B1%D8%B3.png/revision/latest?cb=20170604044941" />
                                    </div>
                                    <div className="padd">
                                        <span className="description clearfix d-block">
                                            Get complete list of Colors TV shows along with schedule and show timings. Get daily updates on popular Colors TV serials, news, photos & videos!
                                        </span>
                                    </div>
                                </div>
                             </div>

                             <div className="container">
                                 <div className="card-component overflow pt-1">
                                     <div className="tab-box card-slider bg-schedule">
                                         <div className="tabs"><span className="active">Today</span></div>
                                         <div className="tabs"><span>Tomorrow</span></div>
                                         <div className="tabs"><span>25th Sept</span></div>
                                         <div className="tabs"><span>26th Sept</span></div>
                                         <div className="tabs"><span>27th Sept</span></div>
                                         <div className="tabs"><span>28th Sept</span></div>
                                         <div className="tabs"><span>29th Sept</span></div>
                                         <div className="tabs"><span>30th Sept</span></div>
                                     </div>

                                     <div className="chnl-detail-box pb-2">
                                        <div className="chnl-dt-row">
                                            <div className="ch-lft-img-box">
                                                <img src="https://www.91-cdn.com/upcomingg-img/tr:w-150/images/images/000/013/720/original/MV5BNTFiNWNmNjQtYTFlMy00MjIyLTg5NWYtMTc0MDFmYzVkODhjXkEyXkFqcGdeQXVyMjkxNzQ1NDI_._V1_QL50_SY1000_CR0_0_688_1000_AL_.jpg?1534420606" />
                                            </div>
                                            <div className="ch-ryt-box">
                                                <div className="cast-info-txt">Ishqbaaz</div>
                                                <div className="detail-filter pb-1">
                                                    <div className="d-desktop-block"><span>U/A </span> | <span>Hindi</span> | <span>15 Min</span> | <span>Eepisod - 32</span> | <span>Since 2016</span></div>
                                                    <div className="ch-eps-time">Today 2:30 am</div>
                                                    <div className="ch-followers d-desktop-block">50k Followers</div>
                                                </div>
                                            </div>
                                        </div>
                                         <div className="chnl-dt-row">
                                             <div className="ch-lft-img-box">
                                                 <img src="https://www.91-cdn.com/upcomingg-img/tr:w-150/images/images/000/013/720/original/MV5BNTFiNWNmNjQtYTFlMy00MjIyLTg5NWYtMTc0MDFmYzVkODhjXkEyXkFqcGdeQXVyMjkxNzQ1NDI_._V1_QL50_SY1000_CR0_0_688_1000_AL_.jpg?1534420606" />
                                             </div>
                                             <div className="ch-ryt-box">
                                                 <div className="cast-info-txt">Ishqbaaz</div>
                                                 <div className="detail-filter pb-1">
                                                     <div className="d-desktop-block"><span>U/A </span> | <span>Hindi</span> | <span>15 Min</span> | <span>Eepisod - 32</span> | <span>Since 2016</span></div>
                                                     <div className="ch-eps-time">Today 2:30 am</div>
                                                     <div className="ch-followers d-desktop-block">50k Followers</div>
                                                 </div>
                                             </div>
                                         </div>
                                         <div className="chnl-dt-row">
                                             <div className="ch-lft-img-box">
                                                 <img src="https://www.91-cdn.com/upcomingg-img/tr:w-150/images/images/000/013/720/original/MV5BNTFiNWNmNjQtYTFlMy00MjIyLTg5NWYtMTc0MDFmYzVkODhjXkEyXkFqcGdeQXVyMjkxNzQ1NDI_._V1_QL50_SY1000_CR0_0_688_1000_AL_.jpg?1534420606" />
                                             </div>
                                             <div className="ch-ryt-box">
                                                 <div className="cast-info-txt">Ishqbaaz</div>
                                                 <div className="detail-filter pb-1">
                                                     <div className="d-desktop-block"><span>U/A </span> | <span>Hindi</span> | <span>15 Min</span> | <span>Eepisod - 32</span> | <span>Since 2016</span></div>
                                                     <div className="ch-eps-time">Today 2:30 am</div>
                                                     <div className="ch-followers d-desktop-block">50k Followers</div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>

                                 </div>
                             </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-12 right-panel">
                            <div className="container">

                                <div className="card-component p-3">
                                    <span className="overview-title font-weight-bold">SIMILAR SHOWS</span>
                                    <div className="card-div mt-2">
                                        <div className="right-img-box p-2">
                                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Star_Jalsha_logo.jpg/220px-Star_Jalsha_logo.jpg" />
                                        </div>
                                        <div className="right-info-box">
                                            <span className="right-box-title">Suryavansham</span>
                                            <div className="d-desktop-block">
                                                <span>U/A </span> | <span>Hindi</span> | <span>2.40 Hrs</span>
                                            </div>
                                            <div className="right-calander pt-2"><img src={calander} className="pr-2" />23 Oct</div>
                                            <div className="right-follower"><img src={folowers} className="pr-2" />3500 Followers</div>
                                            <div className="btn btn-outline-coral width-80pc mt-2">
                                                <i className="plus-coral ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9"><path className="plus-icn" fill="#f45050" fill-rule="evenodd" d="M8.508 4.872H5.072v3.436H3.944V4.872H.508V3.744h3.436V.308h1.128v3.436h3.436z"/></svg>
                                                </i> Follow</div>
                                        </div>
                                    </div>
                                    <div className="card-div mt-2">
                                        <div className="right-img-box p-2">
                                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Star_Jalsha_logo.jpg/220px-Star_Jalsha_logo.jpg" />
                                        </div>
                                        <div className="right-info-box">
                                            <span className="right-box-title">Kumkum Bhagya</span>
                                            <div className="d-desktop-block">
                                                <span>U/A </span> | <span>Hindi</span> | <span>2.40 Hrs</span>
                                            </div>
                                            <div className="right-calander pt-2"><img src={calander} className="pr-2" />23 Oct</div>
                                            <div className="right-follower"><img src={folowers} className="pr-2" />3500 Followers</div>
                                            <div className="btn btn-outline-coral width-80pc mt-2">
                                                <i className="plus-coral ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9"><path className="plus-icn" fill="#f45050" fill-rule="evenodd" d="M8.508 4.872H5.072v3.436H3.944V4.872H.508V3.744h3.436V.308h1.128v3.436h3.436z"/></svg>
                                                </i> Follow</div>
                                        </div>
                                    </div>
                                    <div className="card-div mt-2">
                                        <div className="right-img-box p-2">
                                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Star_Jalsha_logo.jpg/220px-Star_Jalsha_logo.jpg" />
                                        </div>
                                        <div className="right-info-box">
                                            <span className="right-box-title">Suryavansham</span>
                                            <div className="d-desktop-block">
                                                <span>U/A </span> | <span>Hindi</span> | <span>2.40 Hrs</span>
                                            </div>
                                            <div className="right-calander pt-2"><img src={calander} className="pr-2" />23 Oct</div>
                                            <div className="right-follower"><img src={folowers} className="pr-2" />3500 Followers</div>
                                            <div className="btn btn-outline-coral width-80pc mt-2">
                                                <i className="plus-coral">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9"><path className="plus-icn" fill="#f45050" fill-rule="evenodd" d="M8.508 4.872H5.072v3.436H3.944V4.872H.508V3.744h3.436V.308h1.128v3.436h3.436z"/></svg>
                                                </i> Follow</div>
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

export default ChennalDetail;