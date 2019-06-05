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
    }


    updateTime(timestamp) {
        timestamp = Math.floor(timestamp);
        this.setState({currentTime: timestamp})
    }

    // updateScrubber(percent) {
    //     let innerScrubber = document.querySelector('.music-scrubber-process');
    //     innerScrubber.style['width'] = percent;
    // }

    togglePlay() {
        let { current_song } = this.props;
        let song_length = current_song ? current_song.song_length : null;
        let audio_ref = this.myAudioRef.current;
        let status = this.state.playStatus;
        if (status === 'play') {
            status = 'pause';
            audio_ref.play();
            setInterval(() => {
                let currentTime = audio_ref.currentTime;
                // let duration = song_length;
                // let percent = ( Math.ceil(currentTime) / duration ) * 50 + '%';
                // this.updateScrubber(percent);
                // console.log(currentTime, percent);
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
            console.log(this.state);
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
                        {/* <div className="music-scrubber"> */}
                            {/* <div className="music-scrubber-overlay"></div>
                            <div className="music-scrubber-process"></div> */}
                            <input
                                type="range"
                                value={this.state.currentTime}
                                // onChange={this.updateVolume()}
                                min="0"
                                max="1000"
                            />
                        {/* </div> */}
                    </div>

                    
                    <div className="music-volume">
                   
                        <input 
                            type="range" 
                            value={this.state.volume}
                             onChange={this.updateVolume()}
                            min="0"
                            max="100"
                            />
                        {/* <button onClick={() => this.handleVolume()}>volume</button> */}
                    </div>
    
                </div>
            </>
        )
    }
}

export default MusicPlayerConsole;