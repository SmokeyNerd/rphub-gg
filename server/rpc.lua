local res, promises, functions, callIden = GetCurrentResourceName(), {}, {}, 0

HUB = {}

HUB.register = function(name, func)
    functions[name] = func
end

HUB.remove = function(name)
    functions[name] = nil
end

paramPacker = function(...)
    local params, pack = {...}, {}
    for i = 1, 15, 1 do
        pack[i] = {param = params[i]}
    end
    return pack
end

paramUnpacker = function(params, index)
    local idx = index or 1
    if idx <= #params then
        return params[idx]['param'], paramUnpacker(params, idx + 1)
    end
end

unpacker = function(params, index)
    local idx = index or 1
    if idx <= 15 then return params[idx]['param'], unpacker(params, idx + 1) end
end
