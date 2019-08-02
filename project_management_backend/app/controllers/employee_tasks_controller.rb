class EmployeeTasksController < ApplicationController
  def update
    # debugger
    current_task = Task.find_by(id: params[:id])
    current_employee = Employee.find_by(username: user_atm[:username])
    et = current_task.employee_tasks.find_by(employee_id: current_employee.id)
    et.update(hours_done: params[:hours_done])
    # debugger
    current_task.total_working_done = current_task.employee_tasks.map{|employeetask| employeetask.hours_done.to_f}.sum
    # debugger
    current_task.save
    render json: current_employee, include: "**"
  end
end
