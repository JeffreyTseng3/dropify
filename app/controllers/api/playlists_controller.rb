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
        author_id = params[:author_id]
        @playlists = Playlist.where(author_id: author_id)
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