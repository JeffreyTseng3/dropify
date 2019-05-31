import React from "react";
import { Link } from 'react-router-dom';

class CollectionBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="collection-bar-module"> 
                <div className="collection-bar">

                    
                        <Link className="collection-bar-playlists" to="/main/collection/playlists">
                            <span className="collection-bar-item">PLAYLISTS</span> 
                        </Link>
                        <Link className="collection-bar-made" to="/main/collection/made">
                            <span className="collection-bar-item">MADE FOR ME</span> 
                        </Link>
                        <Link className="collection-bar-songs" to="/main/collection/songs">
                            <span className="collection-bar-item">SONGS</span>
                        </Link>
                        <Link className="collection-bar-albums" to="/main/collection/albums">
                            <span className="collection-bar-item">ALBUMS</span> 
                        </Link>
                        <Link className="collection-bar-artists" to="/main/collection/podcasts">
                            <span className="collection-bar-item">PODCASTS</span> 
                        </Link>
            

                   

                </div>
                <button className="new-playlist-modal"> <span className="new-playlist-modal-text">NEW PLAYLIST</span></button>
            </div>
        );
    }
}

export default CollectionBar;
