fx_version 'cerulean'

game 'gta5'

author 'smokey.nerd'

lua54 'yes'

shared_script 'config.lua'

client_scripts {
    '@PolyZone/client.lua',
    '@PolyZone/CircleZone.lua',
    'client/rpc.lua',
    'client/main.lua'
}

server_scripts {
    '@mysql-async/lib/MySQL.lua',
    'server/rpc.lua',
    'server/main.lua',
}

ui_page 'interface/index.html'

files {'interface/*'}
