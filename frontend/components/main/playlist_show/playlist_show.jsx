import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { fetchPlaylists } from "../../../actions/playlist_actions";

class PlaylistsExplore extends React.Component {


    constructor(props) {
        super(props);
        
        // let author_id = this.props.showPlaylist.author_id;
    }

    componentDidUpdate(prevProps) {
        // const {  showPlaylist } = this.props;
        // let id = showPlaylist ? showPlaylist.id : null;
        // id ? this.props.history.push(`/main/playlist/${id}`) : null;
        
    }

 
    componentDidMount() {
        // const { fetchPlaylist, showPlaylist } = this.props;
        // let id = showPlaylist ? showPlaylist.id : null;
        // id ? this.props.history.push(`/main/playlist/${id}`) : null;
        
        // let path = this.props.history.location.pathname.split("/");
        // let id = Number(path[path.length - 1]);
        // fetchPlaylist(id);  
        // debugger
        let { playlistId } =  this.props.match.params;
        fetchPlaylists(playlistId);
    }

    render() {

        let { showPlaylist } = this.props;

        
        let title = showPlaylist ? showPlaylist.title : null;
        let author = showPlaylist ? showPlaylist.author_id : null;

        return (
            <div className="playlist-show-container">

                <div className="playlist-show-info-module">
                    <div className="playlist-show-picture">Picture</div>
                    <div className="playlist-show-info">
                        <div className="playlist-show-title">{title} </div>
                        <div className="playlist-show-author"> By {author}</div>
                    </div>
                    
                </div>
                
            </div>
        )
    }

}

export default PlaylistsExplore;


