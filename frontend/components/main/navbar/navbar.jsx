import React from "react";
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }


    componentDidMount() {
        let { currentUserId, fetchUser, fetchUsers } = this.props;
        fetchUsers();
        // fetchUser(currentUserId)
    }

    handleSearch() {
        this.props.history.push("/main/search/recent");
    }

    render() {
        let { users, currentUserId } = this.props;
        let user = users ? users.filter(user => user.id === currentUserId)[0] : null;
        let username = user ? user.username : null;

        let pathname = this.props.history.location.pathname;
        // debugger

        let css = pathname == "/main/settings" ? "nav-bar-profile-selected" : "nav-bar-profile";

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

                    <button className="nav-bar-search" onClick={() => this.handleSearch() }>
                        <span className="nav-item-img"><i className="fas fa-search fa-2x"></i></span>
                        <span className="nav-item-search">Search</span>
                    </button>

                    {/* <Link className="nav-bar-search" to="/main/search">
                        <span className="nav-item-img"><i className="fas fa-search fa-2x"></i></span>
                        <span className="nav-item-search">Search</span>
                       
                    </Link> */}

                    <Link className="nav-bar-lib" to="/main/collection/playlists">
                        <span className="nav-item-img"><i className="fas fa-book-open fa-2x"></i></span>
                        <span className="nav-item">Library</span>
                    </Link>
                </div>



                <div className="nav-bottom"> 
                    

                        <button className="nav-bar-footer"

                            onClick={() => this.props.history.push("/main/settings")}>
                            <img 
                                className="nav-photo"
                                src="https://dropify-seeds.s3.amazonaws.com/jeffrey.jpg"   />
                            <span className={css}>{username}</span>
                        </button>

                    
                </div>

            </div>
            )
    }
}

export default NavBar;