
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Avatar',
        slug: "avatar",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api.sampleapis.com/avatar",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      character: {
      },

      episode: {
      },

      question: {
      },

    }
  }


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
              "parts": [
                "characters"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "characters",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "episodes"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "episodes",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "questions"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "questions",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

