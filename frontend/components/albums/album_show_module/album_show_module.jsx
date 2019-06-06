import React from "react";
import SongsAlbumItem from '../../songs/songs_album_item/songs_album_item_container';

class AlbumShowModule extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { albumId } = this.props.match.params;
        let { fetchAlbum } = this.props;
        fetchAlbum(albumId);
    }

    render() {
        let { artists, songs, albums } = this.props;
        let { albumId } = this.props.match.params;

        let artist = artists ? artists.filter(artist => artist.album_ids.includes(Number(albumId)))[0] : null;
        let artistName = artist ? artist.name : null;

        let mySongs = songs ? songs.filter(song => song.album_id == albumId) : null;
        let album = albums ? albums.filter(album => album.id == albumId)[0] : null;
        let albumTitle = album ? album.title : null;
        let albumUrl = album ? album.albumUrl : null; 
        
        let songsDisplay = mySongs ? mySongs.map(song => {
            return <SongsAlbumItem key={song.id} song={song}/>
        }) : null;
        // debugger
        return(
            <>
            <div className='album-show-module'>   
                <div className="album-show-left">
                    <img src={albumUrl} className="album-show-img" />
                    <div className="album-show-title">{albumTitle}</div>
                    <div className="album-show-artist">{artistName}</div>
                </div>
                <div className='album-show-right'>{songsDisplay}</div>
            </div>
            
            </>
        )
    }
}

export default AlbumShowModule;