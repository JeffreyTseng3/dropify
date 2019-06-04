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

end
