import React, {Component} from 'react';


class Login extends Component {
    render() {
        return (
            <div>
                <div className="login-modal">
                    <div className="tab-pane" id="signup">
                        <div className="tab-pane-header">
                            <span className="btn-cross pull-left"></span>
                            <span className="pull-right">Existing user ? <span className="signin-txt">Sign In</span></span>
                            <h4 className="login-titl">Sign Up</h4>
                        </div>
                        <div className="tab-pane-body">
                            {/*sign up start*/}
                            <a href="#" className="btn btn-block btn-social-login btn-facebook">
                                <img src="http://stgpanel.upcoming.com/assets/login_form_icons/facebook-icon-1b061ce9f8d7dd27fc24d6bc4af18e6bf7cfa68f80b4ea76323ca2d2967ce76b.svg" alt="Facebook icon" />
                                Continue with Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-social-login btn-google">
                                <img src="http://stgpanel.upcoming.com/assets/login_form_icons/super-g-3e1bc1e649324a8f8bd72f6a6a9f1c5b43dbbd3db515b936b2ad88c822c1f2a2.svg" alt="Google icon" />
                                Continue with Google
                            </a>
                            <div className="signuptext1">We will never post without your permission</div>
                            <div className="signuptext2">Or Login with your email</div>
                            {/*sign up end*/}

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><img
                                        src="https://www.upcomingg.com/assets/login_form_icons/icon-name-ccb6fa67e7fe6c908f4332cb8a4cbe8908e5c6a8c5b74080322eba4019c45c57.svg" alt="Icon name" /></span>
                                </div>
                                <input type="text" className="form-control border-left-0" placeholder="Name" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><img
                                        src="https://www.upcomingg.com/assets/login_form_icons/icon-name-ccb6fa67e7fe6c908f4332cb8a4cbe8908e5c6a8c5b74080322eba4019c45c57.svg" alt="Icon name" /></span>
                                </div>
                                <input type="text" className="form-control border-left-0" placeholder="Email" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><img
                                        src="https://www.upcomingg.com/assets/login_form_icons/icon-name-ccb6fa67e7fe6c908f4332cb8a4cbe8908e5c6a8c5b74080322eba4019c45c57.svg" alt="Icon name" /></span>
                                </div>
                                <input type="text" className="form-control border-left-0" placeholder="Password" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><img
                                        src="https://www.upcomingg.com/assets/login_form_icons/icon-name-ccb6fa67e7fe6c908f4332cb8a4cbe8908e5c6a8c5b74080322eba4019c45c57.svg" alt="Icon name" /></span>
                                </div>
                                <input type="text" className="form-control border-left-0" placeholder="Confirm Password" />
                            </div>
                            <button type="submit" id="LoginButton"
                                    className="btn btn-block btn-coral text-uppercase py-2">Sign In
                            </button>
                            <div className="forgot-txt">Forgot Password</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;