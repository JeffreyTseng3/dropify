class ChangePlaylistAlbumNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :albums, :artist_id, null: true 
  end
end
