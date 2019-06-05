import React from 'react';

class MusicPlayerInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { current_song } = this.props;
        let title = current_song ? current_song.song_title : null;
        return(
            <>
                <div className="music-player-info">
                    Album Art 
                    { title }
                </div>
            </>
        )
    }
}

export default MusicPlayerInfo;