class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.all.sample(9) 
        render 'api/artists/index'
    end 

    def show 
       
        @artist = Artist.includes(:albums, :songs).with_attached_artist_img.find(params[:id])
        #@artist = Artist.includes(:albums, :songs)
        render 'api/artists/show'
    end

end
