module Api
  class MyTasksController < ApiController
    before_action :set_admin

    def index
      tasks = Task.where(assignee: @admin).order(created_at: 'DESC')
      render json: tasks
    end

    private

    def set_admin
      @admin = Admin.find(params[:admin_id])
    end
  end
end
