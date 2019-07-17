import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { fetchPlaylists } from "../../../actions/playlist_actions";
import PlaylistSongItemContainer from "../playlist_song_item/playlist_song_item_container";
import { fetchUsers } from "../../../actions/user_actions";

class PlaylistsExplore extends React.Component {
    constructor(props) {
        super(props);
        this.sortSongs = this.sortSongs.bind(this);
        this.handleAddToCollection = this.handleAddToCollection.bind(this);
        this.handleRemoveFromCollection = this.handleRemoveFromCollection.bind(this);
        this.ifSaved = this.ifSaved.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
    }

    // componentDidUpdate(prevProps) {
        // if (prevProps !== this.props) {
        //     let { playlistId } = this.props.match.params;
        //     let { playlists, fetchUser } = this.props;
        //     let myPlaylist = playlists ? playlists.filter(playlist => playlist.id == playlistId)[0] : null;
        //     let authorId = playlists ? myPlaylist.author_id : null;
        //     fetchUser(authorId);
        // }
    // }
 
    componentDidMount() {
        let { playlistId } =  this.props.match.params;
        let { fetchPlaylist, fetchUser, currentUserId, fetchUsers } = this.props;
        fetchPlaylist(playlistId);
        fetchUser(currentUserId);
        fetchUsers();
    }

    sortSongs(songIds, mySongs) {
        if (songIds.length === mySongs.length) {
            let sorted = [];
            for (let i = 0; i < songIds.length; i++) {
                let sortedId = songIds[i];
                for (let j = 0; j < mySongs.length; j++) {
                    let songobj = mySongs[j];
                    let unsortedId = songobj.id;
                    if (unsortedId === sortedId) {
                        sorted.push(songobj);
                    }
                }
                // let songIdx = mySongs.indexOf(id);
                // let song = mySongs[songIdx];
                // sorted.push(song);
            }
            // debugger
            return sorted;
        }
    }


    handleAddToCollection() {
        let { playlistId } = this.props.match.params;
        let { currentUserId, fetchCollection, addToCollection } = this.props;
        let type = 'Playlist';
        addToCollection(currentUserId, playlistId, type);
        fetchCollection();
    }

    handleRemoveFromCollection() {
        let { playlistId } = this.props.match.params;
        let { currentUserId, fetchCollection, removeFromCollection, collection } = this.props;
        let type = 'Playlist';
        let ans = collection.filter(item => item.followable_id == playlistId && item.followable_type == type && currentUserId === item.user_id);
        let id = ans ? ans[0].id : null;



        removeFromCollection(id);
        fetchCollection();
    }

    ifSaved() {
        let { collection, currentUserId } = this.props;
        if (collection === undefined) {

        } else {
        
            let { playlistId } = this.props.match.params;
            let type = "Playlist";
            let ans = collection.filter(item => item.followable_id == playlistId && item.followable_type == type && currentUserId === item.user_id);
            
            if (ans.length === 1) {
                return true;
            }
        }
    }

    handlePlay() {
        let { playlistId } = this.props.match.params;
        let { playlists, fetchCurrentSong, setMusicPlayType } = this.props;
        let playlist = playlists ? playlists.filter(playlist => playlist.id == playlistId)[0] : null;

        let songIds = playlist ? playlist.song_ids : null;
        let songId = songIds ? songIds[0] : null;
        fetchCurrentSong(songId);

        let musicPlayType = { playlist: playlistId }
        setMusicPlayType(musicPlayType);
    }
    



    render() {
        let { playlistId } = this.props.match.params;
        let { playlists, users, songs, currentUserId, addToCollection } = this.props;
        
        let myPlaylist = playlists ? playlists.filter(playlist => playlist.id == playlistId)[0] : null;
        let title = myPlaylist ? myPlaylist.title : null;

        let mySongs = songs ? songs.filter(song => song.playlist_ids.includes(Number(playlistId))) : null;
        // let mySongs = songs ? songs.filter(song => myPlaylist.song_ids.includes(Number(song.id))) : null;
        // debugger

        let sortedSongs = myPlaylist && mySongs ? this.sortSongs(myPlaylist.song_ids, mySongs) : null;
        
        let songsDisplay = sortedSongs ? sortedSongs.map(song => {
            return <PlaylistSongItemContainer key={song.id} song={song} />
        }) : null;
        let type = 'Playlist';
        let authorId = myPlaylist ? myPlaylist.author_id : null;
        let myUser = users && authorId ? users.filter(user => user.id === authorId)[0] : null; 
        let author = myUser ? myUser.username : null;
       


        let followBtn;

        if (this.ifSaved()) {
         

            followBtn = (
                <button
                    className='artist-save-lib'
                    onClick={() => this.handleRemoveFromCollection()}>
                    UNFOLLOW
                </button>)

        } else {
            followBtn = (
                <button
                    className='artist-save-lib'
                    onClick={() => this.handleAddToCollection()}>
                    FOLLOW
                </button>)
        };

        let displayFollowBtn = myUser ? (authorId === currentUserId ? 
              null : followBtn) : null;

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
                        
                        <div className="playlist-buttons">
                            <button
                                onClick={() => this.handlePlay()}
                                className="artist-show-play">
                                PLAY
                            </button>
                            {/* <button
                                className='artist-save-lib'
                            onClick={() => addToCollection(currentUserId, playlistId, type)}
                            >

                                FOLLOW
                        </button> */}
                            {displayFollowBtn}


                        </div>
                       
                    </div>
                  

                </div>
                    <div className='album-show-right'>{songsDisplay}</div>
                
            </div>
        )
    }

}

export default PlaylistsExplore;


