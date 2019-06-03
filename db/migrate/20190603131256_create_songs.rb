class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :song_title
      t.integer :song_length
      t.integer :artist_id
      t.integer :album_id
    end
      add_index :songs, :artist_id
      add_index :songs, :album_id
  end
end
