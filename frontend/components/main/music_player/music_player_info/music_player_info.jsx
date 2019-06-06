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
        let { current_song, albums } = this.props;
        let songTitle = current_song ? current_song.song_title : null;
        let album = albums && current_song ? albums.filter(album => album.song_ids.includes(current_song.id))[0] : null;
        // let artistName = artists && current_song ? artists.filter(artist => artist.id == current_song.artist_id)[0] : null;
        let albumImg = album ? album.albumUrl : null;

        return(
            <>
                <div className="music-player-info">
                    <img src={albumImg} className="music-album-img"/>
                    <div className="music-text">
                        <div className='music-song-title'>{songTitle} </div>
                        {/* <div className='music-song-artist'>{artistName} </div> */}

                    </div>
                </div>
            </>
        )
    }
}

export default MusicPlayerInfo;