require 'rails_helper'

RSpec.describe "items/index", type: :view do
  before(:each) do
    assign(:items, [
      Item.create!(
        :key => 2,
        :word => "Word",
        :reading => "Reading",
        :meaning => "Meaning",
        :notes => "Notes",
        :synonyms => "Synonyms",
        :opposites => "Opposites",
        :found_in => "Found In"
      ),
      Item.create!(
        :key => 2,
        :word => "Word",
        :reading => "Reading",
        :meaning => "Meaning",
        :notes => "Notes",
        :synonyms => "Synonyms",
        :opposites => "Opposites",
        :found_in => "Found In"
      )
    ])
  end

  it "renders a list of items" do
    render
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => "Word".to_s, :count => 2
    assert_select "tr>td", :text => "Reading".to_s, :count => 2
    assert_select "tr>td", :text => "Meaning".to_s, :count => 2
    assert_select "tr>td", :text => "Notes".to_s, :count => 2
    assert_select "tr>td", :text => "Synonyms".to_s, :count => 2
    assert_select "tr>td", :text => "Opposites".to_s, :count => 2
    assert_select "tr>td", :text => "Found In".to_s, :count => 2
  end
end
