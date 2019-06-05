import { combineReducers } from "redux";
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import currentSongReducer from "./current_song_reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
    ui: uiReducer,
    current_song: currentSongReducer,
});


export default rootReducer;