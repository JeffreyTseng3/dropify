import React from 'react';

class MusicPlayerConsole extends React.Component {
    constructor(props) {
        super(props);
        this.myAudioRef = React.createRef();
        // this.audioPlay = this.audioPlay.bind(this);
        this.state = {
            playStatus: 'play',
            currentTime: 0
        }
        this.togglePlay = this.togglePlay.bind(this);
        // this.updateTime = this.updateTime.bind(this);
    }

    audioPlay() {
        this.myAudioRef.current.play();
    }

    updateTime(timestamp) {
        timestamp = Math.floor(timestamp);
        this.setState({currentTime: timestamp})
    }

    updateScrubber(percent) {
        let innerScrubber = document.querySelector('.music-scrubber-process');
        innerScrubber.style['width'] = percent;
    }

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
                let duration = song_length;
                let percent = ( currentTime / duration ) * 50 + '%';
                this.updateScrubber(percent);
                
                console.log(currentTime, percent);
                this.updateTime(currentTime);
            }, 500 ); 
        } else {
            status = 'play'
            audio_ref.pause();
        }
        this.setState({ playStatus: status })
        console.log(this.state);
    }

    render() {

        let { current_song } = this.props;
        // debugger
        let songUrl = current_song ? current_song.songUrl : null;
        return (
            <>
                <div className="music-player-console">
                    <audio ref={this.myAudioRef} src={songUrl} >
                                {/* <source /> */}
                            </audio>
                    
                    <div className="music-play-mod">
                        
                        <button 
                            className="music-play-pause"
                            onClick={() => this.togglePlay()}
                            >
                            <i className="far fa-play-circle fa-2x"></i>

                           

                        </button>
                        <div className="music-scrubber">
                            <div className="music-scrubber-overlay"></div>
                            <div className="music-scrubber-process"></div>
                        </div>
                        

                    </div>

                    {/* <div className="music-volume-mod">
                        volume bar
                    </div> */}
                </div>
            </>
        )
    }
}

export default MusicPlayerConsole;