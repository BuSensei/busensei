class RenameKanjisToItems < ActiveRecord::Migration[5.0]
  def change
    rename_table :kanjis, :items
  end
end
