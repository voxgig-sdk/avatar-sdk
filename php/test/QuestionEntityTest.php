<?php
declare(strict_types=1);

// Question entity test

require_once __DIR__ . '/../avatar_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class QuestionEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = AvatarSDK::test(null, null);
        $ent = $testsdk->Question(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = question_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "question." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set AVATAR_TEST_QUESTION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $question_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.question")));
        $question_ref01_data = null;
        if (count($question_ref01_data_raw) > 0) {
            $question_ref01_data = Helpers::to_map($question_ref01_data_raw[0][1]);
        }

        // LIST
        $question_ref01_ent = $client->Question(null);
        $question_ref01_match = [];

        [$question_ref01_list_result, $err] = $question_ref01_ent->list($question_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($question_ref01_list_result);

        // LOAD
        $question_ref01_match_dt0 = [
            "id" => $question_ref01_data["id"],
        ];
        [$question_ref01_data_dt0_loaded, $err] = $question_ref01_ent->load($question_ref01_match_dt0, null);
        $this->assertNull($err);
        $question_ref01_data_dt0_load_result = Helpers::to_map($question_ref01_data_dt0_loaded);
        $this->assertNotNull($question_ref01_data_dt0_load_result);
        $this->assertEquals($question_ref01_data_dt0_load_result["id"], $question_ref01_data["id"]);

    }
}

function question_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/question/QuestionTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = AvatarSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["question01", "question02", "question03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("AVATAR_TEST_QUESTION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "AVATAR_TEST_QUESTION_ENTID" => $idmap,
        "AVATAR_TEST_LIVE" => "FALSE",
        "AVATAR_TEST_EXPLAIN" => "FALSE",
        "AVATAR_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["AVATAR_TEST_QUESTION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["AVATAR_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["AVATAR_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new AvatarSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["AVATAR_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["AVATAR_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
