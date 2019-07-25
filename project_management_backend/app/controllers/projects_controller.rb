class ProjectsController < ApplicationController
  def index
    projects = Project.all
    render json: projects
  end
  def show
    project = Project.find_by(id: params[:id])
    render json: project.to_json(include: [:manager, :tasks])
  end
end
