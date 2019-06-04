json.extract! song, :id, :song_title, :song_length 
json.songUrl url_for(song.audio_track)
# tentative not debugged

