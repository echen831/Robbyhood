class AddUserIdToWatchListItems < ActiveRecord::Migration[5.2]
  def change
    add_column :watch_list_items, :user_id, :integer, null: false
    remove_column :watch_list_items, :watch_list_id 
  end
end
