# frozen_string_literal: true

# Typed models for the Avatar SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Character entity data model.
#
# @!attribute [rw] affiliation
#   @return [String, nil]
#
# @!attribute [rw] ally
#   @return [Array, nil]
#
# @!attribute [rw] enemy
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] photo_url
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [String, nil]
Character = Struct.new(
  :affiliation,
  :ally,
  :enemy,
  :id,
  :name,
  :photo_url,
  :position,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [Integer]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Character#list (any subset of Character fields).
#
# @!attribute [rw] affiliation
#   @return [String, nil]
#
# @!attribute [rw] ally
#   @return [Array, nil]
#
# @!attribute [rw] enemy
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] photo_url
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [String, nil]
CharacterListMatch = Struct.new(
  :affiliation,
  :ally,
  :enemy,
  :id,
  :name,
  :photo_url,
  :position,
  keyword_init: true
)

# Episode entity data model.
#
# @!attribute [rw] air_date
#   @return [String, nil]
#
# @!attribute [rw] director
#   @return [String, nil]
#
# @!attribute [rw] episode_num
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] season
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] writer
#   @return [String, nil]
Episode = Struct.new(
  :air_date,
  :director,
  :episode_num,
  :id,
  :season,
  :title,
  :writer,
  keyword_init: true
)

# Request payload for Episode#load.
#
# @!attribute [rw] id
#   @return [Integer]
EpisodeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Episode#list (any subset of Episode fields).
#
# @!attribute [rw] air_date
#   @return [String, nil]
#
# @!attribute [rw] director
#   @return [String, nil]
#
# @!attribute [rw] episode_num
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] season
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] writer
#   @return [String, nil]
EpisodeListMatch = Struct.new(
  :air_date,
  :director,
  :episode_num,
  :id,
  :season,
  :title,
  :writer,
  keyword_init: true
)

# Question entity data model.
#
# @!attribute [rw] answer
#   @return [String, nil]
#
# @!attribute [rw] difficulty
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] question
#   @return [String, nil]
Question = Struct.new(
  :answer,
  :difficulty,
  :id,
  :question,
  keyword_init: true
)

# Request payload for Question#load.
#
# @!attribute [rw] id
#   @return [Integer]
QuestionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Question#list (any subset of Question fields).
#
# @!attribute [rw] answer
#   @return [String, nil]
#
# @!attribute [rw] difficulty
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] question
#   @return [String, nil]
QuestionListMatch = Struct.new(
  :answer,
  :difficulty,
  :id,
  :question,
  keyword_init: true
)

