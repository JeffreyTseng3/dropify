import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { fetchPlaylists } from "../../../actions/playlist_actions";
import PlaylistSongItemContainer from "../playlist_song_item/playlist_song_item_container";

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
        fetchUser(currentUserId);
        
    }

    

    render() {
        let { playlistId } = this.props.match.params;
        let { playlists, users, songs, currentUserId } = this.props;
        
        let myPlaylist = playlists ? playlists.filter(playlist => playlist.id == playlistId)[0] : null;
        let title = myPlaylist ? myPlaylist.title : null;

        // let mySongs = songs ? songs.filter(song => song.playlist_ids.includes(Number(playlistId))) : null;
        let mySongs = songs ? songs.filter(song => myPlaylist.song_ids.includes(Number(song.id))) : null;
        // debugger
        let songsDisplay = mySongs ? mySongs.map(song => {
            return <PlaylistSongItemContainer key={song.id} song={song} />
        }) : null;

        let myUser = users ? users.filter(user => user.id === currentUserId)[0] : null; 
        let author = myUser ? myUser.username : null;
        return (
            <div className="playlist-show-container">
                <div className="playlist-show-info-module">
                    {/* <div className="playlist-show-picture">  */}
                        <div className="playlists-explore-item-img">
                            <i className="fas fa-music fa-3x"></i>
                            {/* <i class="fas fa-play-circle"></i> */}
                        </div>
                    {/* </div> */}
                    <div className="playlist-show-info">
                        <div className="playlist-show-title">{title} </div>
                        <div className="playlist-show-author"> By {author}</div>
                    </div>
                    

                </div>
                    <div className='album-show-right'>{songsDisplay}</div>
                
            </div>
        )
    }

}

export default PlaylistsExplore;


