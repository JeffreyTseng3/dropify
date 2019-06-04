import React from "react";
import { Link } from 'react-router-dom';

class BrowseArea extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        // debugger
        let { fetchArtists } = this.props;
        fetchArtists();
        // fetchAlbums();
    }


    render() {
        let { four_artists } = this.props;

        let artist_route0 = four_artists ? four_artists[0].id : null; 
        let artist_route1 = four_artists ? four_artists[1].id : null; 
        let artist_route2 = four_artists ? four_artists[2].id : null; 
        let artist_route3 = four_artists ? four_artists[3].id : null; 

        let artist_img0 = four_artists ? four_artists[0].photoUrl : null;
        let artist_img1 = four_artists ? four_artists[1].photoUrl : null;
        let artist_img2 = four_artists ? four_artists[2].photoUrl : null;
        let artist_img3 = four_artists ? four_artists[3].photoUrl : null;

        let artist_name0 = four_artists ? four_artists[0].name : null;
        let artist_name1 = four_artists ? four_artists[1].name : null;
        let artist_name2 = four_artists ? four_artists[2].name : null;
        let artist_name3 = four_artists ? four_artists[3].name : null;



        return (
            <>
                <div className="browse-area-module">
                    <div className="browse-artists-text">
                        Artists
                    </div>

                    <div className="browse-artists">
                        <button 
                            className="browse-artist-item" 
                            onClick={() => this.props.history.push(`/main/artist/${artist_route0}`)}
                            >
                            <img src={artist_img0} />
                            {artist_name0}
                        </button>  

                        <button 
                            className="browse-artist-item"
                            onClick={() => this.props.history.push(`/main/artist/${artist_route1}`)}
                            >
                            <img src={artist_img1} />
                            {artist_name1}
                           
                        </button>  

                        <button 
                            className="browse-artist-item"
                            onClick={() => this.props.history.push(`/main/artist/${artist_route2}`)}
                            >
                            <img src={artist_img2} />
                            {artist_name2}
                            
                        </button>  

                        <button 
                            className="browse-artist-item"
                            onClick={() => this.props.history.push(`/main/artist/${artist_route3}`)}
                            >
                            <img src={artist_img3} />
                            {artist_name3}
                            
                        </button>
                    </div>
                    
                <div className="browse-albums-text">Albums</div>
                    <div className="browse-albums">
                        
                        <div className="browse-album-item">
                            a1
                        </div>

                        <div className="browse-album-item">
                            a2
                        </div>

                        <div className="browse-album-item">
                            a3
                        </div>

                        <div className="browse-album-item">
                            a4
                        </div>
                    </div>

                </div>
            </>
        )
    }


}

export default BrowseArea 