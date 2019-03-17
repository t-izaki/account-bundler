module Api
  class TasksController < ApiController
    def index
      tasks = Task.all.includes(:assignee, :author, :target_system, :target_system_user).order(created_at: 'DESC')
      render json: tasks
    end

    def destroy
      @tasks = Task.find(params[:id])
      # TODO: 例外処理
      @tasks.destroy
      head :no_content
    end
  end
end
