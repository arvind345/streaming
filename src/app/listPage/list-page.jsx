import React, {Component} from 'react';
import '../../assets/css/common.css';


class ListPage extends Component {
    render() {
       return(
           <div>
               <div className="m-d-flex tab-box">
                   <div className="tabs"><span className="active">ALL</span></div>
                   <div className="tabs"><span>Movies</span></div>
                   <div className="tabs"><span>TV Shows</span></div>
               </div>
           </div>
       )
    }
}

export default ListPage;