class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :total_working_time, :total_working_done

end
