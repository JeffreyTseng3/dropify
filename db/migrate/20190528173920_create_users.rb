class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :username, null: false 
      t.string :password_digest, null: false
      t.string :session_token, null: false 
      t.string :birth_month, null: false 
      t.integer :birth_day, null: false 
      t.integer :birth_year, null: false 
      t.string  :gender, null: false
      t.string :country
      t.string :image_url

      t.timestamps
    end
    add_index :users, :username, unique: true 
    add_index :users, :session_token, unique: true 
    add_index :users, :password_digest, unique: true
  end
end
