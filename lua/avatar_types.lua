-- Typed models for the Avatar SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field affiliation? string
---@field allies? table
---@field enemies? table
---@field id? number
---@field name? string
---@field photoUrl? string
---@field position? string

---@class CharacterLoadMatch
---@field id number

---@class CharacterListMatch
---@field affiliation? string
---@field allies? table
---@field enemies? table
---@field id? number
---@field name? string
---@field photoUrl? string
---@field position? string

---@class Episode
---@field airDate? string
---@field director? string
---@field episodeNum? number
---@field id? number
---@field season? number
---@field title? string
---@field writer? string

---@class EpisodeLoadMatch
---@field id number

---@class EpisodeListMatch
---@field airDate? string
---@field director? string
---@field episodeNum? number
---@field id? number
---@field season? number
---@field title? string
---@field writer? string

---@class Question
---@field answer? string
---@field difficulty? string
---@field id? number
---@field question? string

---@class QuestionLoadMatch
---@field id number

---@class QuestionListMatch
---@field answer? string
---@field difficulty? string
---@field id? number
---@field question? string

local M = {}

return M
