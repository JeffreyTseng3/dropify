import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router"


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let searchBar = (
            <div className="search-results-bar">
                <div className="search-results-text">Top Results</div>
                <div className="search-results-text">Artists</div>
                <div className="search-results-text">Songs</div>
                <div className="search-results-text">Albums</div>
                <div className="search-results-text">Playlists</div>
            </div>
        )

        return (<>
            {searchBar}
         </> )
    
        
    }
}

export default SearchBar;