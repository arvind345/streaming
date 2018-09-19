import React, {Component} from 'react';
import '../../assets/css/common.css';
import '../../assets/css/list.css';


class ListPage extends Component {
    render() {
       return(
           <div>
               <div className="m-d-flex tab-box">
                   <div className="tabs"><span className="active">ALL</span></div>
                   <div className="tabs"><span>Movies</span></div>
                   <div className="tabs"><span>TV Shows</span></div>
               </div>
               <div className="container">
                   <div className="no-m-card-component card-component">
                   <div className="row no-gutters">
                       <div className="col-cs-12 col-cssm-12 col-cslg-3 border-right d-desktop-block">
                           <div className="left-snippet">
                               <div className="row filtertop">
                                   <div className="col-6">Filters</div>
                                   <div className="col-6 clr-all">Clear All</div>
                               </div>
                               <div className="fltrwrap">
                                   <h5 className="fltrheading">MOVIE/TV SHOWS</h5>
                                   <div className="d-filtrlist">
                                   <ul>
                                       <li>
                                           <label className="filtrinput">
                                           <span className="filterinputtext">Movies</span>
                                           <input name="group1" type="radio" />
                                           <span className="radiobtn"></span>
                                       </label>
                                       </li>
                                       <li>
                                           <label className="filtrinput">
                                               <span className="filterinputtext">TV Shows</span>
                                               <input name="group1" type="radio" />
                                               <span className="radiobtn"></span>
                                           </label>
                                       </li>
                                       <li className="active">
                                           <label className="filtrinput">
                                               <span className="filterinputtext">All</span>
                                               <input name="group1" type="radio" checked />
                                               <span className="radiobtn"></span>
                                           </label>
                                       </li>
                                   </ul>
                                   </div>
                               </div>
                               <div className="fltrwrap">
                                   <h5 className="fltrheading">IMDB Rating</h5>
                                   <div className="d-filtrlist">
                                       <ul>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">1+</span>
                                                   <input name="group2" type="radio" />
                                                   <span className="radiobtn"></span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">2+</span>
                                                   <input name="group2" type="radio" />
                                                   <span className="radiobtn"></span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">3+</span>
                                                   <input name="group2" type="radio" />
                                                   <span className="radiobtn"></span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">4+</span>
                                                   <input name="group2" type="radio" />
                                                   <span className="radiobtn"></span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">5+</span>
                                                   <input name="group2" type="radio" />
                                                   <span className="radiobtn"></span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">6+</span>
                                                   <input name="group2" type="radio" />
                                                   <span className="radiobtn"></span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">7+</span>
                                                   <input name="group2" type="radio"  />
                                                   <span className="radiobtn"></span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">8+</span>
                                                   <input name="group2" type="radio" />
                                                   <span className="radiobtn"></span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">9+</span>
                                                   <input name="group2" type="radio" />
                                                   <span className="radiobtn"></span>
                                               </label>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="fltrwrap">
                                   <h5 className="fltrheading">LAUNCH DATE</h5>
                                   <div className="d-filtrlist">
                                       <ul>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">This Year (2018)</span>
                                                   <input name="group3" type="radio" />
                                                   <span className="radiobtn"></span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">Last Year (2017)</span>
                                                   <input name="group3" type="radio" />
                                                   <span className="radiobtn"></span>
                                               </label>
                                           </li>
                                           <li >
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">Between 2 dates</span>
                                                   <input name="group3" type="radio" checked />
                                                   <span className="radiobtn"></span>
                                               </label>
                                               <div className="d-yr-range-wrp">
                                                   <div className="d-yr-range-div">From {/*<i className="smdwnarw"></i>*/}</div>
                                                   <span className="date-spacer">-</span>
                                                   <div className="d-yr-range-div">To {/*<i className="smdwnarw"></i>*/}</div>
                                               </div>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="fltrwrap">
                                   <h5 className="fltrheading">Language</h5>
                                   <div className="d-filtrlist">
                                       <ul>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">Hindi (45) </span>
                                                   <input type="checkbox" />
                                                   <span className="checkmark"></span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">Engish (15) </span>
                                                   <input type="checkbox" />
                                                   <span className="checkmark"></span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">Tamil (10) </span>
                                                   <input type="checkbox" />
                                                   <span className="checkmark"></span>
                                               </label>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="fltrwrap">
                                   <h5 className="fltrheading">Genres</h5>
                                   <div className="d-filtrlist">
                                       <ul>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">Comedy (45) </span>
                                                   <input type="checkbox" />
                                                   <span className="checkmark"></span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className="filtrinput">
                                                   <span className="filterinputtext">Thriller (15) </span>
                                                   <input type="checkbox" />
                                                   <span className="checkmark"></span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className="filtrinput disable">
                                                   <span className="filterinputtext">Action & Adventure (45) </span>
                                                   <input type="checkbox" />
                                                   <span className="checkmark"></span>
                                               </label>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-cs-12 col-cssm-12 col-cslg-9">
                           <div className="ryt-snippet">
                                   <div className="card-header mt-2">580 RESULTS FOUND </div>
                               <div className="clearfix"></div>
                               <div className="listwrp">
                                   <div className="listcard">
                                       <div className="card-div md-card ">
                                           <a href="#" className="card-md-img img-top">
                                               <img src="https://secure-media2.hotstar.com/r1/thumbs/PCTV/86/586/PCTV-586-hcdl.jpg" className="img-cover" width="370px" height="300px" />
                                           </a>
                                           <div className="card-bottom">
                                               <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                               <div className="card-subtitle">DRAMA, Hindi, HotStar, 2004</div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="listcard">
                                       <div className="card-div md-card ">
                                           <a href="#" className="card-md-img img-top">
                                               <img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/012/550/original/cover.jpg?1533879605" className="img-cover" width="370px" height="300px" />
                                           </a>
                                           <div className="card-bottom">
                                               <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                               <div className="card-subtitle">Comedy, Hindi, AltBalaji, 2017</div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="listcard">
                                       <div className="card-div md-card ">
                                           <a href="#" className="card-md-img img-top">
                                               <img src="https://www.91-cdn.com/upcomingg-img/tr:h-215,w-375,q-100,fo-auto/images/images/000/012/550/original/cover.jpg?1533879605" className="img-cover" width="370px" height="300px" />
                                           </a>
                                           <div className="card-bottom">
                                               <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                               <div className="card-subtitle">Comedy, Hindi, AltBalaji, 2017</div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="listcard">
                                       <div className="card-div md-card ">
                                           <a href="#" className="card-md-img img-top">
                                               <img src="https://secure-media2.hotstar.com/r1/thumbs/PCTV/86/586/PCTV-586-hcdl.jpg" className="img-cover" width="370px" height="300px" />
                                           </a>
                                           <div className="card-bottom">
                                               <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                               <div className="card-subtitle">Comedy, Hindi, AltBalaji, 2017</div>
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

export default ListPage;