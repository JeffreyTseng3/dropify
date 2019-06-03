class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null: false 
      t.integer :artist_id, null: false 
      t.integer :genre_id

      t.timestamps
    end
      add_index :albums, :artist_id
      add_index :albums, :genre_id
  end
end
