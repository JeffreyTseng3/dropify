
json.artist do
    json.partial! 'api/artists/artist', artist: @artist 
end

json.songs do 
    @artist.songs.each do |song|
        json.set! song.id do
            json.partial! 'api/songs/song', song: song
            
        end
    end
end

