class AddColumnsToKanji < ActiveRecord::Migration[5.0]
  def change
    rename_column :kanjis, :meaning, :english
    add_column :kanjis, :japanese, :string
    add_column :kanjis, :origin, :string
    add_column :kanjis, :test, :string
    add_column :kanjis, :level, :string
    add_column :kanjis, :type, :string
  end
end
