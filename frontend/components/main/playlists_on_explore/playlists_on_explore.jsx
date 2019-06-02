import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

class PlaylistsExplore extends React.Component {

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
                <h1>hello</h1>
            )
        }) : null ;


        return (
            <div className="playlists-on-explore-container">

                {displayPlayists}
            </div>
        )
    }

} 

export default PlaylistsExplore;


