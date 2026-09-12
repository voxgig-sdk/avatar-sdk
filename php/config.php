<?php
declare(strict_types=1);

// Avatar SDK configuration

class AvatarConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Avatar",
                "slug" => "avatar",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api.sampleapis.com/avatar",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "character" => [],
                    "episode" => [],
                    "question" => [],
                ],
            ],
            "entity" => [
        'character' => [
          'fields' => [
            [
              'name' => 'affiliation',
              'short' => 'The character\'s affiliation or nation',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'allies',
              'short' => 'List of the character\'s allies',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'enemies',
              'short' => 'List of the character\'s enemies',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the character',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the character',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'photoUrl',
              'short' => 'URL to the character\'s photo',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'position',
              'short' => 'The character\'s role or position',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'character',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters',
                  'segments' => [
                    [
                      'lit' => 'characters',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'characters',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters/{id}',
                  'segments' => [
                    [
                      'lit' => 'characters',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'characters',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'episode' => [
          'fields' => [
            [
              'name' => 'airDate',
              'short' => 'Original air date of the episode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'director',
              'short' => 'Director of the episode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'episodeNum',
              'short' => 'Episode number',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the episode',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'season',
              'short' => 'Season number',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'title',
              'short' => 'Title of the episode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'writer',
              'short' => 'Writer of the episode',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'episode',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/episodes',
                  'segments' => [
                    [
                      'lit' => 'episodes',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'episodes',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/episodes/{id}',
                  'segments' => [
                    [
                      'lit' => 'episodes',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'episodes',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'question' => [
          'fields' => [
            [
              'name' => 'answer',
              'short' => 'The correct answer to the trivia question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'difficulty',
              'short' => 'Difficulty level of the question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the trivia question',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'question',
              'short' => 'The trivia question text',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'question',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/questions',
                  'segments' => [
                    [
                      'lit' => 'questions',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'questions',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/questions/{id}',
                  'segments' => [
                    [
                      'lit' => 'questions',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'questions',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return AvatarFeatures::make_feature($name);
    }
}
