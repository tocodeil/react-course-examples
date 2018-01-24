class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :favorite_color
      t.boolean :employed
      t.text :notes

      t.timestamps
    end
  end
end
