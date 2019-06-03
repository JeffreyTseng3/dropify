class Api::SongsController < ApplicationController

    def index 
        @songs = Song.all 
        render "api/songs/index"
    end


    def show
        @song = Song.first 
        render "api/songs/show"
    end 

    


end
