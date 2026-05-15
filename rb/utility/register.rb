# Avatar SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

AvatarUtility.registrar = ->(u) {
  u.clean = AvatarUtilities::Clean
  u.done = AvatarUtilities::Done
  u.make_error = AvatarUtilities::MakeError
  u.feature_add = AvatarUtilities::FeatureAdd
  u.feature_hook = AvatarUtilities::FeatureHook
  u.feature_init = AvatarUtilities::FeatureInit
  u.fetcher = AvatarUtilities::Fetcher
  u.make_fetch_def = AvatarUtilities::MakeFetchDef
  u.make_context = AvatarUtilities::MakeContext
  u.make_options = AvatarUtilities::MakeOptions
  u.make_request = AvatarUtilities::MakeRequest
  u.make_response = AvatarUtilities::MakeResponse
  u.make_result = AvatarUtilities::MakeResult
  u.make_point = AvatarUtilities::MakePoint
  u.make_spec = AvatarUtilities::MakeSpec
  u.make_url = AvatarUtilities::MakeUrl
  u.param = AvatarUtilities::Param
  u.prepare_auth = AvatarUtilities::PrepareAuth
  u.prepare_body = AvatarUtilities::PrepareBody
  u.prepare_headers = AvatarUtilities::PrepareHeaders
  u.prepare_method = AvatarUtilities::PrepareMethod
  u.prepare_params = AvatarUtilities::PrepareParams
  u.prepare_path = AvatarUtilities::PreparePath
  u.prepare_query = AvatarUtilities::PrepareQuery
  u.result_basic = AvatarUtilities::ResultBasic
  u.result_body = AvatarUtilities::ResultBody
  u.result_headers = AvatarUtilities::ResultHeaders
  u.transform_request = AvatarUtilities::TransformRequest
  u.transform_response = AvatarUtilities::TransformResponse
}
