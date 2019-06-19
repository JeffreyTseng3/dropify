import React from "react";
import { Link } from 'react-router-dom';

class ArtistShowHeader extends React.Component {

    constructor(props) {
        super(props);
    }

  

    render() {
        let {artist} = this.props;
        let name = artist ? artist.name : null;
        let img = artist ? artist.photoUrl : null;
        let about = artist ? artist.about : null;
     
        let { artistId } = this.props.match.params;
        return (
            <>
                <div className="artist-show-header">
                    <div className="artist-show-img-text">
                        <img src={img} className="artist-header-img"/>
                        <div className="artist-header-name">{name}</div>
                    </div>
                    
                    <div className="artist-play-library">
                        <button className="artist-show-play">PLAY</button>
                        <button className='artist-save-lib'>SAVE TO LIBRARY</button>
                    </div>

                    <div className="artist-header-options"> 
                        <Link 
                            to={`/main/artist/${artistId}`}
                            className="artist-overview">OVERVIEW
                        </Link>

                        <Link 
                            to={`/main/artist/${artistId}/related`}
                            className='artist-related'>
                            RELATED ARTISTS
                        </Link>

                        <Link 
                            className='artist-about'
                            to={`/main/artist/${artistId}/about`}
                            
                            >
                            ABOUT
                        </Link>
                    </div>
                </div>
            </>
        )
    }


}

export default ArtistShowHeader;