class ChangeKanjiColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :kanjis, :type, :category
  end
end
