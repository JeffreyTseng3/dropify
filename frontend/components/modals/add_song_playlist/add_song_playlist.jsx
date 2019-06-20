import React from 'react';
import AddSongPlaylistItemContainer from './add_song_playlist_item/add_song_playlist_item_container';

class AddSongPlaylistModal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { fetchPlaylists } = this.props;
        fetchPlaylists();
    }

    render() {

        let { modal, closeModal, currentUserId } = this.props;
        // debugger
        if (modal === null) {
            return null;
        } else if (modal.split(',')[0] !== 'addSongToPlaylist') {
            return null;
        }

        let { playlists } = this.props;

        let myPlaylists = playlists ? playlists.filter(playlist => playlist.author_id === currentUserId) : null;
        let playlists_display = myPlaylists.map(playlist => {
            return <AddSongPlaylistItemContainer key={playlist.id} playlist={playlist} />
  
        })

        return (<> 
           
        <div 
            className='add-to-playlist-modal-background'
            onClick={this.props.closeModal}>
                <div className="add-to-playlist-header">

                    <button className="new-playlist-form-close-modal" onClick={closeModal}>
                        <i className="fas fa-times fa-3x"></i>
                    </button>

                    <div className="add-to-playlist-text">Add to playlist</div>
                    
                    <button className="add-to-playlist-new-playlist-btn">
                        NEW PLAYLIST
                    </button>

                    <div className="add-to-playlist-list">
                        {playlists_display}
                    </div>
                </div>




               

        </div>
        
        </>)
    }

}

export default AddSongPlaylistModal;