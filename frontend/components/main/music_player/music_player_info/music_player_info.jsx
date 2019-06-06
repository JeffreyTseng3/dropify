import React from 'react';

class MusicPlayerInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        let { fetchAlbum, currentSong } = this.props;
        let albumId = currentSong ? currentSong.album_id : null;
        fetchAlbum(albumId);
    }

    render() {
        let { current_song, albums } = this.props;
        let title = current_song ? current_song.song_title : null;
        let album = albums && current_song ? albums.filter(album => album.song_ids.includes(current_song.id))[0] : null;
        let album_img = album ? album.albumUrl : null;
        return(
            <>
                <div className="music-player-info">
                    Album Art 
                    <img src={album_img} alt=""/>
                    { title }
                </div>
            </>
        )
    }
}

export default MusicPlayerInfo;