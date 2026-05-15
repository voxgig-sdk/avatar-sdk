<?php
declare(strict_types=1);

// Avatar SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

AvatarUtility::setRegistrar(function (AvatarUtility $u): void {
    $u->clean = [AvatarClean::class, 'call'];
    $u->done = [AvatarDone::class, 'call'];
    $u->make_error = [AvatarMakeError::class, 'call'];
    $u->feature_add = [AvatarFeatureAdd::class, 'call'];
    $u->feature_hook = [AvatarFeatureHook::class, 'call'];
    $u->feature_init = [AvatarFeatureInit::class, 'call'];
    $u->fetcher = [AvatarFetcher::class, 'call'];
    $u->make_fetch_def = [AvatarMakeFetchDef::class, 'call'];
    $u->make_context = [AvatarMakeContext::class, 'call'];
    $u->make_options = [AvatarMakeOptions::class, 'call'];
    $u->make_request = [AvatarMakeRequest::class, 'call'];
    $u->make_response = [AvatarMakeResponse::class, 'call'];
    $u->make_result = [AvatarMakeResult::class, 'call'];
    $u->make_point = [AvatarMakePoint::class, 'call'];
    $u->make_spec = [AvatarMakeSpec::class, 'call'];
    $u->make_url = [AvatarMakeUrl::class, 'call'];
    $u->param = [AvatarParam::class, 'call'];
    $u->prepare_auth = [AvatarPrepareAuth::class, 'call'];
    $u->prepare_body = [AvatarPrepareBody::class, 'call'];
    $u->prepare_headers = [AvatarPrepareHeaders::class, 'call'];
    $u->prepare_method = [AvatarPrepareMethod::class, 'call'];
    $u->prepare_params = [AvatarPrepareParams::class, 'call'];
    $u->prepare_path = [AvatarPreparePath::class, 'call'];
    $u->prepare_query = [AvatarPrepareQuery::class, 'call'];
    $u->result_basic = [AvatarResultBasic::class, 'call'];
    $u->result_body = [AvatarResultBody::class, 'call'];
    $u->result_headers = [AvatarResultHeaders::class, 'call'];
    $u->transform_request = [AvatarTransformRequest::class, 'call'];
    $u->transform_response = [AvatarTransformResponse::class, 'call'];
});
