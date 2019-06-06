import React from "react";

class ArtistShowHeader extends React.Component {

    constructor(props) {
        super(props);
    }

  

    render() {
        let {artist} = this.props;
        let name = artist ? artist.name : null;
        let img = artist ? artist.photoUrl : null;
        return (
            <>
                <div className="artist-show-header">
                    <img src={img} className="artist-header-img"/>
                    <div className="artist-header-name">{name}</div>
                    
                </div>
            </>
        )
    }


}

export default ArtistShowHeader;