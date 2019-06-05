import React from "react";
import { Link } from 'react-router-dom';
import MusicPlayerInfoContainer from "../music_player_info/music_player_info_container";
import MusicPlayerConsoleContainer from '../music_player_console/music_player_console_container';

class MusicPlayerModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="music-player-module">
                <MusicPlayerInfoContainer />
                <MusicPlayerConsoleContainer />
            </div>
        )
    }
}

export default MusicPlayerModule;