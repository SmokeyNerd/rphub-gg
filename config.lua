Config = {}

Config["HUBCommand"] = "rp"

Config["WebsiteLink"] = "SERVERID" -- i.e https://rphub.gg/SERVERID -- Replace with your servers SERVER ID from RpHUB.gg

Config["VisualBlip"] = {
    ['Coords'] = vector3(-513.6719, -702.7393, 44.034713),
}

Config["SQLWrapper"] = "mysql-async" -- Your sql wrapper | mysql-async / oxmysql / ghmattimysql

Config["CoreSettings"]  = {
    ["Core"] = "qbcore", -- Your core | qbcore, esx,
    ["QBCore"] = {
        ["QBCoreVersion"] = "new", -- new = using exports | old = using events
        ["QBCoreExport"] = exports['qb-core']:GetCoreObject(), -- If you are using old qbcore version just remove this line
        ["QBUSTrigger"] = "QBCore:GetObject",
        ["Players_Table"] = "players",
        ["OwnedVehicles_Table"] = "player_vehicles"
    }
}
