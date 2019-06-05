# == Schema Information
#
# Table name: songs
#
#  id          :bigint(8)        not null, primary key
#  song_title  :string
#  song_length :integer
#  artist_id   :integer
#  album_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null


class Song < ApplicationRecord 
    validates :song_title, :song_length, presence: true

    has_one_attached :audio_track

    has_many :playlist_songs,
        primary_key: :id,
        foreign_key: :song_id,
        class_name: :PlaylistSong 

    belongs_to :album,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Album

    has_one :artist,
        through: :album,
        source: :artist
    

end
