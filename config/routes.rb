Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    resources :playlists, only: [:create, :index, :update, :show, :destroy]
    resources :songs, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
  end 
  

  root "static_pages#root"
end
