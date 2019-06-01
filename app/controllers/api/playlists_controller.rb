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

    end 

    def show

    end

    def update

    end

    def destroy 

    end

    def playlist_params 
        params.require(:playlist).permit(:title, :author_id)
    end


end