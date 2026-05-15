<?php
declare(strict_types=1);

// Avatar SDK utility: result_body

class AvatarResultBody
{
    public static function call(AvatarContext $ctx): ?AvatarResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
