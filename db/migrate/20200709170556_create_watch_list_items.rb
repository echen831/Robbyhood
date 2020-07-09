class CreateWatchListItems < ActiveRecord::Migration[5.2]
  def change
    create_table :watch_list_items do |t|
      t.string :user_id, null: false
      t.string :stock_id, null: false 

      t.timestamps
    end

    add_index :watch_list_items, :user_id
    add_index :watch_list_items, :stock_id
  end
end
