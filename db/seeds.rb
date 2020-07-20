# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

stocks = [
    { name: 'APPLE', symbol: 'aapl' },
    { name: 'AGILENT', symbol: 'a' },
    { name: 'ALIBABA', symbol: 'baba'},
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
    { name: 'INTEL', symbol: 'intc' },
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
    { name: "MACY'S", symbol: 'm' },
    { name: 'MASTERCARD', symbol: 'ma' },
    { name: 'MCDONALD', symbol: 'mac' },
    { name: 'MICROSOFT', symbol: 'msft' },
    { name: 'NETFLIX', symbol: 'nflx' },
    { name: 'NVIDIA', symbol: 'nvda' },
    { name: 'NIKE', symbol: 'nke' },
    { name: 'ORACLE', symbol: 'orcl' },
    { name: 'PAYPAL', symbol: 'pypl' },
    { name: 'PFIZER', symbol: 'pfe' },
    { name: 'QUALCOM', symbol: 'qcom' },
    { name: 'QUIDEL', symbol: 'qdel' },
    { name: 'RYDER', symbol: 'r' },
    { name: 'ROKU', symbol: 'roku' },
    { name: 'ROYAL CARIBBEAN', symbol: 'rcl' },
    { name: 'REGENERON', symbol: 'regn' },
    { name: 'SHOPIFY', symbol: 'shop' },
    { name: 'SQUARE', symbol: 'sq' },
    { name: 'SPOTIFY', symbol: 'spot' },
    { name: 'STARBUCKS', symbol: 'sbux' },
    { name: 'SNAP', symbol: 'snap' },
    { name: 'T-MOBILE', symbol: 'tmus' },
    { name: 'UNITED AIRLINES', symbol: 'ual' },
    { name: 'UNITEDHEALTH', symbol: 'unh' },
    { name: 'UBER', symbol: 'uber' },
    { name: 'UNION PACIFIC', symbol: 'unp' },
    { name: 'VISA', symbol: 'v' },
    { name: 'VANGUARD', symbol: 'voo' },
    { name: 'VERIZON', symbol: 'vz' },
    { name: 'VAXART', symbol: 'vxrt' },
    { name: 'WAYFAIR', symbol: 'w' },
    { name: 'WORKHORSE', symbol: 'wkhs' },
    { name: 'WALMART', symbol: 'wmt' },
    { name: 'WELLS FARGO', symbol: 'wfc' },
    { name: 'WYNN RESORTS', symbol: 'wynn' },
    { name: 'UNITED STATES STEEL', symbol: 'x' },
    { name: 'YUM!', symbol: 'yum' },
    { name: 'ZILLOW', symbol: 'z'}
]

Stock.destroy_all
User.destroy_all

User.create(email: 'demo@hotmail.com', password: '123456', username: 'demoUser', buying_power: 1000)

stocks.each do |stock| 
    Stock.create(name: stock[:name], symbol: stock[:symbol])
end


