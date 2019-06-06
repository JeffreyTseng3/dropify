import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { fetchPlaylists } from "../../../actions/playlist_actions";

class PlaylistsExplore extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidUpdate(prevProps) {

    }

 
    componentDidMount() {
        // let { playlistId } =  this.props.match.params;
        // fetchPlaylists(playlistId);
    }

    render() {

        let { showPlaylist } = this.props;

        
        let title = showPlaylist ? showPlaylist.title : null;
        let author = showPlaylist ? showPlaylist.author_id : null;

        return (
            <div className="playlist-show-container">

                <div className="playlist-show-info-module">
                    <div className="playlist-show-picture">Picture</div>
                    <div className="playlist-show-info">
                        <div className="playlist-show-title">{title} </div>
                        <div className="playlist-show-author"> By {author}</div>
                    </div>
                    
                </div>
                
            </div>
        )
    }

}

export default PlaylistsExplore;


