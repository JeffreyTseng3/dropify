import React from "react";

class SongsArtistItem extends React.Component {
    constructor(props) {
        super(props);
        this.secondsToMins = this.secondsToMins.bind(this);
        this.state = {
            // playImg: (<i className="fas fa-play"></i>)
            playImg: (<i className="fas fa-headphones-alt fa-1x"></i>)
        }
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

        // debugger

        return (
            <> 
                <div className={css} 
                    onMouseEnter={() => this.setState({ playImg: (<i className="fas fa-play fa-1x"></i>) })}
                    onMouseOut={() => this.setState({ playImg: (<i className="fas fa-headphones-alt fa-1x"></i>) })}>
                    
                    {btnDisplay}

                    <button 
                        className="song-info-btn" onDoubleClick={() => fetchCurrentSong(song.id)}
                        > 
                    <div className="song-left"> 

                        {/* <button onClick={() => fetchCurrentSong(song.id)}> */}
                        {/* <i className="fas fa-headphones-alt fa-1x"></i> */}
                        {/* </button> */}

                        <img src={albumImg} className="music-album-img" />
                        <div className="song-title">{song_title} </div>
                    </div>
                    <div className="song-right">
                        <i className="fas fa-ellipsis-h"></i>
                        <div className="song-time">{time}</div>
                    </div>
                
                    </button>
                </div>
            </>
        )
    }
}

export default SongsArtistItem;