"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Avatar',
        slug: "avatar",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://api.sampleapis.com/avatar",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            character: {},
            episode: {},
            question: {},
        }
    };
    entity = {
        "character": {
            "fields": [
                {
                    "name": "affiliation",
                    "short": "The character's affiliation or nation",
                    "type": "`$STRING`"
                },
                {
                    "name": "allies",
                    "short": "List of the character's allies",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "enemies",
                    "short": "List of the character's enemies",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the character",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "short": "Name of the character",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "photoUrl",
                    "short": "URL to the character's photo",
                    "type": "`$STRING`"
                },
                {
                    "name": "position",
                    "short": "The character's role or position",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "character",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/characters",
                            "segments": [
                                {
                                    "lit": "characters"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "characters"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/characters/{id}",
                            "segments": [
                                {
                                    "lit": "characters"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "characters",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "episode": {
            "fields": [
                {
                    "name": "airDate",
                    "short": "Original air date of the episode",
                    "type": "`$STRING`"
                },
                {
                    "name": "director",
                    "short": "Director of the episode",
                    "type": "`$STRING`"
                },
                {
                    "name": "episodeNum",
                    "short": "Episode number",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the episode",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "season",
                    "short": "Season number",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "title",
                    "short": "Title of the episode",
                    "type": "`$STRING`"
                },
                {
                    "name": "writer",
                    "short": "Writer of the episode",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "episode",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/episodes",
                            "segments": [
                                {
                                    "lit": "episodes"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "episodes"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/episodes/{id}",
                            "segments": [
                                {
                                    "lit": "episodes"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "episodes",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "question": {
            "fields": [
                {
                    "name": "answer",
                    "short": "The correct answer to the trivia question",
                    "type": "`$STRING`"
                },
                {
                    "name": "difficulty",
                    "short": "Difficulty level of the question",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the trivia question",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "question",
                    "short": "The trivia question text",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "question",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/questions",
                            "segments": [
                                {
                                    "lit": "questions"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "questions"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/questions/{id}",
                            "segments": [
                                {
                                    "lit": "questions"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "questions",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map