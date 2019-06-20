import OptionsModal from "./options_modal";
import { withRouter } from "react-router"
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { openModal } from '../../../actions/modal_actions';

const msp = state => {
    return {
        modal: state.ui.modal,
    }

}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (addPlaylistModal) => dispatch(openModal(addPlaylistModal)),
    }
}

export default withRouter(connect(msp, mdp)(OptionsModal));
