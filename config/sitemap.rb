# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = "http://busensei.com"

SitemapGenerator::Sitemap.create do
  I18n.available_locales.each do |locale|
    add "/#{locale}",               :changefreq => "daily",  :priority => 1.0

    add "/#{locale}/vocabulary",    :changefreq => "weekly", :priority => 0.9
    add "/#{locale}/proverbs",      :changefreq => "weekly", :priority => 0.9
    add "/#{locale}/idioms",        :changefreq => "weekly", :priority => 0.9
    add "/#{locale}/ateji",         :changefreq => "weekly", :priority => 0.9
    add "/#{locale}/items",         :changefreq => "weekly", :priority => 0.8

    add "/#{locale}/articles", :changefreq => "weekly", :priority => 0.7
    add "/#{locale}/videos",        :changefreq => "weekly", :priority => 0.7
    add "/#{locale}/about",       :changefreq => "weekly", :priority => 0.7

    Item.find_each do |i|
      add "/#{locale}/items/#{i.slug}", :changefreq => "monthly", :priority => 0.6
    end
    Article.find_each do |i|
      add "/#{locale}/articles/#{i.id}", :changefreq => "monthly", :priority => 0.5
    end
    Video.find_each do |i|
      add "/#{locale}/videos/#{i.id}", :changefreq => "monthly", :priority => 0.4
    end
  end
end
