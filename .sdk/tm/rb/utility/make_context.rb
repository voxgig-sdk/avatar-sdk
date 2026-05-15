# Avatar SDK utility: make_context
require_relative '../core/context'
module AvatarUtilities
  MakeContext = ->(ctxmap, basectx) {
    AvatarContext.new(ctxmap, basectx)
  }
end
