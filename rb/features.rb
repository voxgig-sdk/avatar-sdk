# Avatar SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module AvatarFeatures
  def self.make_feature(name)
    case name
    when "base"
      AvatarBaseFeature.new
    when "ratelimit"
      AvatarRatelimitFeature.new
    when "retry"
      AvatarRetryFeature.new
    when "test"
      AvatarTestFeature.new
    when "timeout"
      AvatarTimeoutFeature.new
    else
      AvatarBaseFeature.new
    end
  end
end
