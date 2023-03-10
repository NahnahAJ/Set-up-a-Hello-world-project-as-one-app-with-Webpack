Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
    end
  end
  root "greetings#index"

  resources :greetings

  get '/greeting', to: 'greetings#index' 

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
