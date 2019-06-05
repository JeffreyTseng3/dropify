import React from "react";
import ArtistShowHeaderContainer from "../artist_show_header/artist_show_header_container";
import ArtistShowAreaContainer from "../artist_show_area/artist_show_area_container";

class ArtistShowModule extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidUpdate() {
    //     let { artistId } = this.props.match.params;
    //     let { fetchArtist } = this.props;
    //     fetchArtist(artistId);
    // }

    componentDidMount() {
        let { artistId } = this.props.match.params;
        let { fetchArtist } = this.props;
        fetchArtist(artistId);
    }

    render() {
        let { artists, songs } = this.props;
        let { artistId } = this.props.match.params;
        
        let artist = artists ?  artists.filter( artist => artist.id == artistId )[0] : null;
        let my_songs = songs ? songs.filter(song => song.artist_id == artistId) : null;
        // debugger


        return (
            <>
                <div className="artist-show-module">   
                    <ArtistShowHeaderContainer artist={artist} />
                    <ArtistShowAreaContainer songs={my_songs}/>
                    
        
                </div>
           
            </>
        )
    }
}

export default ArtistShowModule;

