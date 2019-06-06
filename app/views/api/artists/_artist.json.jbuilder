
json.extract! artist, :id, :name, :about, :song_ids, :album_ids
json.photoUrl url_for(artist.artist_img)