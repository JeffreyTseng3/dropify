import React from 'react';

class MusicPlayerInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { fetchAlbum, currentSong } = this.props;
        let albumId = currentSong ? currentSong.album_id : null;
        fetchAlbum(albumId);
    }

    render() {

        let { currentSong, albums, artists } = this.props;
        let songTitle = currentSong ? currentSong.song_title : null;
        let album = albums && currentSong ? albums.filter(album => album.song_ids.includes(currentSong.id))[0] : null;
        let albumImg = album ? album.albumUrl : null;
        let artist = artists && currentSong ? artists.filter(artist => artist.id === currentSong.artist_id) : null;
        let artistName = artist ? artist[0].name : null;
        albumImg = albumImg ? album.albumUrl : 'https://dropify-seeds.s3.amazonaws.com/Screen+Shot+2019-06-06+at+3.41.25+PM.png';
        return(
            <>
                <div className="music-player-info">
                    <img src={albumImg} className="music-album-img"/>
                    <div className="music-text">
                        <div className='music-song-title'>{songTitle} </div>
                        <div className='music-song-artist'>{artistName} </div>

                    </div>
                </div>
            </>
        )
    }
}

export default MusicPlayerInfo;