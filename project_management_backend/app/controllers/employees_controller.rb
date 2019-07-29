class EmployeesController < ApplicationController
  def index
    employees = Employee.all
    render json: employees
  end
  def show
    employee = Employee.find_by(id: params[:id])
    tasks = employee.tasks
    manager = employee.manager
    coworkers = manager.employees.select{|coworker| coworker.id != employee.id}
    render json: {employee: employee, manager: manager, coworkers: coworkers, tasks: tasks, }
  end
end
