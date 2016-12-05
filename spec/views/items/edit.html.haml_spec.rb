require 'rails_helper'

RSpec.describe "items/edit", type: :view do
  before(:each) do
    @item = assign(:item, Item.create!(
      :key => 1,
      :word => "MyString",
      :reading => "MyString",
      :meaning => "MyString",
      :notes => "MyString",
      :synonyms => "MyString",
      :opposites => "MyString",
      :found_in => "MyString"
    ))
  end

  it "renders the edit item form" do
    render

    assert_select "form[action=?][method=?]", item_path(@item), "post" do

      assert_select "input#item_key[name=?]", "item[key]"

      assert_select "input#item_word[name=?]", "item[word]"

      assert_select "input#item_reading[name=?]", "item[reading]"

      assert_select "input#item_meaning[name=?]", "item[meaning]"

      assert_select "input#item_notes[name=?]", "item[notes]"

      assert_select "input#item_synonyms[name=?]", "item[synonyms]"

      assert_select "input#item_opposites[name=?]", "item[opposites]"

      assert_select "input#item_found_in[name=?]", "item[found_in]"
    end
  end
end
