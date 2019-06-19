import React from "react";
import { Route } from 'react-router-dom';
import SongsArtistItemContainer from "../../songs/songs_artist_item/songs_artist_item_container";
import ArtistShowMusicContainer from '../artist_show_music/artist_show_music_container';
import ArtistShowAboutContainer from "../artist_show_about/about_show_about_container";
import ArtistShowRelatedContainer from '../artist_show_related/artist_show_related_container';


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

        let { artistId } = this.props.match.params;
        let  { songs }  = this.props;
        
        let songs_display = songs.map( song => {
            return < SongsArtistItemContainer key={song.id} song={song}/>
            
        })

        return (
            <>
                <div className="artist-show-area">
                    
                   <Route exact path={`/main/artist/:artistId`} component={ArtistShowMusicContainer} />  
                   <Route  path={`/main/artist/:artistId/about`} component={ArtistShowAboutContainer} />  
                   <Route  path={`/main/artist/:artistId/related`} component={ArtistShowRelatedContainer} />  
                    
                    
                </div>
                
            </>
        )
    }
}

export default ArtistShowArea;