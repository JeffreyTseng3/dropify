import React from "react";

class SongsArtistItem extends React.Component {
    constructor(props) {
        super(props);
        this.secondsToMins = this.secondsToMins.bind(this);
        this.state = {
            // playImg: (<i className="fas fa-play"></i>)
            playImg: (<i className="fas fa-headphones-alt fa-1x"></i>)
        }
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
    }

    componentDidMount() {
        // let { song } = this.props;
        let { fetchAlbum, song } = this.props;
        let albumId = song.album_id;
        // debugger
    }

    secondsToMins(sec) {
        let seconds = sec % 60;
        let secondsAns;
        if (seconds < 10) {
            secondsAns = '0' + String(seconds);
        } else {
            secondsAns = String(seconds);
        }
        let mins = Math.floor(sec / 60);
        let time = String(mins) + ':' + secondsAns;
        return time;
    }

    handleDoubleClick(artistId, songId) {
        let { fetchCurrentSong, setMusicPlayType } = this.props;
        fetchCurrentSong(songId);
        let musicPlayType = { artist: artistId }
        setMusicPlayType(musicPlayType);
    }

    render() {
        let { song, albums, fetchCurrentSong, currentSong } = this.props;
        let song_title = song ? song.song_title : null;
        let song_length = song ? song.song_length : null;
        let album = albums ? albums.filter(album => album.song_ids.includes(song.id))[0] : null;
        let albumImg = album ? album.albumUrl : null;
        let time = this.secondsToMins(song_length);

        let btnDisplay = this.state.playImg ? this.state.playImg : null;
       
        let mySong = song ? song : null;
        let myCurrentSong = currentSong ? currentSong : null;
        let css = (mySong && myCurrentSong) && mySong.id === myCurrentSong.id ? 'song-item-selected' : 'song-item';
        let options_artist_modal = mySong ? 'options,artist,' + String(mySong.id)  : null;
        let { artistId } = this.props.match.params;
        // debugger

        return (
            <> 
                <div className={css} 
                    onMouseEnter={() => this.setState({ playImg: (<i className="fas fa-play fa-1x"></i>) })}
                    onMouseOut={() => this.setState({ playImg: (<i className="fas fa-headphones-alt fa-1x"></i>) })}>
                    
                    {btnDisplay}

                    <button 
                        className="song-info-btn" onDoubleClick={() => this.handleDoubleClick(artistId, mySong.id) }
                        > 
                    <div className="song-left"> 

                        {/* <button onClick={() => fetchCurrentSong(song.id)}> */}
                        {/* <i className="fas fa-headphones-alt fa-1x"></i> */}
                        {/* </button> */}

                        <img src={albumImg} className="music-album-img" />
                        <div className="song-title">{song_title} </div>
                    </div>
                    <div className="song-right">
                        <div onClick={() => this.props.openModal(options_artist_modal)}>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>

                        <div className="song-time">{time}</div>
                    </div>
                
                    </button>
                </div>
            </>
        )
    }
}

export default SongsArtistItem;