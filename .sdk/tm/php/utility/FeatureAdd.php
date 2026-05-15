<?php
declare(strict_types=1);

// Avatar SDK utility: feature_add

class AvatarFeatureAdd
{
    public static function call(AvatarContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
