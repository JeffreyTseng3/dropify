import React from "react";
import PlaylistsExploreContainer from '../../collection/playlists_collection/playlists_collection_container';
import CollectionBarContainer from "../collection_bar/collection_bar_container";
import { Route } from 'react-router-dom';
import ArtistsCollectionContainer from '../artists_collection/artists_collection_container';
import SongsCollectionContainer from '../songs_collection/songs_collection_container';
import AlbumsCollectionContainer from '../albums_collection/albums_collection_container';

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
                <Route path="/main/collection/artists" component={ArtistsCollectionContainer} />
                <Route path="/main/collection/songs" component={SongsCollectionContainer} />
                <Route path="/main/collection/albums" component={AlbumsCollectionContainer}/>
            </div>
        </>)
    }
}

export default CollectionModule;