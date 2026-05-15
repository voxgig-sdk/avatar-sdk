<?php
declare(strict_types=1);

// Avatar SDK utility: result_headers

class AvatarResultHeaders
{
    public static function call(AvatarContext $ctx): ?AvatarResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
