# Typed models for the Avatar SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Character(TypedDict, total=False):
    affiliation: str
    ally: list
    enemy: list
    id: int
    name: str
    photo_url: str
    position: str


class CharacterLoadMatch(TypedDict):
    id: int


class CharacterListMatch(TypedDict, total=False):
    affiliation: str
    ally: list
    enemy: list
    id: int
    name: str
    photo_url: str
    position: str


class Episode(TypedDict, total=False):
    air_date: str
    director: str
    episode_num: int
    id: int
    season: int
    title: str
    writer: str


class EpisodeLoadMatch(TypedDict):
    id: int


class EpisodeListMatch(TypedDict, total=False):
    air_date: str
    director: str
    episode_num: int
    id: int
    season: int
    title: str
    writer: str


class Question(TypedDict, total=False):
    answer: str
    difficulty: str
    id: int
    question: str


class QuestionLoadMatch(TypedDict):
    id: int


class QuestionListMatch(TypedDict, total=False):
    answer: str
    difficulty: str
    id: int
    question: str
