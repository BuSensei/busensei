class AddImageToComics < ActiveRecord::Migration[5.0]
  def self.up
    add_attachment :comics, :image
  end

  def self.down
    remove_attachment :comics, :image
  end
end
