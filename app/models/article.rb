class Article < ApplicationRecord
  has_attached_file :image, styles: {
    small: '100x100>',
    medium: '500x500>',
    large: '1000x1000>'
  }

  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
