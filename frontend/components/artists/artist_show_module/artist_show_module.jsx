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
        let { artist, songs } = this.props;
        


        return (
            <>
                <div className="artist-show-module">   
                    <ArtistShowHeaderContainer artist={artist} />
                    <ArtistShowAreaContainer songs={songs}/>
                    
        
                </div>
           
            </>
        )
    }
}

export default ArtistShowModule;

