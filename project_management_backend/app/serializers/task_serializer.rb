class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :total_working_time, :total_working_done
  has_many :employee_tasks
end
