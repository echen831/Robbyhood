json.array! @stocks do |stock|
    json.symbol stock.symbol
    json.name stock.name
end
