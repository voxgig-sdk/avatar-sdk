-- Avatar SDK error

local AvatarError = {}
AvatarError.__index = AvatarError


function AvatarError.new(code, msg, ctx)
  local self = setmetatable({}, AvatarError)
  self.is_sdk_error = true
  self.sdk = "Avatar"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function AvatarError:error()
  return self.msg
end


function AvatarError:__tostring()
  return self.msg
end


return AvatarError
