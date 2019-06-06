import React from 'react';
import { Link } from 'react-router-dom';


class AlbumIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { album } = this.props;
        let albumId = album ? album.id : null;
        return (
            <>
                <button
                    className="album_icon"
                    onClick={() => this.props.history.push(`/main/album/${albumId}`)}>
                    <img src={album.albumUrl} className="album-icon-img" />
                    <div className="album-icon-text">{album.title}</div>
                </button>
            </>
        )
    }
}

export default AlbumIcon;