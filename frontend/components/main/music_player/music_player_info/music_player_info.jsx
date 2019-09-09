import React from 'react';
import { fetchSongs } from '../../../../actions/song_actions';

class MusicPlayerInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { fetchAlbum, current_song} = this.props;
        let albumId = current_song ? current_song.album_id : null;
        fetchAlbum(albumId);
        
        
    }

    render() {

        let { current_song, albums, artists} = this.props;
        
        let songTitle = current_song ? current_song.song_title : null;
        let album = albums && current_song ? albums.filter(album => album.song_ids.includes(current_song.id))[0] : null;
        let albumImg = album ? album.albumUrl : null;
        let artist = artists && current_song ? artists.filter(artist => artist.id === current_song.artist_id)[0] : null;
        let artistName = artist ? artist.name : null;
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