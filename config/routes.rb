Rails.application.routes.draw do
  # Scope manages languages
  scope '/:locale', locale: /#{I18n.available_locales.join('|')}/ do
    # Only for logged-in users
    devise_for :users
    authenticate :user do
      resources :videos, except: [:index, :show]
      resources :articles, except: [:index, :show]
      resources :items, except: [:index, :show]
    end

    # Public stuff
    resources :videos, only: [:index, :show]
    resources :articles, only: [:index, :show]
    resources :items, only: [:index, :show]
    get :vocabulary, to: 'items#vocabulary'
    get :proverbs, to: 'items#proverbs'
    get :idioms, to: 'items#idioms'
    get :ateji, to: 'items#ateji'
    get :about, to: 'welcomes#about'

    # Main page
    root to: 'welcomes#index'

    # All other routes are an error, they go home
    get '*path', to: 'welcomes#index'
  end

  # Redirect to language
  root to: redirect("/#{I18n.default_locale}", status: 302), as: :redirected_root
  get '/*path', to: redirect("/#{I18n.default_locale}/%{path}", status: 302), constraints: { path: /(?!(#{I18n.available_locales.join('|')})\/).*/ }, format: false
end
