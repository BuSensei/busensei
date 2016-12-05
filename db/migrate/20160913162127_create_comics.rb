class CreateIllustrations < ActiveRecord::Migration[5.0]
  def change
    create_table :illustrations do |t|
      t.string :title
      t.string :blurb

      t.timestamps
    end
  end
end
