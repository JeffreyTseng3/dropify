import React from 'react';

class MusicPlayerConsole extends React.Component {
    constructor(props) {
        super(props);
        this.myAudioRef = React.createRef();
        this.state = {
            playStatus: 'play',
            currentTime: 0,
            volume: "100", 
            playPauseBtn: (<i className="far fa-play-circle fa-2x"></i> )
        }
        this.togglePlay = this.togglePlay.bind(this);
        this.updateVolume = this.updateVolume.bind(this);
        this.updateScrubber = this.updateScrubber.bind(this);
        this.secondsToMins = this.secondsToMins.bind(this);
        this.updatePlayPauseBtn = this.updatePlayPauseBtn.bind(this);
        this.nextSong = this.nextSong.bind(this);
        this.prevSong = this.prevSong.bind(this);
        this.forcePrevSong = this.forcePrevSong.bind(this);
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

    updateTime(timestamp) {
        timestamp = Math.floor(timestamp);
        this.setState({currentTime: timestamp})
    }

    updateScrubber() {
       
        return (e) => {
            this.setState({currentTime: Number(e.target.value)})
            let audio_ref = this.myAudioRef.current;
            audio_ref.currentTime = Number(e.target.value);
        }
    }
    

    togglePlay() {
        let audio_ref = this.myAudioRef.current;
        let status = this.state.playStatus;
        if (status === 'play') {
            status = 'pause';
            audio_ref.play();
            setInterval(() => {
                let currentTime = audio_ref.currentTime;
                this.updateTime(currentTime);
                this.setState({ playPauseBtn: (<i className="far fa-pause-circle fa-2x"></i>) });
            }, 500 ); 
        } else {
            status = 'play'
            audio_ref.pause();
            this.setState({ playPauseBtn: (<i className="far fa-play-circle fa-2x"></i>) });

        }
        this.setState({ playStatus: status })
 
    }

    updateVolume() {
        return (e) => {
        
            this.setState({ volume: e.target.value })
        }
    }

    setVolume() {
        let audio_ref = this.myAudioRef.current;
        audio_ref.volume = this.state.volume / 100;
    }

    componentDidUpdate(prevProps) {
        this.setVolume();
        if (prevProps.current_song !== this.props.current_song) {
            let audio_ref = this.myAudioRef.current;
            // audio_ref.play();
            this.togglePlay();
            this.setState({playStatus: 'pause'});
            this.updatePlayPauseBtn();
        } 

        // this enables queue changes to enable songs to be played when press nextSong
        if (prevProps.current_song !== this.props.current_song && this.state.playStatus === 'play') {
            let audio_ref = this.myAudioRef.current;
            audio_ref.play();
        }
    }

    updatePlayPauseBtn() {
        if (this.state.playStatus === 'play') {
            this.setState({ playPauseBtn: (<i className="far fa-pause-circle fa-2x"></i>)});
            this.state.playStatus = 'pause'
        } else {
            this.setState({ playPauseBtn: (<i className="far fa-play-circle fa-2x"></i> )});
            this.state.playStatus = 'play'

        }
    }

    getPlayPauseBtn() {
        if (this.state.playStatus === 'play') {
            return  (<i className="far fa-play-circle fa-2x"></i>) ;
        } else {
            return (<i className="far fa-pause-circle fa-2x"></i>) ;
        }
    }


    forcePrevSong() {
        let { fetchCurrentSong, artists, current_song, musicPlayType, albums, playlists } = this.props;
        let type = Object.keys(musicPlayType)[0];
        let typeId = Object.values(musicPlayType)[0];



        if (type === 'artist') {
            let artist = artists ? artists.filter(artist => artist.id == typeId)[0] : null;
            let artistQueue = artist ? artist.song_ids : null;
            let currentSongIndex = current_song ? artistQueue.indexOf(current_song.id) : null;
            if (currentSongIndex > 0) {
                let prevSongId = artistQueue[currentSongIndex - 1];
                fetchCurrentSong(prevSongId);
            }
        } else if (type === 'album') {
            let album = albums ? albums.filter(album => album.id == typeId)[0] : null;
            let albumQueue = album ? album.song_ids : null;
            let currentSongIndex = current_song ? albumQueue.indexOf(current_song.id) : null;
            if (currentSongIndex > 0) {
                let prevSongId = albumQueue[currentSongIndex - 1];
                fetchCurrentSong(prevSongId);
            }
        } else if (type === 'playlist') {
            let playlist = playlists ? playlists.filter(playlist => playlist.id == typeId)[0] : null;
            let playlistQueue = playlist ? playlist.song_ids : null;
            let currentSongIndex = current_song ? playlistQueue.indexOf(current_song.id) : null;
            if (currentSongIndex > 0) {
                let prevSongId = playlistQueue[currentSongIndex - 1];
                fetchCurrentSong(prevSongId);
            }
        } else if (type === "songCollection") {
            let songCollectionIds = Object.values(musicPlayType)[0];
            console.log('songcollection', songCollectionIds);
            let currentSongIndex = current_song ? songCollectionIds.indexOf(current_song.id) : null;
            if (currentSongIndex > 0) {
                let prevSongId = songCollectionIds[currentSongIndex - 1];
                fetchCurrentSong(prevSongId);
            }
        }
    }
    
    prevSong(command) {


        let audio_ref = this.myAudioRef.current;


        if (command === 'forcePrev') {
            this.forcePrevSong();
        }





        if (audio_ref.currentTime < 3) {
            audio_ref.currentTime = 0;
            return;
        }
        if (audio_ref.currentTime > 2){ 
            this.forcePrevSong();
         
        }

    }


    nextSong() {
        let { queue, dequeue, fetchCurrentSong, artists, current_song, musicPlayType, playlists, albums } = this.props;
        let type = Object.keys(musicPlayType)[0];
        let typeId = Object.values(musicPlayType)[0]; 
        if (queue.length !== 0) {
            let nextSongId = queue[0];
            fetchCurrentSong(nextSongId);
            dequeue();
        } else if (type === 'artist') {
            // the following gets the following song for the current artist
   
            let artist = artists ? artists.filter(artist => artist.id == typeId)[0] : null;
            let artistQueue = artist ? artist.song_ids : null;
            let currentSongIndex = current_song ? artistQueue.indexOf(current_song.id): null;
            if (currentSongIndex > -1) {
                let nextSongId = artistQueue[currentSongIndex + 1];
                fetchCurrentSong(nextSongId);
            }
           
        } else if (type === 'album') {
            let album = albums ? albums.filter(album => album.id == typeId)[0] : null;
            let albumQueue = album ? album.song_ids : null;
            let currentSongIndex = current_song ? albumQueue.indexOf(current_song.id) : null;
            if (currentSongIndex > -1) {
                let nextSongId = albumQueue[currentSongIndex + 1];
                fetchCurrentSong(nextSongId);
            }
        } else if (type === 'playlist') {
            let playlist = playlists ? playlists.filter(playlist => playlist.id == typeId)[0] : null;
            let playlistQueue = playlist ? playlist.song_ids : null;
            // debugger
            let currentSongIndex = current_song ? playlistQueue.indexOf(current_song.id) : null;
            if (currentSongIndex > -1) {
                let nextSongId = playlistQueue[currentSongIndex + 1];
                fetchCurrentSong(nextSongId);
            }
        } else if (type === "songCollection") {
            let songCollectionIds = Object.values(musicPlayType)[0];
            console.log('songcollection', songCollectionIds);
            let currentSongIndex = current_song ? songCollectionIds.indexOf(current_song.id) : null;
            if (currentSongIndex > -1) {
                let nextSongId = songCollectionIds[currentSongIndex + 1];
                fetchCurrentSong(nextSongId);
            }
        }
    }

    render() {

        let { current_song, demo_song } = this.props;
        let songUrl = current_song ? current_song.songUrl : (demo_song ? demo_song.songUrl : null);
        let song_length = current_song ? current_song.song_length : null;
        let song_max = this.secondsToMins(song_length);
        let time_current = this.secondsToMins(this.state.currentTime);


        // let playPauseImg = this.state.playStatus === 'play' ? 
        //     <i className="far fa-play-circle fa-2x"></i> 
        //     : <i className="far fa-pause-circle fa-2x"></i>

        let playPauseImg = this.getPlayPauseBtn();
        // let playPauseImg = this.state.playPauseBtn;

        return (
            <>
                <div className="music-player-console">
                    <audio ref={this.myAudioRef} src={songUrl}></audio>
                    
                    <div className="music-play-mod"> 

                        <div className='music-buttons'> 
                            {/* <i className="far fa-thumbs-down"></i> */}
                            
                            <button 
                                className='music-prev-button'
                                onDoubleClick={() => this.prevSong('forcePrev')}
                                onClick={() => this.prevSong()}>
                                <i className="fas fa-step-backward"></i>
                            </button>
                        
                    
                            <button 
                                className="music-play-pause"
                                    onClick={() => this.togglePlay()} >
                                        {playPauseImg}
                                {/* <i className="far fa-play-circle fa-2x"></i> */}
                            </button>

                            <button 
                                onClick={() => this.nextSong()}
                                className="music-next-btn">
                                <i className="fas fa-step-forward"></i>
                            </button>
                            {/* <i className="far fa-thumbs-up"></i> */}
                        </div>


                        <div className='music-seek-mod'>

                            <div className='music-time-current'>{time_current}</div>
                            <input
                                className="music-seek-input"
                                type="range"
                                value={this.state.currentTime}
                                onChange={this.updateScrubber()}
                                min="0"
                                max={`${song_length}`} />
                            <div className='music-time-total'>{song_max}</div>
                        </div>
                        
                    </div>

                    
                    <div className="music-volume">

                        <input 
                            className="music-volume-input"
                            type="range" 
                            value={this.state.volume}
                            onChange={this.updateVolume()}
                            min="0"
                            max="100"
                            />
                    </div>
    
                </div>
            </>
        )
    }
}

export default MusicPlayerConsole;