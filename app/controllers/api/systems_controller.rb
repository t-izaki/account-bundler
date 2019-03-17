module Api
  class SystemsController < ApiController
    before_action :set_system, only: %i[show update destroy]

    def index
      @systems = System.all.includes(:admin, :accounts, :system_users)

      render json: @systems
    end

    def show
      render json: @system
    end

    def create
      @system = System.new(system_params)

      if @system.save
        render json: @system, status: :created
      else
        render json: @system.errors, status: :unprocessable_entity
      end
    end

    def update
      if @system.update(system_params)
        render json: @system
      else
        render json: @system.errors, status: :unprocessable_entity
      end
    end

    def destroy
      # TODO: エラー処理する
      @system.destroy
      head :no_content
    end

    private

    def set_system
      @system = System.find(params[:id])
    end

    def system_params
      params.require(:system).permit(:name, :url, :use_start_at, :use_end_at, :remark, :admin_id)
    end
  end
end
