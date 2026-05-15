package voxgigavatarsdk

import (
	"github.com/voxgig-sdk/avatar-sdk/core"
	"github.com/voxgig-sdk/avatar-sdk/entity"
	"github.com/voxgig-sdk/avatar-sdk/feature"
	_ "github.com/voxgig-sdk/avatar-sdk/utility"
)

// Type aliases preserve external API.
type AvatarSDK = core.AvatarSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type AvatarEntity = core.AvatarEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type AvatarError = core.AvatarError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCharacterEntityFunc = func(client *core.AvatarSDK, entopts map[string]any) core.AvatarEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
	core.NewEpisodeEntityFunc = func(client *core.AvatarSDK, entopts map[string]any) core.AvatarEntity {
		return entity.NewEpisodeEntity(client, entopts)
	}
	core.NewQuestionEntityFunc = func(client *core.AvatarSDK, entopts map[string]any) core.AvatarEntity {
		return entity.NewQuestionEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewAvatarSDK = core.NewAvatarSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
