class ChangeIllustrationsToArticles < ActiveRecord::Migration[5.0]
  def change
    rename_table :illustrations, :articles
  end
end
