import { combineReducers } from "redux";
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import currentSongReducer from "./current_song_reducer";
import queueReducer from "./queue_reducer";
import musicPlayTypeReducer from './music_play_type_reducer';
import searchReducer from './search_reducer';
import CollectionsReducer from "./collections_reducer";


const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
    ui: uiReducer,
    current_song: currentSongReducer,
    queue: queueReducer,
    musicPlayType: musicPlayTypeReducer,
    search: searchReducer,
    collection: CollectionsReducer,
});


export default rootReducer;