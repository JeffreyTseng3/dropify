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

        let main_page_class = this.props.modal ? "main-page-module-modal-open" : "main-page-module";

        return (
            <div className={main_page_class}> 
                    <NavBarContainer /> 
                    <ExploreModuleContainer /> 
                    <MusicPlayerBarContainer />
            </div> 
            )
        }
        
    }
    
    export default MainPage;