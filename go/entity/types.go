// Typed models for the Avatar SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Character is the typed data model for the character entity.
type Character struct {
	Affiliation *string `json:"affiliation,omitempty"`
	Ally *[]any `json:"ally,omitempty"`
	Enemy *[]any `json:"enemy,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	PhotoUrl *string `json:"photo_url,omitempty"`
	Position *string `json:"position,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id int `json:"id"`
}

// CharacterListMatch mirrors the character fields as an all-optional match
// filter (Go analog of Partial<Character>).
type CharacterListMatch struct {
	Affiliation *string `json:"affiliation,omitempty"`
	Ally *[]any `json:"ally,omitempty"`
	Enemy *[]any `json:"enemy,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	PhotoUrl *string `json:"photo_url,omitempty"`
	Position *string `json:"position,omitempty"`
}

// Episode is the typed data model for the episode entity.
type Episode struct {
	AirDate *string `json:"air_date,omitempty"`
	Director *string `json:"director,omitempty"`
	EpisodeNum *int `json:"episode_num,omitempty"`
	Id *int `json:"id,omitempty"`
	Season *int `json:"season,omitempty"`
	Title *string `json:"title,omitempty"`
	Writer *string `json:"writer,omitempty"`
}

// EpisodeLoadMatch is the typed request payload for Episode.LoadTyped.
type EpisodeLoadMatch struct {
	Id int `json:"id"`
}

// EpisodeListMatch mirrors the episode fields as an all-optional match
// filter (Go analog of Partial<Episode>).
type EpisodeListMatch struct {
	AirDate *string `json:"air_date,omitempty"`
	Director *string `json:"director,omitempty"`
	EpisodeNum *int `json:"episode_num,omitempty"`
	Id *int `json:"id,omitempty"`
	Season *int `json:"season,omitempty"`
	Title *string `json:"title,omitempty"`
	Writer *string `json:"writer,omitempty"`
}

// Question is the typed data model for the question entity.
type Question struct {
	Answer *string `json:"answer,omitempty"`
	Difficulty *string `json:"difficulty,omitempty"`
	Id *int `json:"id,omitempty"`
	Question *string `json:"question,omitempty"`
}

// QuestionLoadMatch is the typed request payload for Question.LoadTyped.
type QuestionLoadMatch struct {
	Id int `json:"id"`
}

// QuestionListMatch mirrors the question fields as an all-optional match
// filter (Go analog of Partial<Question>).
type QuestionListMatch struct {
	Answer *string `json:"answer,omitempty"`
	Difficulty *string `json:"difficulty,omitempty"`
	Id *int `json:"id,omitempty"`
	Question *string `json:"question,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
