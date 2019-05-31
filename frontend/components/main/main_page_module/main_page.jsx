import React from "react";
import { Link } from 'react-router-dom';
import NavBar from "../navbar/navbar_container";
import MusicPlayerBar from "../music_player_bar/music_player_bar_container";
import ExploreModule from "../explore_module/explore_module";

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

        let exploreDisplay = (
            <ExploreModule />
        )
        
        return (<> 
        <div className="main-page-module"> 
            <div className="nav-explore">
                {navDisplay}
                {exploreDisplay}
            </div>
            {musicDisplay}
            <Link onClick={this.props.logout} to="/">LOGOUT</Link>


        </div> 

            </>)
    }

}

export default MainPage;