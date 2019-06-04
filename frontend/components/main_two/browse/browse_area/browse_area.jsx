import React from "react";
import { Link } from 'react-router-dom';

class BrowseArea extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        debugger
        let { fetchArtists } = this.props;
        fetchArtists();
        // fetchAlbums();
    }


    render() {
        return (
            <>
                <div className="browse-area-module">
                    <div className="browse-artists-text">
                        Artists
                    </div>

                    <div className="browse-artists">
                        <div className="browse-artist-item">
                            ar1
                        </div>  

                        <div className="browse-artist-item">
                            ar2
                        </div>  

                        <div className="browse-artist-item">
                            ar3
                        </div>  

                        <div className="browse-artist-item">
                            ar4
                        </div>
                    </div>
                    
                <div className="browse-albums-text">Albums</div>
                    <div className="browse-albums">
                        
                        <div className="browse-album-item">
                            a1
                        </div>

                        <div className="browse-album-item">
                            a2
                        </div>

                        <div className="browse-album-item">
                            a3
                        </div>

                        <div className="browse-album-item">
                            a4
                        </div>
                    </div>

                </div>
            </>
        )
    }


}

export default BrowseArea 