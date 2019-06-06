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
        let { playlistId } =  this.props.match.params;
        let { fetchPlaylist, fetchUser, currentUserId} = this.props;
        fetchPlaylist(playlistId);
        fetchUser(currentUserId)
    }

    render() {
        let { playlistId } = this.props.match.params;
        let { playlists, users } = this.props;
        
        let myPlaylist = playlists ? playlists.filter(playlist => playlist.id == playlistId)[0] : null;
        let title = myPlaylist ? myPlaylist.title : null;
        // let author = myPlaylist ? myPlaylist.author_id : null;
        // debugger
        // let myUser = users !== [] ? users.filter(user => user.author_ids.includes(Number(playlistId)))[0] : null;
        let myUser = users ? users[0] : null; 
        let author = myUser ? myUser.username : null;
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


