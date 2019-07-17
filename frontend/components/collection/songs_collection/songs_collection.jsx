import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import PlaylistSongItemContainer from "../../playlists/playlist_song_item/playlist_song_item_container";
import SongCollectionItemContainer from "./song_collection_item/song_collection_item_container";

class SongsCollection extends React.Component {

    constructor(props) {
        super(props);
        this.returnMyIds = this.returnMyIds.bind(this);
        this.rearrangeSongs = this.rearrangeSongs.bind(this);
    }

    componentDidMount() {
        let { fetchSongs, fetchArtists, fetchAlbums } = this.props;
        fetchSongs();
        fetchArtists();
        fetchAlbums();
    }

    returnMyIds() {
        let { collection, currentUserId } = this.props;
        let type = "Song";

        let myItems = collection.filter(item => item.followable_type === 'Song' && item.user_id === currentUserId)

        let ans = [];
        myItems.forEach(item => ans.push(item.followable_id));
        return ans;
    }

    rearrangeSongs(myIds, mySongsUnordered) {
        let ans = [];
        if (myIds !== undefined && mySongsUnordered !== undefined ) {
            for (let i = 0; i < myIds.length; i++) {
                let id = myIds[i];
                for (let y = 0; y < mySongsUnordered.length; y++) {
                    let song = mySongsUnordered[y];

                        if (song.id === id) {
                            ans.push(song);
                        }                
                }
            }   
        } 
            
        
        return ans;
    }

    render() {

        let { songs } = this.props;

        let myIds = this.returnMyIds();
        console.log(myIds);

        let mySongsUnordered = songs && myIds ? songs.filter(song => myIds.includes(song.id)) : null;
        let mySongs = mySongsUnordered ?  this.rearrangeSongs(myIds, mySongsUnordered) : null;
        console.log(mySongsUnordered, mySongs);
        let songsDisplay = mySongs.map(song => {
            // return <PlaylistSongItemContainer key={song.id} song={song} />
            return <SongCollectionItemContainer key={song.id} song={song} myIds={myIds} />
        })

        return (
            <>
                {songsDisplay}
            </>

        )
    }

}

export default SongsCollection;


