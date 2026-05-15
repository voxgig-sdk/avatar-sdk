# Avatar SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module AvatarFeatures
  def self.make_feature(name)
    case name
    when "base"
      AvatarBaseFeature.new
    when "test"
      AvatarTestFeature.new
    else
      AvatarBaseFeature.new
    end
  end
end
