import React from "react";
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (<> 
        <div> 
            <p>hello, {this.props.currentUserId}</p>
                <Link onClick={this.props.logout} to="/">LogOut</Link>
        </div> 
            </>)
    }

}

export default MainPage;