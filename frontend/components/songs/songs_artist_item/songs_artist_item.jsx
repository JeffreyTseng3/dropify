import React from "react";

class SongsArtistItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // let { song } = this.props;
        let { fetchAlbum, song } = this.props;
        let albumId = song.album_id;
        // debugger
    }

    render() {
        let { song, albums, fetchCurrentSong } = this.props;
        let song_title = song ? song.song_title : null;
        let album = albums ? albums.filter(album => album.song_ids.includes(song.id))[0] : null;
        let albumImg = album ? album.albumUrl : null;
        
        return (
            <> 
            <button className="song-item" onClick={() => fetchCurrentSong(song.id)}> 
                    <i className="fas fa-headphones-alt fa-1x"></i>
                <img src={albumImg} className="music-album-img" />
                <div className="song-title">{song_title} </div>
            </button>
            </>
        )
    }
}

export default SongsArtistItem;