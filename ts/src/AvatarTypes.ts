// Typed models for the Avatar SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  affiliation?: string
  ally?: any[]
  enemy?: any[]
  id?: number
  name?: string
  photo_url?: string
  position?: string
}

export interface CharacterLoadMatch {
  id: number
}

export type CharacterListMatch = Partial<Character>

export interface Episode {
  air_date?: string
  director?: string
  episode_num?: number
  id?: number
  season?: number
  title?: string
  writer?: string
}

export interface EpisodeLoadMatch {
  id: number
}

export type EpisodeListMatch = Partial<Episode>

export interface Question {
  answer?: string
  difficulty?: string
  id?: number
  question?: string
}

export interface QuestionLoadMatch {
  id: number
}

export type QuestionListMatch = Partial<Question>

