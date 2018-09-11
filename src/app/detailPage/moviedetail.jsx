import React, {Component} from 'react';
import '../../assets/css/detail.css';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import folowers from '../../assets/images/followers.svg';
import calander from '../../assets/images/calander.svg';
import plusIcn from '../../assets/images/plus.svg';


class Details extends Component {
    render() {
        return (
            <div>
                <div className="top-banner img-center d-desktop-block">
                    <img className="img-fluid" src="https://images.justwatch.com/backdrop/24944793/s1440/tubelight" alt="" />
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
                                        <div className="detail-left-wrp">
                                            <img src="https://images.justwatch.com/poster/8904901/s592/tubelight" />
                                        </div>
                                        <div className="detail-ryt-wrp detail-movie-wrp">
                                            <h1 className="details-title">Tubelight</h1>
                                            <div className="detail-filter pb-1">
                                                <span>Movie</span> | <span>Hindi</span> | <span>Drama</span> | <span>2 Hrs 30 Mins</span>
                                            </div>
                                        </div>
                                        <div className="movie-rating"><span><b>6.5</b>/10</span>
                                            <div className="rate-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" /></div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="card-component">
                                    <div className="d-mobile-block">
                                    <div className="padd">
                                        <h1 className="details-title">Tubelight</h1>
                                        <div className="detail-filter pb-1">
                                            <span>Movie</span> | <span>Hindi</span> | <span>Drama</span> | <span>2 Hrs 30 Mins</span>| <span>2017</span>
                                        </div>
                                    </div>
                                        <div className="shadow">
                                    <div className="top-banner img-center">
                                        <img className="img-fluid" src="https://images.justwatch.com/backdrop/24944793/s1440/tubelight" alt="" />
                                    </div>
                                        <div className="bnr-btm">
                                            <div className="bnr-btm-play"><img
                                                src="/static/media/play-white.b02d28e3.svg" /></div>
                                            <div className="bnr-btm-txt-wrp">
                                                <div className="bnr-btm-txt">Latest Episode</div>
                                                <div className="bnr-date">5 Sept, 2017</div>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="movie-rating-div">
                                            <span className="rat-titl">Rating:</span>
                                            <span className="mov-rat"><span className="mov-rat-img"><img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" /></span>6.5</span>
                                            <span className="mov-rat ml-5"><span className="mov-rat-img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Rottentomatoesnewlogo.svg/1280px-Rottentomatoesnewlogo.svg.png" /></span>6.5</span>
                                        </div>

                                </div>
                                    <div className="padd">
                                        <span className="overview-title font-weight-bold">Tubelight Story</span>
                                        <span className="description clearfix d-block">
                                Tubelight (2017) is a Hindi movie starring Salman Khan, Sohail Khan, Zhu Zhu, Matin Rey Tangu and Om Puri. Directed by Kabir Khan, the film takes us back during the 1962 Sino-Indian War, where Laxman Singh Bisht popularly known as Tubelight, teaches the villagers that 'faith can move mounta...<span className="read-more">read more</span>
                            </span>
                                    </div>
                                </div>
                            </div>




                            {/*watch now start*/}
                            <div className="container">
                                <div className="card-component padd">
                                    <div className=""><span className="details-subtitle text-uppercase">Watch Now</span>
                                        <div className="detail-latest-wrap watch-div">
                                            <div className="detail-panel-row active">
                                                <div className="detail-panel-info-wrap">
                                                    <div className="panel-filters">
                                                        <div className="panel-filter-head"><span
                                                            className="fltrs">Filters :</span><span className="fltr-tab active">Best Price</span><span
                                                            className="fltr-tab">SD</span><span className="fltr-tab">HD</span><span
                                                            className="fltr-tab">4K</span></div>
                                                        <div className="panel-filter-info movie-filter-info desktop-flex">
                                                            <div className="panel-filter-info-row main-panel-row flex-1">
                                                                <div className="panel-filter-strip">Stream</div>
                                                                <div className="panel-chnl-wrp ">
                                                                    <div className="main-panel-outr">
                                                                        <div className="panel-chnl">
                                                                            <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                                        </div>
                                                                        <div className="seasontitle">Rs. 100</div>
                                                                    </div>
                                                                    <div className="main-panel-outr">
                                                                        <div className="panel-chnl">
                                                                            <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                                        </div>
                                                                        <div className="seasontitle">Rs. 100</div>
                                                                    </div>
                                                                    <div className="main-panel-outr">
                                                                        <div className="panel-chnl">
                                                                            <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                                        </div>
                                                                        <div className="seasontitle">Rs. 100</div>
                                                                    </div>

                                                                </div>
                                                                <div className="clearfix"></div>
                                                            </div>
                                                            <div className="panel-filter-info-row main-panel-row rent-row flex-1">
                                                                <div className="panel-filter-strip">Rent</div>
                                                                <div className="panel-chnl-wrp ">
                                                                    <div className="main-panel-outr">
                                                                        <div className="panel-chnl">
                                                                            <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                                        </div>
                                                                        <div className="seasontitle">Rs. 100</div>
                                                                    </div>
                                                                    <div className="main-panel-outr">
                                                                        <div className="panel-chnl">
                                                                            <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                                        </div>
                                                                        <div className="seasontitle">Rs. 100</div>
                                                                    </div>
                                                                    <div className="main-panel-outr">
                                                                        <div className="panel-chnl">
                                                                            <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                                        </div>
                                                                        <div className="seasontitle">Rs. 100</div>
                                                                    </div>

                                                                </div>
                                                                <div className="clearfix"></div>
                                                            </div>
                                                            <div className="panel-filter-info-row main-panel-row buy-row flex-1">
                                                                <div className="panel-filter-strip">Buy</div>
                                                                <div className="panel-chnl-wrp ">
                                                                    <div className="main-panel-outr">
                                                                        <div className="panel-chnl">
                                                                            <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                                        </div>
                                                                        <div className="seasontitle">Rs. 100</div>
                                                                    </div>
                                                                    <div className="main-panel-outr">
                                                                        <div className="panel-chnl">
                                                                            <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                                        </div>
                                                                        <div className="seasontitle">Rs. 100</div>
                                                                    </div>
                                                                    <div className="main-panel-outr">
                                                                        <div className="panel-chnl">
                                                                            <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                                        </div>
                                                                        <div className="seasontitle">Rs. 100</div>
                                                                    </div>

                                                                </div>
                                                                <div className="clearfix"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn btn-bg-pink w-100 mb-2 d-mobile-block">VIEW ALL EPISODES</div>
                            </div>
                            {/*watch now end*/}
                            <div className="container">
                                <div className="card-component padd">

                                    {/*  card wrapper */}
                                    <div className="card-wrapper">
                                        <span className="details-subtitle text-uppercase">Tubelight's Trailer</span>
                                        <div className="card-slider">
                                            <div className="card-div xs-card mr-2">
                                                <a href="#" className="card-xs-img img-top">
                                                    <img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/>
                                                    <img src="/static/media/play-white.b02d28e3.svg" className="play-episode" />
                                                </a>
                                                <div className="card-bottom">
                                                    <div className="card-title">01</div>
                                                    <div className="card-subtitle">02:15 Mins , 07 June, 17</div>
                                                </div>
                                            </div>
                                            <div className="card-div xs-card mr-2">
                                                <a href="#" className="card-xs-img img-top">
                                                    <img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/>
                                                    <img src="/static/media/play-white.b02d28e3.svg" className="play-episode" />
                                                </a>
                                                <div className="card-bottom">
                                                    <div className="card-title">02</div>
                                                    <div className="card-subtitle">02:15 Mins , 07 June, 17</div>
                                                </div>
                                            </div>
                                            <div className="card-div xs-card mr-2">
                                                <a href="#" className="card-xs-img img-top">
                                                    <img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/>
                                                    <img src="/static/media/play-white.b02d28e3.svg" className="play-episode" />
                                                </a>
                                                <div className="card-bottom"><div className="card-title">03</div>
                                                    <div className="card-subtitle">02:15 Mins , 07 June, 17</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End card wrapper */}
                                </div>
                            </div>
                            {/*cast start*/}
                            <div className="container">
                                <div className="card-component padd">
                                    <span className="details-subtitle text-uppercase">Cast</span><span className="view-all d-desktop-block">VIEW FULL CAST </span>
                                    <div className="card-wrapper">
                                        <div className="card-slider">
                                            <div className="avtar-wrap">
                                                <div className="avtar-img"><img src="https://www.91-cdn.com/upcomingg-img/tr:w-100,fo-auto/people/avatars/000/002/009/original/6gGDmr7qdTxUIx6fyljUpwIxxwd.jpg?1529396963" /></div>
                                                <div className="avtar-txt">Sriti Jha ranveer kapoor</div>
                                            </div>
                                            <div className="avtar-wrap">
                                                <div className="avtar-img"><img src="https://www.91-cdn.com/upcomingg-img/tr:w-100,fo-auto/people/avatars/000/002/010/original/xFVHMvDC8s4Ab2sLXrdVxMxZ33b.jpg?1529396963" /></div>
                                                <div className="avtar-txt">Sriti Jha ranveer kapoor</div>
                                            </div>
                                            <div className="avtar-wrap">
                                                <div className="avtar-img"><img src="https://www.91-cdn.com/upcomingg-img/tr:w-100,fo-auto/people/avatars/000/002/009/original/6gGDmr7qdTxUIx6fyljUpwIxxwd.jpg?1529396963" /></div>
                                                <div className="avtar-txt">Sriti Jha ranveer kapoor</div>
                                            </div>
                                            <div className="avtar-wrap">
                                                <div className="avtar-img"><img src="https://www.91-cdn.com/upcomingg-img/tr:w-100,fo-auto/people/avatars/000/002/010/original/xFVHMvDC8s4Ab2sLXrdVxMxZ33b.jpg?1529396963" /></div>
                                                <div className="avtar-txt">Sriti Jha ranveer kapoor</div>
                                            </div>
                                            <div className="avtar-wrap">
                                                <div className="avtar-img"><img src="https://www.91-cdn.com/upcomingg-img/tr:w-100,fo-auto/people/avatars/000/002/009/original/6gGDmr7qdTxUIx6fyljUpwIxxwd.jpg?1529396963" /></div>
                                                <div className="avtar-txt">Sriti Jha ranveer kapoor</div>
                                            </div>
                                            <div className="avtar-wrap">
                                                <div className="avtar-img"><img src="https://www.91-cdn.com/upcomingg-img/tr:w-100,fo-auto/people/avatars/000/002/010/original/xFVHMvDC8s4Ab2sLXrdVxMxZ33b.jpg?1529396963" /></div>
                                                <div className="avtar-txt">Sriti Jha ranveer kapoor</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-component padd">
                                    <span className="details-subtitle text-uppercase">Crew</span><span className="view-all d-desktop-block">VIEW FULL CREW</span>
                                    <div className="card-wrapper">
                                        <div className="card-slider">
                                            <div className="avtar-wrap">
                                                <div className="avtar-img"><img src="https://www.91-cdn.com/upcomingg-img/tr:w-100,fo-auto/people/avatars/000/002/009/original/6gGDmr7qdTxUIx6fyljUpwIxxwd.jpg?1529396963" /></div>
                                                <div className="avtar-txt">Sriti Jha ranveer kapoor</div>
                                                <div className="avtar-post">Director</div>
                                            </div>
                                            <div className="avtar-wrap">
                                                <div className="avtar-img"><img src="https://www.91-cdn.com/upcomingg-img/tr:w-100,fo-auto/people/avatars/000/002/010/original/xFVHMvDC8s4Ab2sLXrdVxMxZ33b.jpg?1529396963" /></div>
                                                <div className="avtar-txt">Sriti Jha ranveer kapoor</div>
                                                <div className="avtar-post">Asst. Director</div>
                                            </div>
                                            <div className="avtar-wrap">
                                                <div className="avtar-img"><img src="https://www.91-cdn.com/upcomingg-img/tr:w-100,fo-auto/people/avatars/000/002/009/original/6gGDmr7qdTxUIx6fyljUpwIxxwd.jpg?1529396963" /></div>
                                                <div className="avtar-txt">Sriti Jha ranveer kapoor</div>
                                                <div className="avtar-post">Asst. Director</div>
                                            </div>
                                            <div className="avtar-wrap">
                                                <div className="avtar-img"><img src="https://www.91-cdn.com/upcomingg-img/tr:w-100,fo-auto/people/avatars/000/002/010/original/xFVHMvDC8s4Ab2sLXrdVxMxZ33b.jpg?1529396963" /></div>
                                                <div className="avtar-txt">Sriti Jha ranveer kapoor</div>
                                                <div className="avtar-post">Asst. Director</div>
                                            </div>
                                            <div className="avtar-wrap">
                                                <div className="avtar-img"><img src="https://www.91-cdn.com/upcomingg-img/tr:w-100,fo-auto/people/avatars/000/002/009/original/6gGDmr7qdTxUIx6fyljUpwIxxwd.jpg?1529396963" /></div>
                                                <div className="avtar-txt">Sriti Jha ranveer kapoor</div>
                                                <div className="avtar-post">Asst. Director</div>
                                            </div>
                                            <div className="avtar-wrap">
                                                <div className="avtar-img"><img src="https://www.91-cdn.com/upcomingg-img/tr:w-100,fo-auto/people/avatars/000/002/010/original/xFVHMvDC8s4Ab2sLXrdVxMxZ33b.jpg?1529396963" /></div>
                                                <div className="avtar-txt">Sriti Jha ranveer kapoor</div>
                                                <div className="avtar-post">Music Director</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn btn-bg-pink w-100 mb-2 d-mobile-block">VIEW ALL CAST & CREW</div>
                            </div>
                            {/*cast end*/}

                            {/* popular tv shows*/}
                            <div className="container">
                                <div className="no-m-card-component card-component padd">
                                    <div className="card-wrapper">
                                        <div className="card-header mt-2">Popular Movies (Drama)</div>
                                        <div className="card-slider">
                                            <div className="card-div lg-card mr-3"><a href="#" className="card-lg-img img-top"><img
                                                src="http://via.placeholder.com/280x250" /></a>
                                                <div className="card-bottom">
                                                    <div className="card-title">The State Vs Jolly LL.B 2</div>
                                                    <div className="card-subtitle">Hindi, 2017</div>
                                                </div>
                                            </div>
                                            <div className="card-div lg-card mr-3"><a href="#" className="card-lg-img img-top"><img
                                                src="http://via.placeholder.com/280x250" /></a>
                                                <div className="card-bottom">
                                                    <div className="card-title">Kumkum Bhagya</div>
                                                    <div className="card-subtitle">Since 2009</div>
                                                </div>
                                            </div>
                                            <div className="card-div lg-card mr-3"><a href="#" className="card-lg-img img-top"><img
                                                src="http://via.placeholder.com/280x250" /></a>
                                                <div className="card-bottom">
                                                    <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                                    <div className="card-subtitle">Since 2009</div>
                                                </div>
                                            </div>
                                            <div className="card-div lg-card mr-3"><a href="#" className="card-lg-img img-top"><img
                                                src="http://via.placeholder.com/280x250" /></a>
                                                <div className="card-bottom">
                                                    <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                                    <div className="card-subtitle">Since 2009</div>
                                                </div>
                                            </div>
                                            <div className="card-div lg-card mr-3"><a href="#" className="card-lg-img img-top"><img
                                                src="http://via.placeholder.com/280x250" /></a>
                                                <div className="card-bottom">
                                                    <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                                    <div className="card-subtitle">196 Shows, 1161 Movies</div>
                                                </div>
                                            </div>
                                            <div className="card-div lg-card mr-3"><a href="#" className="card-lg-img img-top"><img
                                                src="http://via.placeholder.com/280x250" /></a>
                                                <div className="card-bottom">
                                                    <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                                    <div className="card-subtitle">Since 2009</div>
                                                </div>
                                            </div>
                                            <div className="card-div lg-card mr-3"><a href="#" className="card-lg-img img-top"><img
                                                src="http://via.placeholder.com/280x250" /></a>
                                                <div className="card-bottom">
                                                    <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                                    <div className="card-subtitle">Since 2009</div>
                                                </div>
                                            </div>
                                            <div className="card-div lg-card mr-3"><a href="#" className="card-lg-img img-top"><img
                                                src="http://via.placeholder.com/280x250" /></a>
                                                <div className="card-bottom">
                                                    <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                                    <div className="card-subtitle">Since 2009</div>
                                                </div>
                                            </div>
                                            <div className="card-div lg-card mr-3"><a href="#" className="card-lg-img img-top"><img
                                                src="http://via.placeholder.com/280x250" /></a>
                                                <div className="card-bottom">
                                                    <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                                    <div className="card-subtitle">Since 2009</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end popular tv shows*/}

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
                                            <button type="submit" id="LoginButton" className="btn btn-block btn-coral text-uppercase py-2"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9"><path className="plus-icn" fill="#fff" fill-rule="evenodd" d="M8.508 4.872H5.072v3.436H3.944V4.872H.508V3.744h3.436V.308h1.128v3.436h3.436z"/></svg> ADD TO WATCHLIST</button>
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
                                            <div className="btn btn-outline-coral mt-2">
                                                <i className="plus-coral">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9"><path className="plus-icn" fill="#f45050" fill-rule="evenodd" d="M8.508 4.872H5.072v3.436H3.944V4.872H.508V3.744h3.436V.308h1.128v3.436h3.436z"/></svg>
                                                </i> Follow</div>
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
                                            <div className="btn btn-outline-coral mt-2">
                                                <i className="plus-coral">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9"><path className="plus-icn" fill="#f45050" fill-rule="evenodd" d="M8.508 4.872H5.072v3.436H3.944V4.872H.508V3.744h3.436V.308h1.128v3.436h3.436z"/></svg>
                                                </i> Follow</div>
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
                                            <div className="btn btn-outline-coral mt-2">
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
        );
    }
}

export default Details;