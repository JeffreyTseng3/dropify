class Api::PlaylistsController < ApplicationController

    def create 
        @playlist = Playlist.new(playlist_params)
        if @playlist.save 
        
            render "api/playlists/show"
        else 
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def index
       
        @playlists = Playlist.all 
        render "api/playlists/index"
    end 

    def show
        id = params[:id].to_i
        @playlist = Playlist.find(id)
        render "api/playlists/show"
        
    end

    def update

    end

    def destroy 

    end

    def playlist_params 
        params.require(:playlist).permit(:title, :author_id)
    end


end