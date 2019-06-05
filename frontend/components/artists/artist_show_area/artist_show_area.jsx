import React from "react";
import SongArtistItemContainer from "../../songs/songs_artist_item/songs_artist_item_container";

class ArtistShowArea extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentDidUpdate() {
    //     let { artistId } = this.props.match.params;
    //     let { fetchArtist } = this.props;
    //     fetchArtist(artistId);
    // }

    // componentDidMount() {
        
        //     fetchArtist(artistId);
        // }
        
        render() {
       
        let  {songs }  = this.props;
        
        let songs_display = songs.map( song => {
            return < SongArtistItemContainer key={song.id} song={song}/>
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