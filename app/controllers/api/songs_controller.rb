class Api::SongsController < ApplicationController


    # tentative not debugged

    def index 
        @songs = Song.all 
        render "api/songs/index"
    end


    def show
        @song = Song.includes(:album, :artist).with_attached_audio_track.find(params[:id]) 
       

        render "api/songs/show"
    end 


end
