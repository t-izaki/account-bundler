module Api
  class SystemUsersMultiAccountController < ApiController
    before_action :set_system_user
    before_action :set_systems, only: %i[create destroy]

    def show
      @accounts = @system_user.accounts
      render json: @accounts
    end

    def create
      # TODO: 例外処理
      @tasks = []
      ActiveRecord::Base.transaction do
        @systems.each do |system|
          @tasks << Task.account_create_request!(system_id: system.id, system_user_id: @system_user.id, assignee_id: system.admin_id, author_id: current_admin.id)
        end
      end

      render json: @tasks
    end

    def destroy
      @tasks = []
      # TODO: 例外処理
      ActiveRecord::Base.transaction do
        @systems.each do |system|
          @tasks << Task.account_destroy_request!(system_id: system.id, system_user_id: @system_user.id, assignee_id: system.admin_id, author_id: current_admin.id)
        end
      end

      render json: @tasks
    end

    private

    def set_system_user
      @system_user = SystemUser.find(params[:system_user_id])
    end

    def set_systems
      @systems = System.where(id: params[:system_ids])
    end
  end
end
