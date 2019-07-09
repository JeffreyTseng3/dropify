class Follow < ApplicationRecord 
    belongs_to :user, 
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: :User
        
    belongs_to :followable, polymorphic: true

end