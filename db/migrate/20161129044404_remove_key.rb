class RemoveKey < ActiveRecord::Migration[5.0]
  def change
    remove_column :items, :key
  end
end
