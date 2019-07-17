import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ArtistIconContainer from '../../icons/artists/artist_icon_container';

class ArtistsCollection extends React.Component {

    constructor(props) {
        super(props);
        this.returnMyIds = this.returnMyIds.bind(this);
        }
    
    returnMyIds() {
        let { collection, currentUserId } = this.props;
        let type = "Artist";

        let myItems = collection.filter(item => item.followable_type === 'Artist' && item.user_id === currentUserId) 
        
        let ans = [];
        myItems.forEach(item => ans.push(item.followable_id));
        return ans;
    }

    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        let { artists } = this.props;

        let myIds = this.returnMyIds();
        console.log(myIds);

        let myArtists = artists && myIds ? artists.filter(artist => myIds.includes(artist.id)) : null; 
        let artistsDisplay = myArtists.map(artist => {
            return <ArtistIconContainer key={artist.id} artist={artist} />
        })
        return (
            <>  
                <div className="albums-on-explore-container">

                    <div className="album-items-scroll">
                        {artistsDisplay}
                    </div>
                </div>
                
            </>
           
        )
    }

}

export default ArtistsCollection;


