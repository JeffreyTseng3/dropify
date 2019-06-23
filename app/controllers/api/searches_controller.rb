class Api::SearchesController < ApplicationController


    def search 
        search_input = params[:searchInput]
        @albums = Album.where("title ILIKE ?", "%#{search_input}%").first(4)
        @playlists = Playlist.where("title ILIKE ?", "%#{search_input}%").first(4)
        @artists = Artist.where("name ILIKE ?", "%#{search_input}%").first(4)
        @songs = Song.where("song_title ILIKE ?", "%#{search_input}%").first(4)
        
        render 'api/searches/show'
    end 
        

end