import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SplashPageHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {}
        
    }

    componentDidMount() {
    }

    render() { 
        
        const displaySessionButtons = this.props.loggedIn ? ( 
                <div>
                    <Link onClick={this.props.logout} to="/">LOG OUT</Link>
                </div>
        ) : 

        (
             < div className = "splash-header-login-signup-combo" >
                <Link className="splash-signup-btn" to="/signup">Sign Up</Link>
                <Link className="splash-login-btn" to="/login">Log In</Link>
            </div >

        )
        
        const displayLoggedOut = (
            <div className="splash-logged-out-module">
                
                <div className="splash-tophalf">
                    <div className="navbar-module">
                        <div className="splash-header-navbar">
                            <div className="splash-logo-text-combo">
                                <Link to="/">
                                    <i className="fab fa-spotify fa-3x"></i>
                                </Link>

                                <Link to="/" className="splash-logo-text">DROPIFY</Link>
                            </div>
                            {displaySessionButtons}
                        </div>
                    </div>

                    <div className="splash-tophalf-info">
                        <div className="splash-info-1">Music for everyone.</div>
                        <div className="splash-info-2">Millions of songs. No credit card needed.</div>
                        <Link className="splash-info-btn" to="/signup">GET DROPIFY FREE</Link>  
                    </div>

                    <svg className="splash-img" viewBox="0 0 860 670" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        <linearGradient x1="-106.667514%" y1="70.4793437%" x2="154.616778%" y2="60.0590897%" id="linearGradientMobile">
                            <stop stopColor="#EF37A4" offset="0%"></stop>
                            <stop stopColor="#FAE62D" offset="100%"></stop>
                        </linearGradient>
                        <path d="M485.939677,496.837099 C556.214298,488.196195 621.76353,535.829955 634.260941,606.371434 C647.162497,679.275175 598.525185,748.837558 525.592532,761.752291 C468.437083,771.869608 413.473345,744.066412 386.100284,696.510359 C367.602872,706.720923 347.193543,714.149614 325.245353,718.034912 C218.115804,736.995169 115.882629,665.536759 96.918896,558.426851 C77.9551627,451.316942 149.426675,349.118051 256.556224,330.157794 C363.685773,311.197538 465.903404,382.640406 484.867138,489.750315 C485.286827,492.112576 485.613252,494.474838 485.939677,496.837099 Z M767.378577,57.0259738 C785.052154,156.878145 718.430383,252.145663 618.575447,269.816001 C518.704966,287.50188 423.419979,220.892322 405.730857,121.040152 C388.057279,21.2035219 454.67905,-74.079538 554.549531,-91.7498755 C654.404467,-109.435754 749.689455,-42.8106559 767.378577,57.0259738 Z M541.654192,413.432174 C512.913256,418.514144 485.493563,399.351852 480.41066,370.616185 C475.312214,341.880517 494.493564,314.465851 523.234501,309.383881 C551.959893,304.30191 579.379586,323.464202 584.478033,352.19987 C589.560935,380.935537 570.395129,408.350203 541.654192,413.432174 Z" id="10" fill="url(#linearGradientMobile)" transform="translate(432.044812, 334.613911) rotate(269.000000) translate(-432.044812, -334.613911) "></path>
                    </svg>
                </div>

                <div className="splash-white-space">
                    <div className="splash-get-premium">
                        Welcome!
                    </div>
                </div>
                
                <div className='splash-footer'>
                    <a className="splash-github-jeff" href="https://github.com/JeffreyTseng3">Github</a>
                    <a className="splash-linkedin-jeff" href="https://www.linkedin.com/in/jeffrey-tseng-32789965">LinkedIn</a>
                </div>
            </div>
        )

      
        let displayLoggedIn = (
        
            <div>
                <p>hello,</p>
                <Link onClick={this.props.logout} to="/">Log Out</Link>
            </div> 
        )
        
        let display = false ? displayLoggedIn : displayLoggedOut;

            

        return (
            <> 
                {display}
            </>
        );
    }
};

export default SplashPageHeader;