import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import CollectionBarContainer from "../../collection/collection_bar/collection_bar_container";
import PlaylistsExploreContainer from "../../collection/playlists_collection/playlists_collection_container";
import PlaylistShowContainer from "../../playlists/playlist_show/playlist_show_container";
import BrowseModuleContainer from "../../browse/browse_module/browse_module_container";
import ArtistShowModuleContainer from "../../artists/artist_show_module/artist_show_module_container";

class ExploreModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
        <div className="explore-module-main">
            <Route path="/main/collection/" component={CollectionBarContainer} />
            <Route path="/main/collection/playlists" component={PlaylistsExploreContainer} />
            <Route path="/main/playlist/:playlistId" component={PlaylistShowContainer}/>
            <Route path="/main/browse/featured" component={BrowseModuleContainer}/>
            <Route path="/main/artist/:artistId" component={ArtistShowModuleContainer}/> 
        </div>
        )
    }

}

export default ExploreModule;