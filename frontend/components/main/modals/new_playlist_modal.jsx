import React from 'react';
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import NewPlaylistFormModalContainer from "../new_playlist_form_modal/new_playlist_form_modal_container";


function NewPlaylistModal( {modal, closeModal} ) {
    if(!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'new': 
            component = <NewPlaylistFormModalContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="new-playlist-modal-background">
            <div className="new-playlist-form" onClick={e => e.stopPropagation()}> 
                <button className="new-playlist-form-close-modal" onClick={closeModal}>
                    <i class="fas fa-times fa-3x"></i>
                </button>
                {component}
            </div>
        </div>
    )
}

const msp = state => {
    return {
        modal: state.ui.modal
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(NewPlaylistModal);