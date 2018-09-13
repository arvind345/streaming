import React, {Component} from 'react';
import '../../assets/css/common.css';
import '../../assets/css/list.css';


class ChannelListPage extends Component {
    render() {
        return(
            <div>
                <div className="m-d-flex tab-box">
                    <div className="tabs"><span className="active">ALL</span></div>
                    <div className="tabs"><span>Movies</span></div>
                    <div className="tabs"><span>TV Shows</span></div>
                </div>
                <div className="container">
                    <div className="card-component">
                        <div className="row no-gutters">
                            <div className="col-12 col-sm-12 col-lg-3 left-snippet border-right d-desktop-block">
                                <div className="padd">Filters</div>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-9">
                                <div className="padd ryt-snippet">
                                    <div className="card-header mt-2">Popular Hindi TV Shows</div>
                                    <div className="clearfix"></div>
                                    <div className="listwrp">
                                        <div className="listcard">
                                            <div className="card-div ch-card ">
                                                <a href="#" className="card-ch-img img-center">
                                                    <img src="https://secure-media3.hotstar.com/r1/thumbs/PCTV/21/821/PCTV-821-hs.jpg"  />
                                                </a>
                                                <div className="card-bottom">
                                                    <div className="card-title">STAR PLUS</div>
                                                    <div className="card-subtitle">59 Shows</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listcard">
                                            <div className="card-div ch-card ">
                                                <a href="#" className="card-ch-img img-center">
                                                    <img src="https://images.justwatch.com/icon/4233120/s100/hotstar"  />
                                                </a>
                                                <div className="card-bottom">
                                                    <div className="card-title">STAR PLUS</div>
                                                    <div className="card-subtitle">59 Shows</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listcard">
                                            <div className="card-div ch-card ">
                                                <a href="#" className="card-ch-img img-center">
                                                    <img src="https://secure-media3.hotstar.com/r1/thumbs/PCTV/21/821/PCTV-821-hs.jpg"  />
                                                </a>
                                                <div className="card-bottom">
                                                    <div className="card-title">STAR PLUS</div>
                                                    <div className="card-subtitle">59 Shows</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listcard">
                                            <div className="card-div ch-card ">
                                                <a href="#" className="card-ch-img img-center">
                                                    <img src="https://secure-media3.hotstar.com/r1/thumbs/PCTV/21/821/PCTV-821-hs.jpg"  />
                                                </a>
                                                <div className="card-bottom">
                                                    <div className="card-title">STAR PLUS</div>
                                                    <div className="card-subtitle">59 Shows</div>
                                                </div>
                                            </div>
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

export default ChannelListPage;