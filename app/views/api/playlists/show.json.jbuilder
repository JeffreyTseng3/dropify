json.playlist do 
    json.partial! "api/playlists/playlist", playlist: @playlist
end 

json.songs do 
    @playlist.songs.each do |song| 
        json.set! song.id do 
            json.partial! 'api/songs/song', song: song            
        end 
    end 
end 

json.albums do 
    @playlist.albums.each do |album|
        json.set! album.id do 
            json.partial! 'api/albums/album', album: album
        end
    end
end

json.artists do 
    @playlist.artists.each do |artist|
        json.set! artist.id do 
            json.partial! 'api/artists/artist', artist: artist 
        end 
    end 
end 