import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

class PlaylistsExplore extends React.Component {


    constructor(props) {
        super(props);
        
        // let author_id = this.props.showPlaylist.author_id;
    }

    componentDidMount() {
        const { fetchPlaylist, showPlaylist } = this.props;
        let path = this.props.history.location.pathname.split("/");
        let id = Number(path[path.length - 1]);
        fetchPlaylist(id);  
        
        // fetchUser
        // why is my author_id null 
        let author_id = showPlaylist ? showPlaylist.author_id : null;

        // debugger
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


