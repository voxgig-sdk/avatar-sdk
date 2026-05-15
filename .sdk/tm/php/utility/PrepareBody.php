<?php
declare(strict_types=1);

// Avatar SDK utility: prepare_body

class AvatarPrepareBody
{
    public static function call(AvatarContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
