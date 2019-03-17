module Api
  class AdminsController < ApiController
    def index
      @admins = Admin.all
      render json: @admins
    end
  end
end
