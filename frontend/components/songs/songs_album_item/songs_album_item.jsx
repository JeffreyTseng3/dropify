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
       
        let { song, fetchCurrentSong } = this.props;
        let length = song ? this.secondsToMins(song.song_length) : null;
        let title = song ? song.song_title : null;
        return (
            <>
                <button className="song-item" onDoubleClick={() => fetchCurrentSong(song.id)}>
                     <div className="song-left">
                        <button onClick={() => fetchCurrentSong(song.id)}>
                            <i className="fas fa-headphones-alt fa-1x"></i>
                        </button>

                        <div className="song-album-item-title">{title}</div>

                    </div>
                    <div className="song-right">
                        <i className="fas fa-ellipsis-h"></i>
                        <div className="songs-album-item-length">{length}</div>
                    </div> 

                </button>
            </>
        )
    }
}

export default SongsAlbumItem;