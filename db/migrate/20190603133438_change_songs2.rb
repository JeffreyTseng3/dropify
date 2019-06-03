class ChangeSongs2 < ActiveRecord::Migration[5.2]
  def change
    remove_timestamps :songs
  end
end
