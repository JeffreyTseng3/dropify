json.extract! song, :id, :song_title, :song_length, :playlist_ids
json.artist_id song.artist.id
json.album_id song.album.id
json.songUrl url_for(song.audio_track)


