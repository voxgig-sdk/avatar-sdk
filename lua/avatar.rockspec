package = "voxgig-sdk-avatar"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/avatar-sdk.git"
}
description = {
  summary = "Avatar SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["avatar_sdk"] = "avatar_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
