import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AlbumIconContainer  from '../../icons/albums/album_icon_container';
import TopArtistContainer from '../../icons/splash/top_artist_container';


class SplashPageHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {}
        
    }

    componentDidMount() {
        let { fetchAlbums, fetchArtists } = this.props;
        fetchAlbums();
        fetchArtists();
    }

    render() { 
        let { albums, artists } = this.props;
        let myAlbums = albums ? albums.slice(0,6) : null;
        let myArtists = artists ? artists.slice(6,8) : null;


        let displayAlbums = myAlbums ? myAlbums.map( album => {
            return <AlbumIconContainer key={album.id} album={album} />
        }) : null;

        let displayArtists = myArtists ? myArtists.map(artist => {
            return <TopArtistContainer key={artist.id} artist={artist}/> 
        }) : null;

        
        
        const displaySessionButtons = this.props.loggedIn ? ( 
                <div className="session-logout-btn">
                    <Link onClick={this.props.logout} to="/">Log Out</Link>
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
                                    <i className="fas fa-feather fa-4x"></i>
                                </Link>

                                <Link to="/" className="splash-logo-text">DROPIFY</Link>
                            </div>
                            {displaySessionButtons}
                        </div>
                    </div>

                    <div className="splash-tophalf-info">
                        <div className="splash-info-1">Music for App Academy</div>
                        <div className="splash-info-2">Just some songs seeded. Any donation would be appreciated.</div>
                        <Link className="splash-info-btn" to="/signup">DROP CASH NOW</Link>  
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
                        
                        <div className="quote">Yeah, everybody's got a bomb. We could all die any day. But before I'll let that happen. I'll dance my life away. -Prince</div>   
                        <div className="quote">Music does a lot of things for a lot of people. It's transporting, for sure. It can take you right back, years back, to the very moment certain things happened in your life. It's uplifting, it's encouraging, it's strengthening. - Aretha Franklin</div>

                    </div>
                </div>
                
                <div className='splash-footer'>
                    <a className="splash-github-jeff" href="https://github.com/JeffreyTseng3">
                        <i className="fab fa-github fa-3x"></i>
                    </a>
                    <a className="splash-linkedin-jeff" href="https://www.linkedin.com/in/jeffrey-tseng-32789965">
                        <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                </div>
            </div>
        )

        let { loggedIn } = this.props;

        let displayLoggedIn = (
            
            <div className="splash-loggedin-module"> 
                

                
                <div className='splash-loggedin-navbar'>
                    <div className='splash-loggedin-nav-holder'>
                        <div className="splash-logo-loggedin">
                            <Link to="/">
                                <i className="fas fa-feather fa-3x"></i>
                            </Link>

                            <Link to="/" className="splash-logo-text">DROPIFY</Link>
                        </div>


                        <div className="splash-nav-logout-btn">
                            {displaySessionButtons}
                        </div>
                    </div>
                </div>

                <div className="splash-loggedin-gradient">  
                    
                </div>

                <div className="splash-loggedin-topinfo">
                    <div className="splash-loggedin-left">
                        <div className="splash-loggedin-left-text">
                            Drop right in. 
                        </div>
                        <div className="splash-loggedin-left-small-text"> Pick back up listening.</div>
                        <button className="splash-loggedin-redirect" onClick={() => this.props.history.push('/main/browse/featured')}>
                            OPEN WEB PLAYER
                        </button>

                    </div>

                    <div className="splash-loggedin-right"> {displayAlbums}</div>
                </div>

                <div className="splash-loggedin-tophalf">
                </div>
                
                <div className="splash-loggedin-midhalf">
                    {displayArtists}
                </div>

                {/* <div className="loggedin-white">

                </div> */}

                <div className="loggedin-black">
                    <a className="splash-github-jeff" href="https://github.com/JeffreyTseng3">
                        <i className="fab fa-github fa-3x"></i>
                    </a>
                    <a className="splash-linkedin-jeff" href="https://www.linkedin.com/in/jeffrey-tseng-32789965">
                        <i className="fab fa-linkedin fa-3x"></i>
                    </a>

                </div>
                

            </div> 
        )
        
        let display = loggedIn ? displayLoggedIn : displayLoggedOut;

            

        return (
            <> 
                {display}
            </>
        );
    }
};

export default SplashPageHeader;