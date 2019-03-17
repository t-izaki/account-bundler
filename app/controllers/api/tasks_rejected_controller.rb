module Api
  class TasksRejectedController < ApiController
    before_action :set_task

    def create
      if @task.reject(reason: params[:reject_reason])
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
