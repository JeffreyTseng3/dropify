import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PlaylistSongItemContainer from "../../playlists/playlist_song_item/playlist_song_item_container";


class SongsCollection extends React.Component {

    constructor(props) {
        super(props);
        this.returnMyIds = this.returnMyIds.bind(this);

    }

    componentDidMount() {
        this.props.fetchSongs();
    }

    returnMyIds() {
        let { collection, currentUserId } = this.props;
        let type = "Song";

        let myItems = collection.filter(item => item.followable_type === 'Song' && item.user_id === currentUserId)

        let ans = [];
        myItems.forEach(item => ans.push(item.followable_id));
        return ans;
    }

    render() {

        let { songs } = this.props;

        let myIds = this.returnMyIds();
        console.log(myIds);

        let mySongs = songs && myIds ? songs.filter(song => myIds.includes(song.id)) : null;
        let songsDisplay = mySongs.map(song => {
            return <PlaylistSongItemContainer key={song.id} song={song} />
        })

        return (
            <>
                {songsDisplay}
            </>

        )
    }

}

export default SongsCollection;


