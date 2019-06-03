class ChangeSongs < ActiveRecord::Migration[5.2]
  def change
    add_timestamps :songs, null: true
  end
end
