<?php
declare(strict_types=1);

// Typed models for the Avatar SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Character entity data model. */
class Character
{
    public ?string $affiliation = null;
    public ?array $ally = null;
    public ?array $enemy = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $photo_url = null;
    public ?string $position = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public int $id;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public ?string $affiliation = null;
    public ?array $ally = null;
    public ?array $enemy = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $photo_url = null;
    public ?string $position = null;
}

/** Episode entity data model. */
class Episode
{
    public ?string $air_date = null;
    public ?string $director = null;
    public ?int $episode_num = null;
    public ?int $id = null;
    public ?int $season = null;
    public ?string $title = null;
    public ?string $writer = null;
}

/** Request payload for Episode#load. */
class EpisodeLoadMatch
{
    public int $id;
}

/** Request payload for Episode#list. */
class EpisodeListMatch
{
    public ?string $air_date = null;
    public ?string $director = null;
    public ?int $episode_num = null;
    public ?int $id = null;
    public ?int $season = null;
    public ?string $title = null;
    public ?string $writer = null;
}

/** Question entity data model. */
class Question
{
    public ?string $answer = null;
    public ?string $difficulty = null;
    public ?int $id = null;
    public ?string $question = null;
}

/** Request payload for Question#load. */
class QuestionLoadMatch
{
    public int $id;
}

/** Request payload for Question#list. */
class QuestionListMatch
{
    public ?string $answer = null;
    public ?string $difficulty = null;
    public ?int $id = null;
    public ?string $question = null;
}

