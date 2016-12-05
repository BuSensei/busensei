class ChangeComicsToIllustrations < ActiveRecord::Migration[5.0]
  def change
    rename_table :comics, :illustrations
  end
end
