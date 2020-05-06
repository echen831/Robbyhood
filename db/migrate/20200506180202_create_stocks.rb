class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :name, null: false
      t.string :symbol, null: false
      t.integer :exchange_id, null: false

      t.timestamps
    end

    add_index :stocks, :exchange_id
    add_index :stocks, :symbol, unique: true
  end
end
