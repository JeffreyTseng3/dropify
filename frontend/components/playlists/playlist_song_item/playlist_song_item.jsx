import React from "react";

class PlaylistSongItem extends React.Component {
    constructor(props) {
        super(props);

        this.secondsToMins = this.secondsToMins.bind(this);
        this.state = {
            // playImg: (<i className="fas fa-play"></i>)
            playImg: (<i className="fas fa-headphones-alt fa-1x"></i>)
        }
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

        let { song, fetchCurrentSong, currentSong } = this.props;
        let length = song ? this.secondsToMins(song.song_length) : null;
        let title = song ? song.song_title : null;
        let btnDisplay = this.state.playImg ? this.state.playImg : null;

        let mySong = song ? song : null;
        let myCurrentSong = currentSong ? currentSong : null;
        let css = (mySong && myCurrentSong) && mySong.id === myCurrentSong.id ? 'song-item-selected' : 'song-item';
        let options_playlist_modal = mySong ? 'options,playlist,' + String(mySong.id) : null;


        return (<>
            <div className={css}
                onMouseEnter={() => this.setState({ playImg: (<i className="fas fa-play fa-1x"></i>) })}
                onMouseOut={() => this.setState({ playImg: (<i className="fas fa-headphones-alt fa-1x"></i>) })}
            >

                {btnDisplay}
              

                <button className="song-info-btn"
                    onDoubleClick={() => fetchCurrentSong(song.id)}>

                    <div className="song-left">
                        <div className="song-album-item-title">{title}</div>
                    </div>

                    <div className="song-right">
                        <div onClick={() => this.props.openModal(options_playlist_modal)}>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                        <div className="songs-album-item-length">{length}</div>
                    </div>

                </button>
            </div>
        </>)
    }
}

export default PlaylistSongItem;