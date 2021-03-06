import React from "react";


class SongsAlbumItem extends React.Component {
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

    handleDoubleClick(albumId, songId) {
        let { fetchCurrentSong, setMusicPlayType } = this.props;
        fetchCurrentSong(songId);
        let musicPlayType = { album: albumId }
        setMusicPlayType(musicPlayType);
    }

    render() {
       
        let { song, fetchCurrentSong, currentSong } = this.props;
        let length = song ? this.secondsToMins(song.song_length) : null;
        let title = song ? song.song_title : null;
        let btnDisplay = this.state.playImg ? this.state.playImg : null;

        let { albumId } = this.props.match.params;

        
        // debugger
        let mySong = song ? song : null;
        let myCurrentSong = currentSong ? currentSong : null;
        let css = (mySong && myCurrentSong) && mySong.id === myCurrentSong.id ? 'song-item-selected' : 'song-item' ;
        let options_album_modal = mySong ? 'options,album,' + String(mySong.id) : null;
        
        // let css = currentSong.id === song.id ? 'song-icon-btn' : 'song-item';
        // let targetSong = song ? song : null;
        // let mySongId = currentSong ? currentSong.id : null;
        // let css = mySongid === targetSong.id ? 

        return (
            <>
            {/* <div className="song-item"  */}
                <div className={css}
                    onMouseEnter={() => this.setState({ playImg: (<i className="fas fa-play fa-1x"></i>)})}
                    onMouseOut={() => this.setState({ playImg: (<i className="fas fa-headphones-alt fa-1x"></i>)})}
                    >
                    
                    {/* <button className="song-icon-btn" */}
                         {/* onClick={() => fetchCurrentSong(song.id)}> */}
                        
                        {/* <i className="fas fa-headphones-alt fa-1x"></i> */}
                        {btnDisplay}
                    {/* </button> */}

                    <button className="song-info-btn"
                        onDoubleClick={() => this.handleDoubleClick(albumId, mySong.id)}>

                        <div className="song-left">
                            <div className="song-album-item-title">{title}</div>
                        </div>

                        <div className="song-right">
                            <div onClick={() => this.props.openModal(options_album_modal)}>
                                <i className="fas fa-ellipsis-h"></i>
                            </div>
                            <div className="songs-album-item-length">{length}</div>
                        </div> 

                    </button>
                </div>
            </>
        )
    }
}

export default SongsAlbumItem;