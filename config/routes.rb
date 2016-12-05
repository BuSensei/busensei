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
    get :vocabulary, to: redirect("http://kanjirpg.com/en/vocabulary", status: 302)
    get :proverbs, to: redirect("http://kanjirpg.com/en/proverbs", status: 302)
    get :idioms, to: redirect("http://kanjirpg.com/en/idioms", status: 302)
    get :ateji, to: redirect("http://kanjirpg.com/en/ateji", status: 302)
    get :about, to: redirect("http://kanjirpg.com/en/about", status: 302)

    # Main page
    root to: 'welcomes#index'

    # All other routes are an error, they go home
    get '*path', to: redirect("http://kanjirpg.com/en", status: 302)
  end

  # Redirect to language
  root to: redirect("/#{I18n.default_locale}", status: 302), as: :redirected_root
  get '/*path', to: redirect("/#{I18n.default_locale}/%{path}", status: 302), constraints: { path: /(?!(#{I18n.available_locales.join('|')})\/).*/ }, format: false
end
