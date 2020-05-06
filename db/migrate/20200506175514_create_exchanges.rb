class CreateExchanges < ActiveRecord::Migration[5.2]
  def change
    create_table :exchanges do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :exchanges, :name, unique: true
  end
end
