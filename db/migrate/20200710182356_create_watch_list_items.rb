class CreateWatchListItems < ActiveRecord::Migration[5.2]
  def change
    create_table :watch_list_items do |t|
      t.integer :stock_id, null: false
      t.integer :watch_list_id, null: false
      t.timestamps
    end

    add_index :watch_list_items, [:watch_list_id, :stock_id], unique: true
  end
end
