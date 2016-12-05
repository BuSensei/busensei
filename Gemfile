source 'https://rubygems.org'

# Bundler
gem 'bundler', '>= 1.8.4'

# Rails
gem 'rails', '~> 5.0.0' # Ruby on Rails
gem 'puma', '~> 3.6.0' # Faster local server
gem 'rails-i18n', '~> 5.0.0' # Show different languages
gem 'pg', '~> 0.19.0' # Postgres databases are cool
gem 'turbolinks', '~> 5.0.0' # Only reload page content

# Authentication
gem 'devise', '~> 4.2.0' # Users! Everywhere!
gem 'devise-i18n', '~> 1.1.0' # Translations for users

# Precompilers
gem 'haml-rails', '~> 0.9.0' # HAML to HTML
gem 'sass-rails', '~> 5.0.4' # Sass to CSS
gem 'jbuilder', '~> 2.6.1' # JSON
gem 'uglifier', '~> 3.0.4' # Clean outputs

# Forms
gem 'simple_form', '~> 3.3.1' # Unformception

# Alerts
gem 'bootbox-rails', '~> 0.5.0' # Fancy Bootstrap alerts

# Vendor
gem 'jquery-rails', '~> 4.2.1' # jQuery, super handy
gem 'bootstrap', '~> 4.0.0.alpha5' # Bootstrap 4 for layout

# Busensei stuff
gem 'kaminari', '~> 0.17.0' # Pagination
gem 'paperclip', '~> 5.1.0' # Image uploads
gem 'aws-sdk', '~> 2.6.30' # Image uploads from Heroku to Amazon S3
gem 'search_cop' # Search
gem 'sitemap_generator' # Sitemap for SEO
gem 'impressionist' # Viewcount per page

# Bower
source 'https://rails-assets.org' do
  gem 'rails-assets-tether', '>= 1.3.8' # Needed for Bootstrap 4 Tooltips and Popovers
end

# Docs
group :doc do
  gem 'sdoc', '~> 0.4.1'
end

# Development and Testing
group :development, :test do
  gem 'byebug', '~> 9.0.3'
  gem 'rails-controller-testing', git: 'https://github.com/rails/rails-controller-testing' # Needed for RSPEC on controllers
  gem 'rspec-rails', '~> 3.5.0' # Running tests
end

# Development
group :development do
  gem 'web-console', '~> 3.4.0'
  gem 'listen', '~> 3.1.4'
  gem 'spring', '~> 2.0.0'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Testing
group :test do
  gem 'capybara', '~> 2.10.2'
  gem 'database_cleaner', '~> 1.5.2'
  gem 'factory_girl_rails', '~> 4.7.0'
  gem 'launchy', '~> 2.4.3'
  gem 'shoulda-matchers', '~> 3.1.1'
end

group :production do
  gem 'rails_12factor'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby] # For Windows to run dis

# Ruby version
ruby '2.3.1'
