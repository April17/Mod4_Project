class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :filtered_tasks
  # has_many :tasks

  def filtered_tasks
    # byebug

    current_employee = Employee.find_by(id: @instance_options[:employee_id])
    self.object.tasks.select{|task| task.employees.include?(current_employee)}
  end
end
