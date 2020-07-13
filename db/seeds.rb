# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

stocks = [
    { name: 'AGILENT', symbol: 'a' },
    { name: 'APPLE', symbol: 'aapl' },
    { name: 'AMAZON', symbol: 'amzn' },
    { name: 'AMD', symbol: 'amd' },
    { name: 'AMERICAN AIRLINES', symbol: 'aal' },
    { name: 'AT&T', symbol: 'T' },
    { name: 'BARNES', symbol: 'b' },
    { name: 'BOEING', symbol: 'ba' },
    { name: 'BANK OF AMERICA', symbol: 'bac' },
    { name: 'BEYOND MEAT', symbol: 'bnyd' },
    { name: 'CARNIVAL', symbol: 'ccl' },
    { name: 'CITI GROUP', symbol: 'c' },
    { name: 'CISCO', symbol: 'csco' },
    { name: 'COMCAST', symbol: 'cmcsa' },
    { name: 'DISNEY', symbol: 'dis' },
    { name: 'DELTA AIR LINES', symbol: 'dal' },
    { name: 'DRAFT KINGS', symbol: 'dkng' },
    { name: 'DOCUSIGN', symbol: 'docu' },
    { name: 'EBAY', symbol: 'ebay' },
    { name: 'FORD', symbol: 'f' },
    { name: 'FACEBOOK', symbol: 'fb' },
    { name: 'FEDEX', symbol: 'fdx' },
    { name: 'FASTLY', symbol: 'fsly' },
    { name: 'FISERV', symbol: 'fisv' },
    { name: 'GENPACT', symbol: 'g' },
    { name: 'GOLDMAN SACHS', symbol: 'gs' },
    { name: 'HYATT', symbol: 'h' },
    { name: 'HOME DEPOT', symbol: 'hd' },
    { name: 'HONEYWELL', symbol: 'hon' },
    { name: 'INTEL', symbol: 'i' },
    { name: 'JPMORGAN CHASE', symbol: 'jpm' },
    { name: "JOHNSON & JOHNSON", symbol: 'jnj' },
    { name: 'KELLOG', symbol: 'k' },
    { name: 'KROGER', symbol: 'kr' },
    { name: 'KIMBERLY-CLARK', symbol: 'kmb' },
    { name: "KHOL'S", symbol: 'kss' },
    { name: 'LOEWS', symbol: 'l' },
    { name: "LOEW'S", symbol: 'low' },
    { name: 'LOCKHEAD', symbol: 'lmt' },
    { name: 'LULULEMON', symbol: 'lulu' },
    { name: 'MICROSOFT', symbol: 'msft' },
    { name: 'TESLA', symbol: 'tsla' },
    { name: 'ZILLOW', symbol: 'z'}
]

Stock.destroy_all
User.destroy_all

User.create(email: 'demo@hotmail.com', password: '123456', username: 'demoUser', buying_power: 1000)

stocks.each do |stock| 
    Stock.create(name: stock[:name], symbol: stock[:symbol])
end


