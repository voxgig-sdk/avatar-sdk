<?php
declare(strict_types=1);

// Avatar SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class AvatarMakeContext
{
    public static function call(array $ctxmap, ?AvatarContext $basectx): AvatarContext
    {
        return new AvatarContext($ctxmap, $basectx);
    }
}
