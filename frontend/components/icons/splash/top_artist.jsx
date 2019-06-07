import React from 'react';


class TopArtist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let { artist } = this.props;

        let img = artist ? artist.photoUrl : null; 
        let name = artist ? artist.name : null;
        let id = artist ? artist.id : null;
        let redirect = id ? `/main/artist/${id}` : null;

        return(<>
            <div className="top-artist-icon">
                <div className="top-artist-background"></div>
                <img src={img} className="top-artist-img"/>
                <div className="top-artist-info">
                    <div className="top-artist-text">Top Artist</div>
                    <div className="top-artist-name">{name}</div>
                    <button 
                        onClick={() => this.props.history.push(redirect) }
                        className='top-artist-play'>
                         PLAY NOW
                    </button>
                </div>
                
            </div>
         </>)
    }
}

export default TopArtist;