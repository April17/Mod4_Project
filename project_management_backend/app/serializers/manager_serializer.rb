class ManagerSerializer < ActiveModel::Serializer
  attributes :id, :name, :quote, :employees
  has_many :projects
end
