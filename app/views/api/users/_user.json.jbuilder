json.extract! user, :id, :email, :username
json.buying_power user.calculate_buying_power
json.stocks_owned user.stocks_owned
json.stock_prices user.stock_prices
json.wl_items user.wl_items
