import React, {Component} from 'react';
import '../assets/css/error.css';
import errorImg from '../assets/images/404-desktop.png';


class Error extends Component {
    render() {
        return (
          <div>
              <div className="error_page">
                  <div className="error_titl">404</div>
                  {/* <div class="error_txt2">Page not found</div>*/}
                  <div className="error_img"><img src={errorImg} /></div>
                  <div className="error_txt">Sorry we can't find that page you're looking for,</div>
                  <div className="error_btn"><a href="/">Go to Homepage <span className="error_arw">⇢</span></a></div>

              </div>
          </div>
        );
    }
}
export default Error;





