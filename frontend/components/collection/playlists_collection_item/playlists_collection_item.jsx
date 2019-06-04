import React from "react";
import { Link } from 'react-router-dom';

class PlaylistsCollectionItem extends React.Component {

    constructor(props) {
        super(props);
    }

    

    render() {
        let playlist_title = this.props.playlist.title;
        let playlist_id = this.props.playlist.id;
        
        return ( 
            <>
                <button 
                    onClick={() => this.props.history.push(`/main/playlist/${playlist_id}`)}
                    className="playlists-explore-item">
                    <div className="playlists-explore-item-img">
                        <i className="fas fa-music fa-3x"></i>
                        {/* <i class="fas fa-play-circle"></i> */}
                    </div>
                        <div className="playlists-explore-item-text">{playlist_title}</div>
                </button>
            </>
        )
    }

}

export default PlaylistsCollectionItem;