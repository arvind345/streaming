import React, {Component} from 'react';
import '../../assets/css/common.css';
import '../../assets/css/list.css';


class ChannelListPage extends Component {
    render() {
        return(
            <div>
                <div className="container">
                    <div className="no-m-card-component card-component">
                        <div className="row no-gutters">
                            <div className="col-12 ">
                                <div className="padd">
                                    <div className="card-header mt-2 list-title">Channels
                                        <div className="select_container cust-select pull-right d-desktop-block">
                                            <select>
                                              <option>SORT BY : LAUNCH DATE</option>
                                              <option>Sort By: Popularity</option>
                                              <option>Sort By: Popularity</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="chnl-listwrp">
                                        <div className="chnl-listcard">
                                            <div className="card-div ch-card ">
                                                <a href="#" className="card-ch-img img-center">
                                                    <img src="https://vignette.wikia.nocookie.net/logopedia/images/3/3b/%D8%A7%D9%84%D9%85%D8%B3%D9%8A%D9%84%D8%A9_%D8%A8%D8%B1%D8%B3.png/revision/latest?cb=20170604044941"  />
                                                </a>
                                                <div className="card-bottom">
                                                    <div className="card-title oneline-truncate">Colors</div>
                                                    <div className="card-subtitle oneline-truncate">59 Shows</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="chnl-listcard">
                                            <div className="card-div ch-card ">
                                                <a href="#" className="card-ch-img img-center">
                                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Star_Jalsha_logo.jpg/220px-Star_Jalsha_logo.jpg"  />
                                                </a>
                                                <div className="card-bottom">
                                                    <div className="card-title oneline-truncate">STAR Jalsha</div>
                                                    <div className="card-subtitle oneline-truncate">59 Shows</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chnl-listcard">
                                            <div className="card-div ch-card ">
                                                <a href="#" className="card-ch-img img-center">
                                                    <img src="http://lh3.ggpht.com/-pK3ELybQHwE/Tf977i1pREI/AAAAAAAAEZI/ro5MRIy5DBY/zee-tv-new-logo%25255B4%25255D.jpg?imgmax=800"  />
                                                </a>
                                                <div className="card-bottom">
                                                    <div className="card-title oneline-truncate">Zee Tv</div>
                                                    <div className="card-subtitle oneline-truncate">59 Shows</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chnl-listcard">
                                            <div className="card-div ch-card ">
                                                <a href="#" className="card-ch-img img-center">
                                                    <img src="https://vignette.wikia.nocookie.net/logopedia/images/8/8c/%26TV.jpg/revision/latest?cb=20161205163128"  />
                                                </a>
                                                <div className="card-bottom">
                                                    <div className="card-title oneline-truncate">STAR PLUS</div>
                                                    <div className="card-subtitle oneline-truncate">59 Shows</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chnl-listcard">
                                            <div className="card-div ch-card ">
                                                <a href="#" className="card-ch-img img-center">
                                                    <img src="https://secure-media3.hotstar.com/r1/thumbs/PCTV/21/821/PCTV-821-hs.jpg"  />
                                                </a>
                                                <div className="card-bottom">
                                                    <div className="card-title oneline-truncate">STAR PLUS</div>
                                                    <div className="card-subtitle oneline-truncate">59 Shows</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chnl-listcard">
                                            <div className="card-div ch-card ">
                                                <a href="#" className="card-ch-img img-center">
                                                    <img src="https://secure-media3.hotstar.com/r1/thumbs/PCTV/21/821/PCTV-821-hs.jpg"  />
                                                </a>
                                                <div className="card-bottom">
                                                    <div className="card-title oneline-truncate">STAR PLUS</div>
                                                    <div className="card-subtitle oneline-truncate">59 Shows</div>
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