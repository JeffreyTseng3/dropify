# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  about      :text
#  genre_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord 
    validates :name, :about, presence: true 

    belongs_to :genre,
        primary_key: :id, 
        foreign_key: :genre_id,
        class_name: :Genre 

    has_many :albums, 
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Album 

    has_one_attached :artist_img
end
