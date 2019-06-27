import React from "react";
import { Link } from 'react-router-dom';
import ArtistIconContainer from '../../icons/artists/artist_icon_container';
import AlbumIconContainer from '../../icons/albums/album_icon_container';

class BrowseArea extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
  
        let { fetchArtists, fetchAlbums } = this.props;
        fetchArtists();
        fetchAlbums();
    }


    render() {
        const { artists, albums } = this.props;

        let artist_display = artists.slice(0,9).map(artist => {
            return <ArtistIconContainer key={artist.id} artist={artist}/>
        })
        let album_display = albums.slice(0,9).map(album => {
            return <AlbumIconContainer key={album.id} album={album}/>
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
                        {album_display}
                    </div>

                </div>
            </>
        )
    }


}

export default BrowseArea 