import React from "react";
import { Link } from 'react-router-dom';

class AddSongPlaylistItem extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        let playlist_title = this.props.playlist.title;
        let playlistId = this.props.playlist.id;
        let { modal } = this.props;
        let songId = parseInt(modal.split(',')[1]);
        
        let playlistSongRelation = { song_id: songId, playlist_id: playlistId}; 
        // most of the below code comes from playlists_collection_item.jsx
        return (
            <>
        
                <button
                    // onClick={() => this.props.history.push(`/main/playlist/${playlist_id}`)}
                    onClick={() => this.props.addToPlaylist(playlistSongRelation)}
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

export default AddSongPlaylistItem;