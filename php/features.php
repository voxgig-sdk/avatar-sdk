<?php
declare(strict_types=1);

// Avatar SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class AvatarFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new AvatarBaseFeature();
            case "test":
                return new AvatarTestFeature();
            default:
                return new AvatarBaseFeature();
        }
    }
}
