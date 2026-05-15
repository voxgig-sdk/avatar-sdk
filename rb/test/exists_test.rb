# Avatar SDK exists test

require "minitest/autorun"
require_relative "../Avatar_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = AvatarSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
