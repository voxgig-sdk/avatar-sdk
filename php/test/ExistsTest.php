<?php
declare(strict_types=1);

// Avatar SDK exists test

require_once __DIR__ . '/../avatar_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = AvatarSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
