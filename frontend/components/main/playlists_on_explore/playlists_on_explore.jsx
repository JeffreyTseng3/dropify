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
        // this.props.fetchPlaylists(this.state.author_id);
    }


    render() {


        // let { playlists } = this.props;
        // let displayPlayists = playlists.map( playlist => {
        //     return 'HELLO'
        // })
        // debugger

        return (
            <div className="playlists-on-explore-container">



            </div>
        )
    }

} 

export default PlaylistsExplore;


