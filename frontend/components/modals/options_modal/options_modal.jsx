import React from 'react';

class OptionsModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = { x: '200px', y: '350px' };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleQueue = this.handleQueue.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.ifSaved = this.ifSaved.bind(this);
    }

    componentDidUpdate() {
 
    }


    handleDelete(playlistSongRelation) {
        let { closeModal, deletePlaylistSong, fetchPlaylist, fetchPlaylists, fetchUser,currentUserId } = this.props;
        let historyArr = this.props.location.pathname.split("/");
        let playlistId = historyArr ? Number(historyArr[historyArr.length - 1]) : null;
        
        deletePlaylistSong(playlistSongRelation);
        closeModal();
  
        // fetchPlaylist(playlistId);
    }
    
    handleQueue(songId) {
        let { closeModal, addToQueue } = this.props;
        addToQueue(songId);
        closeModal();

    }

    handleSave(songId) {
        let { closeModal, currentUserId, addToCollection, fetchCollection } = this.props;
        let type = 'Song';
        addToCollection(currentUserId, songId, type);
        fetchCollection();
        closeModal();
    }


    handleRemove(songId) {
 
        let { currentUserId, fetchCollection, removeFromCollection, collection, closeModal } = this.props;
        let type = 'Song';
        let ans = collection.filter(item => item.followable_id == songId && item.followable_type == type && currentUserId === item.user_id);
        let id = ans ? ans[0].id : null;


        removeFromCollection(id);
        fetchCollection();
        closeModal();

    }

    ifSaved(songId) {
        let { collection, currentUserId } = this.props;
        if (collection === undefined) {

        } else {

            
            let type = "Song";
            let ans = collection.filter(item => item.followable_id == songId && item.followable_type == type && currentUserId === item.user_id);
            
            if (ans.length === 1) {
                return true;
            }
        }
    }

    
    render() {



        let { modal, closeModal, openModal } = this.props;

        
        if (modal === null) {
            return null;
        } else if ( modal.split(',')[0] !== 'options') {
            return null;
        }

        let addPlaylistModal = modal ? 'addSongToPlaylist,' + modal.split(',')[2] : null;
        let songId = modal ? Number(modal.split(',')[2]) : null;



        let followBtn;

        if (this.ifSaved(songId)) {
          

            followBtn = (
                <button
                    className='options-lib'
                    onClick={() => this.handleRemove(songId)}>
                    Remove from Your Library
                </button>)

        } else {
            followBtn = (
                <button
                    className='options-lib'
                    onClick={() => this.handleSave(songId)}>
                    Save to Your Library
                </button>)
        };


        let buttons = (
            <>
                {/* <button 
                    onClick={() => this.handleSave(songId)}
                    className="options-lib">
                    Save to Your Library
                </button> */}
                {followBtn}
                <button 
                    
                    onClick={() => this.handleQueue(songId)}
                    className="options-queue">
                    Add to Queue
                </button>
                <button 
                    // onClick={() => closeModal()}
                    onClick={() => openModal(addPlaylistModal)}
                    className="options-add-playlist">
                    Add to Playlist
                </button>
            </>
        );

        let historyArr = this.props.location.pathname.split("/");

        let  playlistId = historyArr ? Number(historyArr[historyArr.length - 1]) : null;
        let playlistSongRelation = { song_id: songId, playlist_id: playlistId }
        let { deletePlaylistSong } = this.props;

        let removeSongBtn = modal.split(',')[1] === 'playlist' ? (
            <>
                <button 
                    onClick={() => this.handleDelete(playlistSongRelation)}
                    className="options-remove-song"> 
                    Remove from Playlist
                </button>
            </>
        ) : null;

        const { x, y } = this.state; 
        const optionsModalStyle = {
            top: y,
            right: x,
        }






        return ( <> 
            <div className="options-modal-background" onClick={this.props.closeModal}>
                <div 
                    className="options-modal-mod" 
                    onClick={e => e.stopPropagation()}
                    style={optionsModalStyle}
                    >
                    {buttons}
                    {removeSongBtn}
                </div>
            </div>
        </>)
    }

}

export default OptionsModal;