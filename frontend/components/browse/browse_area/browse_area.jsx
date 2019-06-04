import React from "react";
import { Link } from 'react-router-dom';
import ArtistIconContainer from '../../icons/artists/artist_icon_container';

class BrowseArea extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
  
        let { fetchArtists } = this.props;
        fetchArtists();
        // fetchAlbums();
    }


    render() {
        const { artists } = this.props;
        let artist_display = artists.map(artist => {
            return <ArtistIconContainer key={artist.id} artist={artist}/>
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