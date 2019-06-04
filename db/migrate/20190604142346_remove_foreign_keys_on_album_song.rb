class RemoveForeignKeysOnAlbumSong < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :genre_id
    remove_column :songs, :artist_id
  end
end
