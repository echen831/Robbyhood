class CreateWatchLists < ActiveRecord::Migration[5.2]
  def change
    create_table :watch_lists do |t|
      t.string :name
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :watch_lists, :user_id
  end
end
