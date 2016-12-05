class AddImageToIllustrations < ActiveRecord::Migration[5.0]
  def self.up
    add_attachment :illustrations, :image
  end

  def self.down
    remove_attachment :illustrations, :image
  end
end
