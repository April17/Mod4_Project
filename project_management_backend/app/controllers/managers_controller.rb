class ManagersController < ApplicationController
  def index
    managers = Manager.all
    render json: managers
  end
  def show
    manager = Manager.find_by(id: params[:id])
    render json: manager, include: "**"
  end
end
