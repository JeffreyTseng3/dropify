class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null: false 
      t.text :about
      t.integer :genre_id

      t.timestamps
    end
      add_index :artists, :genre_id
  end
end
