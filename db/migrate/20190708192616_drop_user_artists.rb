class DropUserArtists < ActiveRecord::Migration[5.2]
  def change
    drop_table :user_artists
  end
end
