package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCharacterEntityFunc func(client *AvatarSDK, entopts map[string]any) AvatarEntity

var NewEpisodeEntityFunc func(client *AvatarSDK, entopts map[string]any) AvatarEntity

var NewQuestionEntityFunc func(client *AvatarSDK, entopts map[string]any) AvatarEntity

