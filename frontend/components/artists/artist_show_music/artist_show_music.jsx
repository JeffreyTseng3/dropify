import React from "react";
import SongsArtistItemContainer from "../../songs/songs_artist_item/songs_artist_item_container";
import AlbumIconContainer from '../../icons/albums/album_icon_container';

class ArtistShowMusic extends React.Component {
    constructor(props) {
        super(props);
    }



    componentDidMount() {

    }

    render() {
        let { artistId } = this.props.match.params;
        
        let { songs, albums } = this.props;
        let my_songs = songs ? songs.filter(song => song.artist_id == artistId) : null;
        let songs_display = my_songs.map(song => {
            return < SongsArtistItemContainer key={song.id} song={song} />
        })

        let my_albums = albums ? albums.filter(album => album.artist_id == artistId) : null;
        let albums_display = my_albums.map(album => {
            return <AlbumIconContainer key={album.id} album={album} />
        })
        return (
            <>
                <div className="artist-show-music-mod">
                    <div className="artist-show-popular">
                        <div className="artist-show-popular-text">Popular</div>
                        <div className='artist-show-popular-items'>{songs_display.slice(0,5)}</div>
                    </div>

                    <div className='artist-show-albums'>
                        <div className="artist-show-albums-text">Albums</div>
                        <div className="artist-show-albums-items">{albums_display}</div>
                      
                    </div>
                    
                </div>

            </>
        )
    }
}

export default ArtistShowMusic;

