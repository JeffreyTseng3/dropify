class Song < ApplicationRecord 
    validates :song_title, presence: true

    has_one_attached :audio_track

end
