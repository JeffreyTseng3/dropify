import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AlbumIconContainer from "../../icons/albums/album_icon_container";

class AlbumsCollection extends React.Component {

    constructor(props) {
        super(props);
        this.returnMyIds = this.returnMyIds.bind(this);

    }

    componentDidMount(){
        this.props.fetchAlbums();
    }


    returnMyIds() {
        let { collection, currentUserId } = this.props;
        let type = "Album";
        let myItems = collection.filter(item => item.followable_type === 'Album' && item.user_id === currentUserId);
        let ans = [];
        myItems.forEach(item => ans.push(item.followable_id));
        return ans;
    }

    
    render() {

        let { albums } = this.props;
        let myIds = this.returnMyIds();
        console.log(myIds);

        let myAlbums = albums && myIds ? albums.filter(album => myIds.includes(album.id)) : null; 
        console.log(myAlbums);
        let albumsDisplay = myAlbums.map(album => {
            return <AlbumIconContainer key={album.id} album={album} />
        })

        return (
            <>
            <div className="albums-on-explore-container">
                
                <div className="album-items-scroll">
                        {albumsDisplay}
                </div>
            </div>
            </>

        )
    }

}

export default AlbumsCollection;


