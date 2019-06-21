class Api::PlaylistSongsController < ApplicationController 

    def create 
        @playlist_song = PlaylistSong.new(playlist_song_params)
        @playlist_song.save
  
     
    end 

    def destroy 
        
    end

    def remove_song 
  
        playlist_song = PlaylistSong.find_by(song_id: playlist_song_params[:song_id], playlist_id: playlist_song_params[:playlist_id])
        if playlist_song.destroy
            @playlist = Playlist.find(playlist_song_params[:playlist_id])
          
            render "api/playlists/show"  
        end      
    end 

    def playlist_song_params 
       params.require(:playlistSongRelation).permit(:song_id, :playlist_id) 
    end

end