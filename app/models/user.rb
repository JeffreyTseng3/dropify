# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  birth_month     :string           not null
#  birth_day       :integer          not null
#  birth_year      :integer          not null
#  gender          :string           not null
#  country         :string
#  image_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord 
    # validations
    validates :email, :username, :password_digest, :session_token, presence: true 
    validates :birth_month, :birth_day, :birth_year, :gender, presence: true 
    validates :password, length: { minimum: 6, allow_nil: true }
   
    # ASSOCIATIONS


    # FIGVAPOR
    attr_reader :password
    after_initialize :ensure_session_token 
    # 
    def self.find_by_credentials(username, password) 
        user = User.find_by(username: username)
        user && user.valid_password?(password) ? user : nil 
    end 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token! 
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end 
