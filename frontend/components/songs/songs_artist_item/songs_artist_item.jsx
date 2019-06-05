import React from "react";

class SongsArtistItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { song } = this.props;
        let song_title = song ? song.song_title : null;
        
        return (
            <> 
            <button className="song_item"> 
                {song_title}
            </button>
            </>
        )
    }
}

export default SongsArtistItem;