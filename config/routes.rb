Rails.application.routes.draw do
  devise_for :users, controllers: {
    :omniauth_callbacks => "users/omniauth_callbacks"
  }

  root to: "sessions/playlist_builder#new"
end
