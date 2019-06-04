import React from 'react';
import { Link } from 'react-router-dom';




class ArtistIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { artist } = this.props;
        let artistId = artist ? artist.id : null;

        return (
            <>
                <button 
                    className="artist_icon" 
                    onClick={() => this.props.history.push(`/main/artist/${artistId}`)}>
                    <img src={artist.photoUrl} className="artist-icon-img" />
                    <div className="artist-icon-text">{artist.name}</div>
                </button>
            </>
        )
    }

    

}
 

export default ArtistIcon;