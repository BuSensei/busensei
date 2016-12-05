class WelcomesController < ApplicationController
  def index
    @vocabulary = Item.search("category: 'Vocab'").order('impressions_count DESC').take(4)
    @proverbs = Item.search("category: 'kotowaza'").order('impressions_count DESC').take(4)
    @idioms = Item.search("category: 'yjjg'").order('impressions_count DESC').take(4)
    @ateji = Item.search("category: 'ateji'").order('impressions_count DESC').take(4)
    @videos = Video.last(1)
    @articles = Article.last(1)
  end
end
