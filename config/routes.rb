Rails.application.routes.draw do
  resources :watch_list_items
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: :create
    resources :transactions, only: [:create, :update, :destroy]
    resources :stocks, only: [:show, :index]
    resources :watch_lists, only: [:index, :show, :create, :destroy]
    resources :watch_list_items, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
  
end
