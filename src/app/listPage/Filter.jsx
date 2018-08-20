import React, {Component} from 'react';
import '../../assets/css/filter.css';


class Filter extends Component {
    render() {
        return (
            <div>
                <div className="filterhead">
                    <div><span></span>Filter</div>
                    <div className="clearfilter">Clear</div>
                </div>
                <div className="filterbody">
                    <div className="d-flex">
                    <div className="col-4 filterleft">
                        <ul className="flitertitle">
                            <li className="active"><a href="#">Movies/Shows</a><div className="filterarrow"></div></li>
                            <li><a href="#">IMDB Rating</a></li>
                            <li><a href="#">RElease year</a></li>
                            <li><a href="#">LANGUAGE</a></li>
                            <li><a href="#">genre</a></li>
                        </ul>
                    </div>
                    <div className="col-8 filterright">
                        <div className="filterlist">
                            <ul>


                                <li>
                                    <label className="filtrinput">
                                        <span className="filterinputtext">Movies</span>
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="filtrinput">
                                        <span className="filterinputtext">TV Shows</span>
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="filtrinput disable">
                                        <span className="filterinputtext">All</span>
                                        <input type="checkbox" disabled />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="filtrinput">
                                        <span className="filterinputtext">1+</span>
                                        <input className="with-gap" name="group1" type="radio"/>
                                        <span className="radiobtn"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="filtrinput">
                                        <span className="filterinputtext">2+</span>
                                        <input className="with-gap" name="group1" type="radio"/>
                                        <span className="radiobtn"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="filtrinput">
                                        <span className="filterinputtext">9+</span>
                                        <input className="with-gap" name="group1" type="radio"/>
                                        <span className="radiobtn"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="filtrinput">
                                        <span className="filterinputtext">This year (2018)</span>
                                        <input className="with-gap" name="group2" type="radio"/>
                                        <span className="radiobtn"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="filtrinput">
                                        <span className="filterinputtext">Last year (2017)</span>
                                        <input className="with-gap" name="group2" type="radio"/>
                                        <span className="radiobtn"></span>
                                    </label>
                                </li>
                                <div className="yr-range-wrp">
                                    <div className="yr-range-div">From <i className="smdwnarw"></i> </div>
                                    <div className="yr-range-div">To <i className="smdwnarw"></i></div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="filterfooter d-flex">
                    <div className="col-4">
                    <div className="btn cancel_button">Cancel</div>
                    </div>
                    <div className="col-8">
                        <div className="btn btn-coral w-100">Apply</div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Filter;