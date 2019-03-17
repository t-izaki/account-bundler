# == Route Map
#
#                    Prefix Verb   URI Pattern                     Controller#Action
#         new_admin_session GET    /admins/sign_in(.:format)       devise/sessions#new
#             admin_session POST   /admins/sign_in(.:format)       devise/sessions#create
#     destroy_admin_session DELETE /admins/sign_out(.:format)      devise/sessions#destroy
# cancel_admin_registration GET    /admins/cancel(.:format)        devise/registrations#cancel
#    new_admin_registration GET    /admins/sign_up(.:format)       devise/registrations#new
#   edit_admin_registration GET    /admins/edit(.:format)          devise/registrations#edit
#        admin_registration PATCH  /admins(.:format)               devise/registrations#update
#                           PUT    /admins(.:format)               devise/registrations#update
#                           DELETE /admins(.:format)               devise/registrations#destroy
#                           POST   /admins(.:format)               devise/registrations#create
#                      root GET    /                               home#index
#                api_admins GET    /api/admins(.:format)           api/admins#index {:format=>/json/}
#               api_systems GET    /api/systems(.:format)          api/systems#index {:format=>/json/}
#                           POST   /api/systems(.:format)          api/systems#create {:format=>/json/}
#                api_system GET    /api/systems/:id(.:format)      api/systems#show {:format=>/json/}
#                           PATCH  /api/systems/:id(.:format)      api/systems#update {:format=>/json/}
#                           PUT    /api/systems/:id(.:format)      api/systems#update {:format=>/json/}
#                           DELETE /api/systems/:id(.:format)      api/systems#destroy {:format=>/json/}
#          api_system_users GET    /api/system_users(.:format)     api/system_users#index {:format=>/json/}
#                           POST   /api/system_users(.:format)     api/system_users#create {:format=>/json/}
#           api_system_user GET    /api/system_users/:id(.:format) api/system_users#show {:format=>/json/}
#                           PATCH  /api/system_users/:id(.:format) api/system_users#update {:format=>/json/}
#                           PUT    /api/system_users/:id(.:format) api/system_users#update {:format=>/json/}
#                           DELETE /api/system_users/:id(.:format) api/system_users#destroy {:format=>/json/}
#                           GET    /*path(.:format)                home#index

Rails.application.routes.draw do
  mount_devise_token_auth_for 'Admin', at: 'api/auth'

  root to: 'home#index'

  namespace :api, format: 'json' do
    resources :admins, only: %i[index] do
      resources :my_tasks, only: %i[index]
    end
    resources :systems, only: %i[index show create update destroy] do
      resource :archive, only: %i[create destroy], controller: 'systems_archive'
    end
    resources :system_users, only: %i[index show create update destroy] do
      resource :archive, only: %i[create destroy], controller: 'system_users_archive'
      resource :multi_accounts, only: %i[show create destroy], controller: 'system_users_multi_account'
    end
    resources :system_user_categories, only: %i[index]
    resources :tasks, only: %i[index destroy] do
      resource :completed, only: %i[create], controller: 'tasks_completed'
      resource :rejected, only: %i[create], controller: 'tasks_rejected'
    end
  end

  # Reactへのフォワーディング
  get '*path', to: 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
