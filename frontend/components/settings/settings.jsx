import React from "react";
import { Link } from 'react-router-dom';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut() {
        let { logout } = this.props;
        logout();
        this.props.history.push('/');
    }

    render() {

        let { users } = this.props;
        let user = users ? users[0] : null;
        let username = user ? user.username : null;
        return( 
        <>
            <div className="settings-module">
                    <img 
                    className='settings-photo'
                    src="https://dropify-seeds.s3.amazonaws.com/jeffrey.jpg" />
                    <div className="settings-username"> {username} </div>
                    <button className="settings-logout" onClick={() => this.handleLogOut()}>Log Out</button>
            </div>
        </>)
    }
}

export default Settings;