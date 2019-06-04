import React from "react";

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
        return (
            <>
            ArtistHeaderContainer 
            ArtistMusicContainer
            </>
        )
    }
}

export default ArtistShowModule;

