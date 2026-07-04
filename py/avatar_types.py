# Typed models for the Avatar SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Character:
    affiliation: Optional[str] = None
    ally: Optional[list] = None
    enemy: Optional[list] = None
    id: Optional[int] = None
    name: Optional[str] = None
    photo_url: Optional[str] = None
    position: Optional[str] = None


@dataclass
class CharacterLoadMatch:
    id: int


@dataclass
class CharacterListMatch:
    affiliation: Optional[str] = None
    ally: Optional[list] = None
    enemy: Optional[list] = None
    id: Optional[int] = None
    name: Optional[str] = None
    photo_url: Optional[str] = None
    position: Optional[str] = None


@dataclass
class Episode:
    air_date: Optional[str] = None
    director: Optional[str] = None
    episode_num: Optional[int] = None
    id: Optional[int] = None
    season: Optional[int] = None
    title: Optional[str] = None
    writer: Optional[str] = None


@dataclass
class EpisodeLoadMatch:
    id: int


@dataclass
class EpisodeListMatch:
    air_date: Optional[str] = None
    director: Optional[str] = None
    episode_num: Optional[int] = None
    id: Optional[int] = None
    season: Optional[int] = None
    title: Optional[str] = None
    writer: Optional[str] = None


@dataclass
class Question:
    answer: Optional[str] = None
    difficulty: Optional[str] = None
    id: Optional[int] = None
    question: Optional[str] = None


@dataclass
class QuestionLoadMatch:
    id: int


@dataclass
class QuestionListMatch:
    answer: Optional[str] = None
    difficulty: Optional[str] = None
    id: Optional[int] = None
    question: Optional[str] = None

