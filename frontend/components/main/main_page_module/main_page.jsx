import React from "react";
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import MusicPlayerModuleContainer from "../music_player/music_player_module/music_player_module_container";
import ExploreModuleContainer from "../explore_module/explore_module_container"

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author_id: this.props.currentUserId
        }
    }

    componentDidMount() {
     
        // i fetch user here to user for my playlistShowRender
        let {currentUserId, fetchUser } = this.props;
    
        fetchUser(currentUserId)

    }

    render() {
        // THIS prevents overscrolling 
        let { pathname } = this.props.location;
        let main_page_class = this.props.modal ? "main-page-module-modal-open" : "main-page-module";


        // let background_color; 
        //     debugger
        // switch(pathname) {
        //     case ("/main/browse/featured"):
        //         background_color = 'blue-background';
        //         break;
        //     case (pathname.split('/').includes('artist')):
        //         background_color = 'black-background';
        //         break;
        //     case (pathname.split('/').includes('collection')):
        //         debugger
        //         background_color = 'red-background';
        //         break;
        //         //  default: 
        //         //      background_color = "blue-background";
        //         //      break;
        // }
        //     // background_color = 'hello';
        //     debugger

        let backgroundColors = ['blue-background', 'red-background', 'black-background',
                                'grey-background', 'purple-background', 'yellow-background',
                                'orange-background']
        let backgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)]

        return (
            <div className={backgroundColor}> 

            
                <div className={main_page_class}> 
                        <NavBarContainer /> 
                        <ExploreModuleContainer /> 
                        <MusicPlayerModuleContainer />
                </div> 
            </div>
            )
        }
        
    }
    
    export default MainPage;