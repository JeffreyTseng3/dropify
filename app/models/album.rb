# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  genre_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord 
    validates :title, presence: true 

    has_one_attached :album_img

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id, 
        class_name: :Artist 

    belongs_to :genre,
        primary_key: :id,
        foreign_key: :genre_id, 
        class_name: :Genre 


end
