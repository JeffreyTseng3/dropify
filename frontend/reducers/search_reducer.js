import { combineReducers } from 'redux';
import searchResultReducer from './search_result_reducer';
import searchHistoryReducer from './search_history_reducer';

const searchReducer = combineReducers({
    searchResult: searchResultReducer,
    searchHistory: searchHistoryReducer,
});

export default searchReducer;