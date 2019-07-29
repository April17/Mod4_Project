class EmployeesController < ApplicationController
  def index
    employees = Employee.all
    render json: employees
  end

  def show
    employee = Employee.find_by(id: params[:id])
    # manager = employee.manager
    # projects = manager.projects
    # projects = projects.each do |project|
    #   {project: project.tasks.select{|task| task.employees.include?(employee)}}
    # end
    render json: employee, include: "**"
  end
end
