Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :playlists, only: [:create, :index, :update, :show, :destroy]

  end 
  

  root "static_pages#root"
end
