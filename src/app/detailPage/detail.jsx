import React, {Component} from 'react';
import '../../assets/css/detail.css';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import folowers from '../../assets/images/followers.svg';
import calander from '../../assets/images/calander.svg';
import plusIcn from '../../assets/images/plus.svg';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const paneltitle = <div className="detail-panel-title">
                                        <span>
                                            <span className="d-episodes"> E 392 </span><span className="spacer">|</span>00:29:23 Mins<span className="spacer">|</span>06 June
                                        </span>
    <div className="coral-arrow pull-right"></div>
</div>;
    const detailPanelInfoWrap = <div className="detail-panel-info-wrap">
        <div className="detail-panel-info">
            <p>Ishqbaaaz is a Hindi drama aired on StarPlus. The story is about three brothers - Shivaay, Omkara and Rudra -- who share an unbreakable bond despite their dysfunctional family. Watch all the latest episodes of Ishqbaaaz on Hotstar.</p>
        </div>
        <div className="panel-filters">
            <div className="panel-filter-head">
                <span className="fltrs">Filters :</span>
                <span className="fltr-tab active">Best Price</span>
                <span className="fltr-tab">SD</span>
                <span className="fltr-tab">HD</span>
                <span className="fltr-tab">4K</span>
            </div>
            <div className="panel-filter-info">
                <div className="panel-filter-info-row">
                    <div className="panel-filter-strip">Stream</div>
                    <div className="panel-chnl-wrp">
                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>


                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    </div>

class Details extends Component {
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
                   <div className="tabs"><span className="active">Info</span></div>
                   <div className="tabs"><span>Cast</span></div>
                   <div className="tabs"><span>Episode</span></div>
               </div>
                <div className="container">
                    <div className="card-component d-desktop-block">
                        <div className="padd">
                            <div className="detail-left-wrp">
                                <img src="https://www.91-cdn.com/upcomingg-img/tr:w-150/images/images/000/005/146/original/MV5BY2ZhYjc1ZjUtZGU2Ny00M2Y0LWEyNDMtZGQ0NzEyZDNkYTM3XkEyXkFqcGdeQXVyNzQ3NTY5MjE_._V1_QL50_SY1000_CR0_0_798_1000_AL_.jpg?1529661557" />
                            </div>
                            <div className="detail-ryt-wrp">
                            <h1 className="details-title">Kumkum Bhagya</h1>
                            <div className="detail-filter pb-1">
                                <span>TV Show</span> | <span>Drama</span> | <span>Hinid</span> | <span>Zee TV</span> | <span>241 Episodes</span>
                            </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="card-component">
                        <div className="padd d-mobile-block">
                            <h1 className="details-title">Kumkum Bhagya</h1>
                            <div className="detail-filter pb-1">
                                <span>TV Show</span> | <span>Drama</span> | <span>Hinid</span> | <span>Zee TV</span> | <span>241 Episodes</span>
                            </div>
                        </div>
                        <div className="top-banner img-center d-mobile-block">
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
                                <div className="card-div xs-card mr-2">
                                    <a href="#" className="card-xs-img img-top">
                                        <img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/>
                                        <img src="/static/media/play-white.b02d28e3.svg" className="play-episode" />
                                    </a>
                                    <div className="card-bottom">
                                        <div className="card-title">Season 1</div>
                                        <div className="card-subtitle">18 Episodes</div>
                                    </div>
                                </div>
                                <div className="card-div xs-card mr-2">
                                    <a href="#" className="card-xs-img img-top">
                                        <img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/>
                                        <img src="/static/media/play-white.b02d28e3.svg" className="play-episode" />
                                    </a>
                                    <div className="card-bottom">
                                        <div className="card-title">Season 2</div>
                                        <div className="card-subtitle">41 Episodes</div>
                                    </div>
                                </div>
                                <div className="card-div xs-card mr-2">
                                    <a href="#" className="card-xs-img img-top">
                                        <img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/007/461/original/1.jpg?1531212727"/>
                                        <img src="/static/media/play-white.b02d28e3.svg" className="play-episode" />
                                    </a>
                                        <div className="card-bottom"><div className="card-title">Season 3</div>
                                        <div className="card-subtitle">11 Episodes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End card wrapper */}
                    </div>
                </div>

                {/*latest episode start*/}
                <div className="container">
                    <div className="card-component padd">

                        <Collapse className="custmAccrdian" accordion bordered={false}>
                            <Panel className="detail-panel-row" header={paneltitle} key="1" bordered={false}  showArrow={false}>
                                <div>{detailPanelInfoWrap}</div>
                            </Panel>
                            <Panel className="detail-panel-row" header={paneltitle} key="2" bordered={false}  showArrow={false}>
                                <div>{detailPanelInfoWrap}</div>
                            </Panel>
                               <Panel className="detail-panel-row" header={paneltitle} key="3" bordered={false}  showArrow={false}>
                                   <div>{detailPanelInfoWrap}</div>                                                                     
                               </Panel>
                        </Collapse>

                        {/*  card wrapper */}
                        <div className="">
                            <span className="details-subtitle text-uppercase">KUMKUM BHAGYA LATEST EPISODES - SEASON 1</span><span className="view-all d-desktop-block">VIEW ALL EPISODES</span>
                            <div className="detail-latest-wrap">
                                <div className="detail-panel-row active">
                                    <div className="detail-panel-title">
                                        <span>
                                            <span className="d-episodes"> E 392 </span><span className="spacer">|</span>00:29:23 Mins<span className="spacer">|</span>06 June
                                        </span>
                                        <div className="coral-arrow pull-right"></div>
                                    </div>
                                    <div className="detail-panel-info-wrap">
                                    <div className="detail-panel-info">
                                        <p>Ishqbaaaz is a Hindi drama aired on StarPlus. The story is about three brothers - Shivaay, Omkara and Rudra -- who share an unbreakable bond despite their dysfunctional family. Watch all the latest episodes of Ishqbaaaz on Hotstar.</p>
                                    </div>
                                    <div className="panel-filters">
                                        <div className="panel-filter-head">
                                            <span className="fltrs">Filters :</span>
                                            <span className="fltr-tab active">Best Price</span>
                                            <span className="fltr-tab">SD</span>
                                            <span className="fltr-tab">HD</span>
                                            <span className="fltr-tab">4K</span>
                                        </div>
                                        <div className="panel-filter-info">
                                            <div className="panel-filter-info-row">
                                                <div className="panel-filter-strip">Stream</div>
                                                <div className="panel-chnl-wrp">
                                                    <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                    <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                    <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                    <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                    <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                    <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                    <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                    <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>


                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="detail-panel-row">
                                    <div className="detail-panel-title">
                                        <span>
                                            <span className="d-episodes"> E 392 </span><span className="spacer">|</span>00:29:23 Mins<span className="spacer">|</span>06 June
                                        </span>
                                        <div className="coral-arrow pull-right"></div>
                                    </div>
                                    <div className="detail-panel-info-wrap">
                                        <div className="detail-panel-info">
                                            <p>Ishqbaaaz is a Hindi drama aired on StarPlus. The story is about three brothers - Shivaay, Omkara and Rudra -- who share an unbreakable bond despite their dysfunctional family. Watch all the latest episodes of Ishqbaaaz on Hotstar.</p>
                                        </div>
                                        <div className="panel-filters">
                                            <div className="panel-filter-head">
                                                <span className="fltrs">Filters :</span>
                                                <span className="fltr-tab active">Best Price</span>
                                                <span className="fltr-tab">SD</span>
                                                <span className="fltr-tab">HD</span>
                                                <span className="fltr-tab">4K</span>
                                            </div>
                                            <div className="panel-filter-info">
                                                <div className="panel-filter-info-row">
                                                    <div className="panel-filter-strip">Stream</div>
                                                    <div className="panel-chnl-wrp">
                                                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>
                                                        <div className="panel-chnl"><img src="https://images.justwatch.com/icon/4233120/s100/hotstar" /></div>


                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End card wrapper */}
                    </div>
                    <div className="btn btn-bg-pink w-100 mb-2 d-mobile-block">VIEW ALL EPISODES</div>
                </div>
                {/*latest episode end*/}
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
                                            <div className="panel-filter-info">
                                                <div className="panel-filter-info-row main-panel-row">
                                                    <div className="panel-filter-strip">Stream</div>
                                                    <div className="panel-chnl-wrp ">
                                                        <div className="main-panel-outr">
                                                            <div className="panel-chnl">
                                                                <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                            </div>
                                                            <div className="seasontitle">1 Season</div>
                                                        </div>
                                                        <div className="main-panel-outr">
                                                            <div className="panel-chnl">
                                                                <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                            </div>
                                                            <div className="seasontitle">1 Season</div>
                                                        </div>
                                                        <div className="main-panel-outr">
                                                            <div className="panel-chnl">
                                                                <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                            </div>
                                                            <div className="seasontitle">1 Season</div>
                                                        </div>
                                                        <div className="main-panel-outr">
                                                            <div className="panel-chnl">
                                                                <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                            </div>
                                                            <div className="seasontitle">1 Season</div>
                                                        </div>
                                                        <div className="main-panel-outr">
                                                            <div className="panel-chnl">
                                                                <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"/>
                                                            </div>
                                                            <div className="seasontitle">1 Season</div>
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
                {/*cast start*/}
                <div className="container">
                    <div className="card-component padd">
                        <span className="details-subtitle text-uppercase">KUMKUM BHAGYA - star cast</span><span className="view-all d-desktop-block">VIEW FULL CAST </span>
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
                        <span className="details-subtitle text-uppercase">KUMKUM BHAGYA - star crew</span><span className="view-all d-desktop-block">VIEW FULL CREW</span>
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
                    <div className="card-header mt-2">Popular Hindi TV Shows</div>
                    <div className="card-slider">
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