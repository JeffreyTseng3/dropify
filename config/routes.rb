Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    resources :playlists, only: [:create, :index, :update, :show, :destroy] 
    resources :songs, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :playlist_songs, only: [:create, :destroy] do 
      collection do 
        delete 'remove_song'
      end 
    end 

    resources :searches, only: [] do 
      collection do 
        get 'search'
      end 
    end

    resources :follows, only: [:create, :destroy]
    
  end 
  

  root "static_pages#root"
end
