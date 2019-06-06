import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PlaylistsCollectionItem from "../playlists_collection_item/playlists_collection_item_container";

class PlaylistsCollection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author_id: this.props.currentUserId
        }
    }

    componentDidMount() {
        this.props.fetchPlaylists(this.state.author_id);
    }


    render() {
        
        const playlists = this.props.playlists;
    
        let displayPlayists = playlists ? playlists.map(playlist => {
            return (

                    <PlaylistsCollectionItem key={playlist.id} playlist={playlist} />

            )
        }) : null ;


        return (
            <div className="playlists-on-explore-container">
                {displayPlayists}
            </div>
        )
    }

} 

export default PlaylistsCollection;


