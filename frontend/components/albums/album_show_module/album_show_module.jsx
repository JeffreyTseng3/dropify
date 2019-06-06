import React from "react";

class AlbumShowModule extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { albumId } = this.props.match.params;
        let { fetchAlbum } = this.props;
        
        // let artistId = this.props.albums
        
        fetchAlbum(albumId);
        // fetchArtist(artistId);
    }

    render() {
        // let { artists, songs, album } = this.props;
        // let { albumId } = this.props.match.params;

        
    
        

        return(
            <>
            HELLOALBUM
            </>
        )
    }
}

export default AlbumShowModule;