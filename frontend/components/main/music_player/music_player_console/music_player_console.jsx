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
            // console.log(this.state);
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
        console.log(this.state);
    }

    updateVolume() {
        return (e) => {
            // console.log(this.state);
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
            audio_ref.play();
            this.setState({playStatus: 'pause'});
            this.updatePlayPauseBtn();
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

    render() {

        let { current_song } = this.props;
        let songUrl = current_song ? current_song.songUrl : null;
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
                            <i className="far fa-thumbs-down"></i>
                            <i className="fas fa-step-backward"></i>
                        
                    
                            <button 
                                className="music-play-pause"
                                    onClick={() => this.togglePlay()} >
                                        {playPauseImg}
                                {/* <i className="far fa-play-circle fa-2x"></i> */}
                            </button>
                            <i className="fas fa-step-forward"></i>
                            <i className="far fa-thumbs-up"></i>
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