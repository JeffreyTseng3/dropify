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
        this.returnMyIds = this.returnMyIds.bind(this);

    }

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.playlists.length + 1 === this.props.playlists.length) {
            // debugger
            let newId = this.props.playlists[this.props.playlists.length - 1].id;
            this.props.history.push(`/main/playlist/${newId}`);
        }
    }


    componentDidMount() {
        let { fetchPlaylists } = this.props;
        fetchPlaylists();
    }


    returnMyIds() {
        let { collection, currentUserId } = this.props;
        let type = "Playlist";

        let myItems = collection.filter(item => item.followable_type === 'Playlist' && item.user_id === currentUserId)

        let ans = [];
        myItems.forEach(item => ans.push(item.followable_id));
        return ans;
    }

    render() {
        
        const { playlists, currentUserId } = this.props;
        let myIds = this.returnMyIds();
        let myPlaylistsCollection = playlists && myIds ? playlists.filter(playlist => myIds.includes(playlist.id)) : null; 
        
        let myPlaylists = playlists ? playlists.filter(playlist => playlist.author_id === currentUserId) : null;
        let allPlaylists = myPlaylists.concat(myPlaylistsCollection);
        console.log(myPlaylistsCollection, myPlaylists);
        let displayPlayists = allPlaylists ? allPlaylists.map(playlist => {
            return (
                    <PlaylistsCollectionItem key={playlist.id} playlist={playlist} />

            )
        }) : null ;
        

        return (
            <div className="playlists-on-explore-container">
                {/* <Route path="/main/collection/" component={CollectionBarContainer} /> */}
                <div className="playlist-items-scroll">   
                    {displayPlayists}
                </div>
               
            </div>
        )
    }

} 

export default PlaylistsCollection;


