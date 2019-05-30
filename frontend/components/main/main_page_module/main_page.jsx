import React from "react";
import { Link } from 'react-router-dom';
import NavBar from "../navbar/navbar_container";
import MusicPlayerBar from "../music_player_bar/music_player_bar_container";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
         
        let navDisplay = (
            <NavBar />
            
        )
        
        let musicDisplay = (
            <MusicPlayerBar />
            
        )

        return (<> 
        <div className="main-page-module"> 
            {navDisplay}
            {musicDisplay}
            <Link onClick={this.props.logout} to="/">LOGOUT</Link>


        </div> 

            </>)
    }

}

export default MainPage;