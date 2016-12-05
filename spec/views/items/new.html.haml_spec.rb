require 'rails_helper'

RSpec.describe "items/new", type: :view do
  before(:each) do
    assign(:item, Item.new(
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

  it "renders new item form" do
    render

    assert_select "form[action=?][method=?]", items_path, "post" do

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
