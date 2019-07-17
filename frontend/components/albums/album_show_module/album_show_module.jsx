import React from "react";
import SongsAlbumItem from '../../songs/songs_album_item/songs_album_item_container';

class AlbumShowModule extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddToCollection = this.handleAddToCollection.bind(this);
        this.handleRemoveFromCollection = this.handleRemoveFromCollection.bind(this);
        this.ifSaved = this.ifSaved.bind(this);
        this.handlePlay = this.handlePlay.bind(this);

    }

    componentDidMount() {
        let { albumId } = this.props.match.params;
        let { fetchAlbum } = this.props;
        fetchAlbum(albumId);
    }

    handleAddToCollection() {
        let { albumId } = this.props.match.params;
        let { currentUserId, fetchCollection, addToCollection } = this.props;
        let type = 'Album';
        addToCollection(currentUserId, albumId, type);
        fetchCollection();
    }

    handleRemoveFromCollection() {
        let { albumId } = this.props.match.params;
        let { currentUserId, fetchCollection, removeFromCollection, collection } = this.props;
        let type = 'Album';
        let ans = collection.filter(item => item.followable_id == albumId && item.followable_type == type && currentUserId === item.user_id);
        let id = ans ? ans[0].id : null;

        removeFromCollection(id);
        fetchCollection();
    }



    handlePlay() {
        let { albumId } = this.props.match.params;
        let { albums, fetchCurrentSong, setMusicPlayType } = this.props;
        let album = albums ? albums.filter(album => album.id == albumId)[0]: null;
        
        let songIds = album ? album.song_ids : null;
        let songId = songIds ? songIds[0] : null;
        fetchCurrentSong(songId);
        
        let musicPlayType = { album: albumId }
        setMusicPlayType(musicPlayType);
    }

    ifSaved() {
        let { collection, currentUserId } = this.props;
        if (collection === undefined) {
            
        } else {
 
            let { albumId } = this.props.match.params;
            let type = "Album";
            let ans = collection.filter(item => item.followable_id == albumId && item.followable_type == type && currentUserId === item.user_id);
         
            if (ans.length === 1) {
                return true;
            }
        }
    }

    render() {
        let { artists, songs, albums, currentUserId, addToCollection, removeFromCollection } = this.props;
        let { albumId } = this.props.match.params;

        let artist = artists ? artists.filter(artist => artist.album_ids.includes(Number(albumId)))[0] : null;
        let artistName = artist ? artist.name : null;

        let mySongs = songs ? songs.filter(song => song.album_id == albumId) : null;
        let album = albums ? albums.filter(album => album.id == albumId)[0] : null;
        let albumTitle = album ? album.title : null;
        let albumUrl = album ? album.albumUrl : null; 
        let type = 'Album';
        let songsDisplay = mySongs ? mySongs.map(song => {
            return <SongsAlbumItem key={song.id} song={song}/>
        }) : null;
        // debugger

        let followBtn;

        if (this.ifSaved()) {
            

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


        return(
            <>
            <div className='album-show-module'>   
                <div className="album-show-left">
                    <img src={albumUrl} className="album-show-img" />
                    <div className="album-show-title">{albumTitle}</div>
                    <div className="album-show-artist">{artistName}</div>
                    <button
                        onClick={() => this.handlePlay()}
                        className="artist-show-play">
                        PLAY
                    </button>
                        {followBtn}

                        {/* <button
                            className='artist-save-lib'
                            onClick={() => addToCollection(currentUserId, albumId, type)}
                            >

                            FOLLOW
                        </button> */}
                </div>
                <div className='album-show-right'>{songsDisplay}</div>
            </div>
            
            </>
        )
    }
}

export default AlbumShowModule;