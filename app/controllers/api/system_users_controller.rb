module Api
  class SystemUsersController < ApiController
    before_action :set_system_user, only: %i[show update destroy]

    def index
      @system_users = SystemUser.all

      render json: @system_users
    end

    def show
      render json: @system_user
    end

    def create
      @system_user = SystemUser.new(system_user_params)

      if @system_user.save
        render json: @system_user, status: :created
      else
        render json: @system_user.errors, status: :unprocessable_entity
      end
    end

    def update
      if @system_user.update(system_user_params)
        render json: @system_user
      else
        render json: @system_user.errors, status: :unprocessable_entity
      end
    end

    def destroy
      # TODO: エラー処理する
      @system_user.destroy
      head :no_content
    end

    private

    def set_system_user
      @system_user = SystemUser.find(params[:id])
    end

    def system_user_params
      params.permit(:name, :email, :joined_at, :retired_at, :system_user_category_id)
    end
  end
end
