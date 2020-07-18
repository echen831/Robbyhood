class AddIndexToWatchListItems < ActiveRecord::Migration[5.2]
  def change
    add_index :watch_list_items, [ :user_id, :stock_id ], unique: true
  end
end
