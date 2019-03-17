module Api
  class SystemUsersArchiveController < ApiController
    before_action :set_system_user

    def create
      if @system_user.archive
        render json: @system_user
      else
        render json: @system_user.errors, status: :unprocessable_entity
      end
    end

    def destroy
      if @system_user.rearchive
        render json: @system_user
      else
        render json: @system_user.errors, status: :unprocessable_entity
      end
    end

    private

    def set_system_user
      @system_user = SystemUser.find(params[:system_user_id])
    end
  end
end
