class CreateUserArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :user_artists do |t|
      t.integer :user_id, null: false
      t.integer :artist_id, null: false 

      t.timestamps
    end
    add_index :user_artists, :user_id 
    add_index :user_artists, :artist_id 
  end
end
