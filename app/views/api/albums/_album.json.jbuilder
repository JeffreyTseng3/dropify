json.extract! album, :id, :title, :song_ids
json.albumUrl url_for(album.album_img)
json.artist_id album.artist.id