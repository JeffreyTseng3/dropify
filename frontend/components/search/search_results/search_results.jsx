import React from "react";
import ArtistIconContainer from '../../icons/artists/artist_icon_container';
import AlbumIconContainer from '../../icons/albums/album_icon_container';
import PlaylistsCollectionItem from '../../collection/playlists_collection_item/playlists_collection_item_container';


class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let { artists, albums, playlists, songs } = this.props;
        
        let artist_display = artists ? artists.map(artist => {
            return <ArtistIconContainer key={artist.id} artist={artist} />
        }) : null;
        let album_display = albums ? albums.map(album => {
            return <AlbumIconContainer key={album.id} album={album} />
        }) : null;

        let playlist_display = playlists ? playlists.map(playlist => {
            return <PlaylistsCollectionItem key={playlist.id} playlist={playlist} />
        }) : null;
    
        let artistText = artists !== null ? "Artists" : null;
        let albumText = albums !== null ? 'Albums' : null;
        let playlistText = playlists !== null ? 'Playlists' : null;
        return (<> 
            <div className="search-all-results">

                <div className='search-result'>
                    <div className='search-result-text'>{artistText}</div>
                    <div className='search-artists-icons'>{artist_display}</div>
                </div>

                <div className='search-result'>
                    <div className='search-result-text'>{albumText}</div>
                    <div className='search-albums-icons'>{album_display}</div> 
                </div>

                <div className='search-result'>
                    <div className='search-result-text'>{playlistText}</div>
                    <div className='search-playlists-icons'>{playlist_display}</div>
                </div>



            </div>
        </>)
    }
}

export default SearchResults;