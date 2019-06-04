import React from "react";
import { Link } from 'react-router-dom';

class BrowseArea extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        // debugger
        let { fetchArtists } = this.props;
        fetchArtists();
        // fetchAlbums();
    }


    render() {
        const { artists } = this.props;
        let artist_display = artists.map(artist => {
            // return <BrowseArtistItem key={artist.id} artist={artist}/>
        })

    

        return (
            <>
                <div className="browse-area-module">
                    <div className="browse-artists-text">
                        Artists
                    </div>

                    <div className="browse-artists">
                     {artist_display}
                    </div>
                    



                    <div className="browse-albums-text">
                        Albums
                    </div>
                    <div className="browse-albums">
                     
                    </div>

                </div>
            </>
        )
    }


}

export default BrowseArea 