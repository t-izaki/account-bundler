module Api
  class SystemUserCategoriesController < ApiController
    def index
      @system_user_categories = SystemUserCategory.all

      render json: @system_user_categories
    end
  end
end
