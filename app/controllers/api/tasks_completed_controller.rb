module Api
  class TasksCompletedController < ApiController
    before_action :set_task

    def create
      if @task.complete
        render json: @task
      else
        render json: @task.errors, status: :unprocessable_entity
      end
    end

    private

    def set_task
      @task = Task.find(params[:task_id])
    end
  end
end
