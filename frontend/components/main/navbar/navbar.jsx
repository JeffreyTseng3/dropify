import React from "react";
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       
        return (
              
            <div className="nav-bar-module">
                <Link className="navbar-splash-logo-text-combo" to="/main/browse/featured">
                    <span ><i className="fas fa-feather fa-3x"></i></span>
                    <span className="splash-logo-text">DROPIFY</span>
                </Link>

                <div className="nav-bar-group">

                    <Link className="nav-bar-home" to="/main/browse/featured">
                        <span className="nav-item-img"><i className="fas fa-igloo fa-2x"></i></span>
                        <span className="nav-item">Home</span>
                    </Link>

                    <Link className="nav-bar-search" to="/main/browse/featured">
                        <span className="nav-item-img"><i className="fas fa-search fa-2x"></i></span>
                        <span className="nav-item-search">Search</span>
                    </Link>

                    <Link className="nav-bar-lib" to="/main/collection/playlists">
                        <span className="nav-item-img"><i className="fas fa-book-open fa-2x"></i></span>
                        <span className="nav-item">Library</span>
                    </Link>
                </div>

                {/* <div className="nav-bar-recent">
                    <h2 className="nav-bar-recent-text">RECENTLY PLAYED</h2>
                    <ul className="nav-bar-playlists">
                        <li className="nav-bar-playlist-item">
                            <div>
                                <Link to="/" className="nav-bar-playlist-item-detail">PlaylistName</Link>
                                <div className="nav-bar-playlist-item-detail">Playlist</div>
                            </div>
                        </li>
                        <li className="nav-bar-playlist-item">
                            <div>
                                <Link to="/" className="nav-bar-playlist-item-detail">PlaylistName</Link>
                                <div className="nav-bar-playlist-item-detail">Playlist</div>
                            </div>
                        </li>
                        <li className="nav-bar-playlist-item">
                            <div>
                                <Link to="/" className="nav-bar-playlist-item-detail">PlaylistName</Link>
                                <div className="nav-bar-playlist-item-detail">Playlist</div>
                            </div>
                        </li>
                        <li className="nav-bar-playlist-item">
                            <div>
                                <Link to="/" className="nav-bar-playlist-item-detail"> PlaylistName</Link>
                                <div className="nav-bar-playlist-item-detail">Playlist</div>
                            </div>
                        </li>

                    </ul>
                </div> */}

                <Link onClick={this.props.logout} to="/">LOGOUT</Link>


                <div className="nav-bar-footer">


                    {/* <Link to="/" className="nav-bar-download">
                        <span to="/" className="nav-bar-download-img"><i className="fas fa-download"></i></span>
                        <span to="/" className="nav-bar-download-text">Install</span>
                    </Link> */}


                    <Link to="/">
                        <img src="" alt="" />
                        <span className="nav-bar-profile">{"Name"}</span>
                    </Link>

                </div>

            </div>
            )
    }
}

export default NavBar;