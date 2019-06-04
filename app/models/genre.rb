# == Schema Information
#
# Table name: genres
#
#  id         :bigint(8)        not null, primary key
#  category   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ApplicationRecord 
    validates :category, presence: true

    has_many :artists, 
        primary_key: :id, 
        foreign_key: :genre_id,
        class_name: :Artist 
        
    

end
