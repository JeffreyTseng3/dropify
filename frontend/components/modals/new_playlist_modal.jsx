import React from 'react';
import { fetchPlaylists } from '../../util/playlist_api_util';

// import NewPlaylistFormModalContainer from "../new_playlist_form_modal/new_playlist_form_modal_container";

class NewPlaylistModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            // author_id: this.props.currentUserId,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }
    
    
    handleSubmit(e) {
        e.preventDefault();
        
        let { closeModal, createPlaylist, showSinglePlaylist} = this.props;

        if (this.state.title === "") {
            return
        }
        // debugger
        const new_playlist = Object.assign({}, this.state, {author_id: this.props.currentUserId});
        createPlaylist(new_playlist)
        // createPlaylist(new_playlist, this.props.history)
        // .then(playlist => { 
            // this.props.history.push(`/main/playlist/${showSinglePlaylist.id}`)}
        // });
        closeModal();
    }
    
    
    
    
    componentDidMount() {

        // CHECK IF THIS IS OKAY TO RESET TITLE, it was not clearing cache previosuly without
        // this in the case of test an empty title submission
        this.state.title = "";
    }
  
    render () {
        let { modal, closeModal } = this.props;

        if (modal !== 'new') {
            return null;
        }

        // let component;
        // switch (modal) {
        //     case 'new':
        //         component = <NewPlaylistFormModalContainer />;
        //         break;
        //     default:
        //         return null;
        // }

        return (
            <div className="new-playlist-modal-background">
                <form 
                    className="new-playlist-form"
                    onClick={e => e.stopPropagation()}
                    onSubmit={this.handleSubmit}
                >
                    <button className="new-playlist-form-close-modal" onClick={closeModal}>
                        <i className="fas fa-times fa-3x"></i>
                    </button>

                    {/* {component} */}
                    {/* redundant new_playlist_form_modal folder */}
                    <div className="new-playlist-form-modal-text">Create new playlist</div>
                    <div className="new-playlist-input-box">
                        <div className="new-playlist-input-text">Playlist Name</div>
                        <input
                            className="new-playlist-input"
                            type="text"
                            placeholder="Start typing..."
                            onChange={this.handleInput("title")}
                        />
                    </div>

                    {/*  */}

                    <div className="new-playlist-modal-submission-box">
                        <button className="new-playlist-modal-cancel" onClick={closeModal}>
                                CANCEL
                        </button>


                        <input 
                            className="new-playlist-modal-submit"
                            type="submit" 
                            value="CREATE"
                        />

                    </div>
                </form>
            </div>
        )

    }
    
}

export default NewPlaylistModal;

