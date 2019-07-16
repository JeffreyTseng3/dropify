import React from "react";
import PlaylistsExploreContainer from '../../collection/playlists_collection/playlists_collection_container';
import CollectionBarContainer from "../collection_bar/collection_bar_container";
import { Route } from 'react-router-dom';

class CollectionModule extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       
    }

    render() {
        return (<> 
            <div className="collection-module">
                <Route path="/main/collection/" component={CollectionBarContainer} />
                <Route path="/main/collection/playlists" component={PlaylistsExploreContainer} />
            </div>
        </>)
    }
}

export default CollectionModule;