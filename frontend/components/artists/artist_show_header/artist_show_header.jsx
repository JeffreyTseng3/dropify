import React from "react";
import { Link } from 'react-router-dom';

class ArtistShowHeader extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddToCollection = this.handleAddToCollection.bind(this);
        this.handleRemoveFromCollection = this.handleRemoveFromCollection.bind(this);
        this.ifSaved = this.ifSaved.bind(this);
    }

  
    handleAddToCollection() {
        let { artistId } = this.props.match.params;
        let { currentUserId, fetchCollection, addToCollection } = this.props;
        let type = 'Artist';
        addToCollection(currentUserId, artistId, type);
        fetchCollection();
    }

    handleRemoveFromCollection(){
        let { artistId } = this.props.match.params;
        let { currentUserId, fetchCollection, removeFromCollection, collection } = this.props;
        let type = 'Artist';
        let ans = collection.filter(item => item.followable_id == artistId && item.followable_type == type && currentUserId === item.user_id);
        let id = ans ? ans[0].id : null;
        
        // console.log(ans, id);
        
        removeFromCollection(id);
        fetchCollection();
    }

    ifSaved() {
        let { collection, currentUserId } = this.props;
        if (collection === undefined) {
            return false; 
        } else {
            let { artistId } = this.props.match.params;
            let type = "Artist";
            let ans = collection.filter(item => item.followable_id == artistId && item.followable_type == type && currentUserId === item.user_id);
            
            if (ans.length === 1) {
                return true;
            }
        }
        
    }

    render() {
        let { artist, currentUserId } = this.props;
        let name = artist ? artist.name : null;
        let img = artist ? artist.photoUrl : null;
        let about = artist ? artist.about : null;
        let { artistId } = this.props.match.params;
        let followBtn;
        if (this.ifSaved()){
            console.log('saved');

            followBtn = (
                <button
                    className='artist-save-lib'
                    onClick={() => this.handleRemoveFromCollection()}>
                    UNFOLLOW
                </button>)
            
        } else {
            followBtn = (
                <button
                    className='artist-save-lib'
                    onClick={() => this.handleAddToCollection()}>
                    FOLLOW
                </button>)
        };
        
        
        return (
            <>
                <div className="artist-show-header">
                    <div className="artist-show-img-text">
                        <img src={img} className="artist-header-img"/>
                        <div className="artist-header-name">{name}</div>
                    </div>
                    
                    <div className="artist-play-library">
                        <button className="artist-show-play">PLAY</button>
                        {followBtn}
                       
                    
                    </div>

                    <div className="artist-header-options"> 
                        <Link 
                            to={`/main/artist/${artistId}`}
                            className="artist-overview">OVERVIEW
                        </Link>

                        <Link 
                            to={`/main/artist/${artistId}/related`}
                            className='artist-related'>
                            RELATED ARTISTS
                        </Link>

                        <Link 
                            className='artist-about'
                            to={`/main/artist/${artistId}/about`}
                            
                            >
                            ABOUT
                        </Link>
                    </div>
                </div>
            </>
        )
    }


}

export default ArtistShowHeader;