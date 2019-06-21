import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PlaylistsCollectionItem from "../playlists_collection_item/playlists_collection_item_container";
import CollectionBarContainer from "../collection_bar/collection_bar_container";

class PlaylistsCollection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author_id: this.props.currentUserId
        }
    }

    componentDidMount() {
        let { fetchPlaylists } = this.props;
        fetchPlaylists();
    }


    render() {
        
        const { playlists, currentUserId } = this.props;
        let myPlaylists = playlists ? playlists.filter(playlist => playlist.author_id === currentUserId) : null;
        let displayPlayists = myPlaylists ? playlists.map(playlist => {
            return (
                    <PlaylistsCollectionItem key={playlist.id} playlist={playlist} />

            )
        }) : null ;


        return (
            <div className="playlists-on-explore-container">
                <Route path="/main/collection/" component={CollectionBarContainer} />
                <div className="playlist-items-scroll">   
                    {displayPlayists}
                </div>
               
            </div>
        )
    }

} 

export default PlaylistsCollection;


