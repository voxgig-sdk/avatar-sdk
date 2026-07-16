<?php
declare(strict_types=1);

// Avatar SDK base feature

class AvatarBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(AvatarContext $ctx, array $options): void {}
    public function PostConstruct(AvatarContext $ctx): void {}
    public function PostConstructEntity(AvatarContext $ctx): void {}
    public function SetData(AvatarContext $ctx): void {}
    public function GetData(AvatarContext $ctx): void {}
    public function GetMatch(AvatarContext $ctx): void {}
    public function SetMatch(AvatarContext $ctx): void {}
    public function PrePoint(AvatarContext $ctx): void {}
    public function PreSpec(AvatarContext $ctx): void {}
    public function PreRequest(AvatarContext $ctx): void {}
    public function PreResponse(AvatarContext $ctx): void {}
    public function PreResult(AvatarContext $ctx): void {}
    public function PreDone(AvatarContext $ctx): void {}
    public function PreUnexpected(AvatarContext $ctx): void {}
}
