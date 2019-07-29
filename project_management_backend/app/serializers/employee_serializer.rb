class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :coworkers
  belongs_to :manager
end
