import React from "react";
import { Link } from 'react-router-dom';
import MusicPlayerInfoContainer from "../music_player_info/music_player_info_container";
import MusicPlayerConsoleContainer from '../music_player_console/music_player_console_container';

class MusicPlayerModule extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {

    }

    componentDidMount() {
        
    }

    render() {
        let { current_song } = this.props;
        
        return (
            <div className="music-player-module">
                <MusicPlayerInfoContainer current_song={current_song}/>
                {/* <MusicPlayerConsoleContainer current_song={current_song}/> */}
                <MusicPlayerConsoleContainer />
            </div>
        )
    }
}

export default MusicPlayerModule;