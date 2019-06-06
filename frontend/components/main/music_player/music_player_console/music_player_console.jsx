import React from 'react';

class MusicPlayerConsole extends React.Component {
    constructor(props) {
        super(props);
        this.myAudioRef = React.createRef();
        this.state = {
            playStatus: 'play',
            currentTime: 0,
            volume: "100"
        }
        this.togglePlay = this.togglePlay.bind(this);
        this.updateVolume = this.updateVolume.bind(this);
        this.updateScrubber = this.updateScrubber.bind(this);
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
            }, 1500 ); 
        } else {
            status = 'play'
            audio_ref.pause();
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

    componentDidUpdate() {
        this.setVolume();
    }

    render() {

        let { current_song } = this.props;
        let songUrl = current_song ? current_song.songUrl : null;
        let song_length = current_song ? current_song.song_length : null;
        return (
            <>
                <div className="music-player-console">
                    <audio ref={this.myAudioRef} src={songUrl}></audio>
                    
                    <div className="music-play-mod"> 
                        <button 
                            className="music-play-pause"
                                onClick={() => this.togglePlay()}
                                >
                            <i className="far fa-play-circle fa-2x"></i>
                        </button>

                            <input
                                className="music-seek-input"
                                type="range"
                                value={this.state.currentTime}
                                onChange={this.updateScrubber()}
                                min="0"
                                max={`${song_length}`}
                            />
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