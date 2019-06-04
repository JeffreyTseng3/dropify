

@artists.each do |artist|
    json.set! artist.id do 
        json.extract! artist, :id, :name, :about, :song_ids
        json.photoUrl url_for(artist.artist_img)
    end
end