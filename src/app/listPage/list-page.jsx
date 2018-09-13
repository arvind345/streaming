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
                   <div className="card-component">
                   <div className="row no-gutters">
                       <div className="col-12 col-sm-12 col-md-3 left-snippet border-right d-desktop-block">
                           <div className="padd">Filters</div>
                       </div>
                       <div className="col-12 col-sm-12 col-md-9">
                           <div className="padd ryt-snippet">
                                   <div className="card-header mt-2">Popular Hindi TV Shows</div>
                               <div className="clearfix"></div>
                               <div className="listwrp">
                                   <div className="listcard">
                                       <div className="card-div md-card ">
                                           <a href="#" className="card-md-img img-top">
                                               <img src="http://via.placeholder.com/280x250" />
                                           </a>
                                           <div className="card-bottom">
                                               <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                               <div className="card-subtitle">Since 2009</div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="listcard">
                                       <div className="card-div md-card ">
                                           <a href="#" className="card-md-img img-top">
                                               <img src="http://via.placeholder.com/280x250" />
                                           </a>
                                           <div className="card-bottom">
                                               <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                               <div className="card-subtitle">Since 2009</div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="listcard">
                                       <div className="card-div md-card ">
                                           <a href="#" className="card-md-img img-top">
                                               <img src="http://via.placeholder.com/280x250" />
                                           </a>
                                           <div className="card-bottom">
                                               <div className="card-title">Yeh Rishta Kya Kehlata Hai</div>
                                               <div className="card-subtitle">Since 2009</div>
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