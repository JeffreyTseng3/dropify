import React from 'react';

class MusicPlayerInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <div className="music-player-info">
                    Album Art 
                    Artist
                </div>
            </>
        )
    }
}

export default MusicPlayerInfo;