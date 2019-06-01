import React from 'react';
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import { createPlaylist } from "../../../actions/playlist_actions";

// import NewPlaylistFormModalContainer from "../new_playlist_form_modal/new_playlist_form_modal_container";

class NewPlaylistModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist_title: "",
            author_id: this.props.currentUserId,
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
        const new_playlist = Object.assign({}, this.state);
        this.props.createPlaylist(new_playlist);
    }
    
  
    render () {
        let { modal, closeModal } = this.props;

        if (!modal) {
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
                            onChange={this.handleInput("playlist_title")}
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

const msp = state => {
    return {
        modal: state.ui.modal,
        currentUserId: state.session.currentUserId,
    };
};

const mdp = dispatch => {
    return {
        createPlaylist: playlist => dispatch(createPlaylist(playlist)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(NewPlaylistModal);