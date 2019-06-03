class Song < ApplicationRecord 
    validates :song_title, :song_length, presence: true

    has_one_attached :audio_track

end
