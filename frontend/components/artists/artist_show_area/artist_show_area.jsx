import React from "react";
import SongsArtistItemContainer from "../../songs/songs_artist_item/songs_artist_item_container";

class ArtistShowArea extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        let { artistId } = this.props.match.params;
        let { fetchArtist } = this.props;
        fetchArtist(artistId);
    }
        
    render() {
       
        let  { songs }  = this.props;
        
        let songs_display = songs.map( song => {
            return < SongsArtistItemContainer key={song.id} song={song}/>
            
        })


        return (
            <>
                <div className="artist-show-area">
                    {songs_display}
                </div>
                
            </>
        )
    }
}

export default ArtistShowArea;