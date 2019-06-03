# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class Playlist < ApplicationRecord 
    validates :title, presence: true

    belongs_to :author,
        primary_key: :id, 
        foreign_key: :author_id,
        class_name: :User

    # has_many :songs
    # song_ids => []
    # playlist.song_ids returns an array of all ids..

end
