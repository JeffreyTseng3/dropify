import React from "react";

class ArtistShowAbout extends React.Component {
    constructor(props) {
        super(props);
    }



    componentDidMount() {

    }

    render() {
        let { artists } = this.props;
        let { artistId } = this.props.match.params;
        let my_artist = artists ? artists.filter(artist => artist.id == artistId)[0] : null;
        let about = my_artist ? my_artist.about : null;

        return (
            <>
                <div className="artist-about-text-mod">
                    <div className="artist-about-biography">Biography</div>
                    <div className="artist-about-text">{about}</div>
                </div>

            </>
        )
    }
}

export default ArtistShowAbout;

