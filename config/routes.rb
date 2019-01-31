Rails.application.routes.draw do
  # User Accounts
  devise_for :users, controllers: {
    :omniauth_callbacks => "users/omniauth_callbacks"
  }

  root to: "sessions/playlist_builder#new"

  namespace :sessions do
    resources :festivals, only: [:index, :show]
  end
end
