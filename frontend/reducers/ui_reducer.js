import { combineReducers } from 'redux';
import newPlaylistModal from "./modal_reducer";

export default combineReducers({
    modal: newPlaylistModal
});

