module Api
  class SystemsArchiveController < ApiController
    before_action :set_system

    def create
      if @system.archive
        render json: @system
      else
        render json: @system.errors, status: :unprocessable_entity
      end
    end

    def destroy
      if @system.rearchive
        render json: @system
      else
        render json: @system.errors, status: :unprocessable_entity
      end
    end

    private

    def set_system
      @system = System.find(params[:system_id])
    end
  end
end
