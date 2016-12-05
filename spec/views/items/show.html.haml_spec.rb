require 'rails_helper'

RSpec.describe "items/show", type: :view do
  before(:each) do
    @item = assign(:item, Item.create!(
      :key => 2,
      :word => "Word",
      :reading => "Reading",
      :meaning => "Meaning",
      :notes => "Notes",
      :synonyms => "Synonyms",
      :opposites => "Opposites",
      :found_in => "Found In"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/2/)
    expect(rendered).to match(/Word/)
    expect(rendered).to match(/Reading/)
    expect(rendered).to match(/Meaning/)
    expect(rendered).to match(/Notes/)
    expect(rendered).to match(/Synonyms/)
    expect(rendered).to match(/Opposites/)
    expect(rendered).to match(/Found In/)
  end
end
