<!-- # README

# Dropify

Dropify is a clone of Spotify, developed for my full stack project at App Academy NYC. The project has few basic features: signing up and logging in, browsing through artists and albums, creating a playlist, and interacting with a music player bar.


## Coding Languages and Tools
+ Ruby
+ Ruby On Rails 
+ Javascript
+ React
+ Redux
+ Webpack
+ Jbuilder


## Resources
+ Amazon Web Services https://console.aws.amazon.com/
+ BPM Supreme https://www.bpmsupreme.com/ 
+ Font Awesome https://fontawesome.com/


The project has some items that I will describe in this README.

+ login error handling 
+ updating the redux store for browsing artists
+ music player seeking and volume control


# Login Error Handling
In my `sessions_controller.rb` create method, I saved a keyword that matches with the type of empty input error.

```ruby   
    errors = []
    if params[:user][:info] == "" 
      errors << "info"
    end 

    if params[:user][:password] == ""
      errors << "password"
    end
      
    if !errors.empty?
      render json: errors, status: 401
      return 
    end
```

[![Login](https://github.com/JeffreyTseng3/dropify/blob/master/README_images/login_errors.png?raw=true)]


Then, I dynamically change my css styling based off what is in the errors return array. 

```javascript 
    let infoError = this.props.errors.includes("info") ? <div className="info-errors"> Please enter your Dropify username or email address.</div> : null;
    let passwordError = this.props.errors.includes("password") ? <div className="password-errors">Please enter your password.</div> : null;
```

# Browsing Artists
When I go to the show page of an artist, I use `fetchArtist` on the wild card in the url, and get artist info and all songs and albums pertaining to said artist to update the state. I pass the payload below through my `artistsReducer`, `songsReducer`, and `albumsReducer`, each able to receive the action type of `RECEIVE_ARTIST`.


``` ruby
json.artist do
    json.partial! 'api/artists/artist', artist: @artist 
end

json.songs do 
    @artist.songs.each do |song|
        json.set! song.id do
            json.partial! 'api/songs/song', song: song
            
        end
    end
end

json.albums do 
    @artist.albums.each do |album|
        json.set! album.id do 
            json.partial! 'api/albums/album', album: album
        end
    end
end

```


# Music Player

In my music player, I have an audio tag, which I manipulate through a ref. I create the ref in the constructor state. I attached the ref to my relative audio html tag. I wrapped the audio in a `button`, which I have calling `togglePlay` when clicked. 

    ```javascript
    this.myAudioRef = React.createRef()
    ```
    ```javascript
        <audio ref={this.myAudioRef} src={songUrl}></audio>
    ```

In the below code for `togglePlay`, I grab the audio tag by calling `current` on the ref. Then based off of the `playStatus` in my state, I toggle play and pause, updating the `playStatus` in my state. The code also show `playPauseBtn` being updated whenever the song is playing or paused.

```javascript
togglePlay() {
        let audio_ref = this.myAudioRef.current;
        let status = this.state.playStatus;
        if (status === 'play') {
            status = 'pause';
            audio_ref.play();
            setInterval(() => {
                let currentTime = audio_ref.currentTime;
                this.updateTime(currentTime);
                this.setState({ playPauseBtn: (<i className="far fa-pause-circle fa-2x"></i>) });
            }, 500 ); 
        } else {
            status = 'play'
            audio_ref.pause();
            this.setState({ playPauseBtn: (<i className="far fa-play-circle fa-2x"></i>) });

        }
        this.setState({ playStatus: status })
    }

```

# Sample Views

The below are sample views of my app. 

## Home page logged in (1)
[![HomeLogged](https://raw.githubusercontent.com/JeffreyTseng3/dropify/master/README_images/logged_in_home_pt1.png)]

## Home page logged in (2)
[![HomeLogged](https://github.com/JeffreyTseng3/dropify/blob/master/README_images/logged_in_home_pt2.png?raw=true)]



## Music Player Home 
[![HomeLogged](https://github.com/JeffreyTseng3/dropify/blob/master/README_images/logged_in_home.png?raw=true)]

## Album Show
[![AlbumShow](https://github.com/JeffreyTseng3/dropify/blob/master/README_images/album_show.png?raw=true)]

## Artist Show
[![ArtistShow](https://github.com/JeffreyTseng3/dropify/blob/master/README_images/artist_show.png?raw=true)]


# Items to work on
+ Search 
+ Playlists 
+ Adding songs to playlists 
+ Song functions: queue, shuffle, repeat, volume mute

 -->
