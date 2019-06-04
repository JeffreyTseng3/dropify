class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.all 
        render 'api/artists/index'
    end 

    def show 

    end

end
