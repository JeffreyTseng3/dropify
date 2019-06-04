import React from "react";
import ArtistShowHeaderContainer from "../artist_show_header/artist_show_header_container";
import ArtistShowAreaContainer from "../artist_show_area/artist_show_area_container";

class ArtistShowModule extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { artistId } = this.props.match.params;
        let { fetchArtist } = this.props;
        // debugger
        fetchArtist(artistId);
    }

    render() {
        let { artist } = this.props
        let artist_prop = artist ? artist : null;


        return (
            <>
                <div className="artist-show-module">   
                    <ArtistShowHeaderContainer artist={artist_prop} />
                    < ArtistShowAreaContainer />
                    
        
                </div>
           
            </>
        )
    }
}

export default ArtistShowModule;

