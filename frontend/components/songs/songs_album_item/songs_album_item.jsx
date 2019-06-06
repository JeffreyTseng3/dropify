import React from "react";

class SongsAlbumItem extends React.Component {
    constructor(props) {
        super(props);
        this.secondsToMins = this.secondsToMins.bind(this);
    }

    componentDidMount() {
     
   
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
        let { fetchCurrentSong } = this.props;
        // let time = this.secondsToMins(song_length);

        return (
            <>
                <button className="song-item" onClick={() => fetchCurrentSong(song.id)}>
                    {/* <div className="song-left">
                        <i className="fas fa-headphones-alt fa-1x"></i>
                        <img src={albumImg} className="music-album-img" />
                        <div className="song-title">{song_title} </div>
                    </div>
                    <div className="song-right">
                        <i className="fas fa-ellipsis-h"></i>
                        <div className="song-time">{time}</div>
                    </div> */}

                </button>
            </>
        )
    }
}

export default SongsAlbumItem;