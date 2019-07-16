import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";

import CollectionModuleContainer from "../../collection/collection_module/collection_module_container";
import PlaylistShowContainer from "../../playlists/playlist_show/playlist_show_container";
import BrowseModuleContainer from "../../browse/browse_module/browse_module_container";
import ArtistShowModuleContainer from "../../artists/artist_show_module/artist_show_module_container";
import AlbumShowModuleContainer from '../../albums/album_show_module/album_show_module_container';
import SettingsContainer from '../../settings/settings_container';
import SearchModuleContainer from '../../search/search_module/search_module_container';

class ExploreModule extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { fetchCollection } = this.props;
        fetchCollection();
    }

    render() {

        return (
        <div className="explore-module-main">
            <Route path="/main/collection" component={CollectionModuleContainer} />
            <Route path="/main/playlist/:playlistId" component={PlaylistShowContainer}/>
            <Route path="/main/browse/featured" component={BrowseModuleContainer}/>
            <Route path="/main/artist/:artistId" component={ArtistShowModuleContainer}/> 
            <Route path="/main/album/:albumId" component={AlbumShowModuleContainer} />
            <Route path="/main/settings" component={SettingsContainer} />
            <Route path="/main/search" component={SearchModuleContainer} />
            
        </div>
        )
    }

}

export default ExploreModule;