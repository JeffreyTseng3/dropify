json.array! @artists do |artist| 
    json.extract! artist, :id, :name, :about
    json.photoUrl url_for(artist.artist_img)
end