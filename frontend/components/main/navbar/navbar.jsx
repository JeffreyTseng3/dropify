import React from "react";
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        let { currentUserId, fetchUser } = this.props;

        // fetchUser(currentUserId)
    }

    render() {
        let { users } = this.props;
        let user = users ? users[0] : null;
        let username = user ? user.username : null;
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



                <div className="nav-bottom"> 
                    
                    <div className="nav-bar-footer">
                        <Link to="/main/settings">
                            <img src="" alt="" />
                            <span className="nav-bar-profile">{username}</span>
                        </Link>

                    </div>
                </div>

            </div>
            )
    }
}

export default NavBar;