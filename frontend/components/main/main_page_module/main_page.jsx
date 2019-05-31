import React from "react";
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import MusicPlayerBarContainer from "../music_player_bar/music_player_bar_container";
import ExploreModuleContainer from "../explore_module/explore_module_container"

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
            
        let navDisplay = (
            <NavBarContainer />
            
        )
        
        let musicDisplay = (
            <MusicPlayerBarContainer />
            
        )

        let exploreDisplay = (
            <ExploreModuleContainer />
        )
        
        return (<> 
        <div className="main-page-module"> 
            <div className="nav-explore">
                {navDisplay}
                {exploreDisplay}
            </div>
                
            {musicDisplay}
            
            

        </div> 
            
            </>)
    }

}

export default MainPage;