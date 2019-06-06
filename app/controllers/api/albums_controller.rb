class Api::AlbumsController < ApplicationController

    def index
        @albums = Album.all 
        render 'api/albums/index'
    end 

    def show 
        
        @album = Album.includes(:songs, :artist).with_attached_album_img.find(params[:id])
        render 'api/albums/show'
    end

end
