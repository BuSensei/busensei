class Item < ApplicationRecord
  is_impressionable counter_cache: true

  include SearchCop
  search_scope :search do
    attributes :category
  end

  def to_param
    self.slug
    self.id
  end
  before_save :create_slug

  private
    def create_slug
      self.slug = self.word.downcase.strip.gsub(' ', '-')
    end
end
