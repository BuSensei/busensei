class CreateKanjis < ActiveRecord::Migration[5.0]
  def change
    create_table :kanjis do |t|
      t.integer :key
      t.string :word
      t.string :reading
      t.string :meaning
      t.string :notes
      t.string :synonyms
      t.string :opposites
      t.string :found_in

      t.timestamps
    end
  end
end
