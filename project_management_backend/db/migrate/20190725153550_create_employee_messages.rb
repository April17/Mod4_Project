class CreateEmployeeMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :employee_messages do |t|

      t.timestamps
    end
  end
end
