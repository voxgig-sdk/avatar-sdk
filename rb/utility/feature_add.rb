# Avatar SDK utility: feature_add
module AvatarUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
